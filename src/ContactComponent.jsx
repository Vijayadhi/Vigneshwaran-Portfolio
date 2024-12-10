import React, { useState } from 'react';
import "dotenv";

function ContactComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Your GetForm endpoint URL
        const getFormURL = `${import.meta.env.VITE_GETFORM_ENDPOINT}`; // Replace with your actual GetForm endpoint

        // Send form data to GetForm
        fetch(getFormURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                // Check if the form submission was successful
                if (data.success) {
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });

                    // Send an auto-reply to the user (this could be done via GetForm as well or through another method)
                    sendAutoReply(formData);
                }
            })
            .catch((error) => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setStatus('Message Sent!Thank you for Contacting! ');
                console.error(error);
            });
    };

    const sendAutoReply = (formData) => {
        // Auto-reply data to send to the user (this can be done using GetForm's built-in autoresponder or your own method)
        const autoReplyMessage = `
            Dear ${formData.name},
            
            Thank you for contacting us. We have received your message and will get back to you soon.

            Best regards,
            Your Team
        `;

        // Simulate sending an auto-reply via email (if GetForm does not provide an auto-reply feature)
        // You can set up your own mail server or use a service like SendGrid, Mailgun, etc.
        // For now, we just log it as an example
        console.log('Auto-reply sent to:', formData.email);
        console.log('Auto-reply message:', autoReplyMessage);
    };

    return (
        <>
            <section id="contact" className="contact section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Looking to collaborate or hire? <br />Let’s create something amazing together. Feel free to reach out!</p>
                </div>
                {/* End Section Title */}

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-5">
                            <div className="info-wrap">
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h3>Find Me Here</h3>
                                        <p>697/1, Thirupathi Venkateshwara Nagar, <br /> Cuddalore,TamilNadu,<br />  India - 607401</p>
                                    </div>
                                </div>
                                {/* End Info Item */}
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Let’s Connect</h3>
                                        <a href='tel:6380661438'>+91 6380661438</a>
                                    </div>
                                </div>
                                {/* End Info Item */}
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Ping Me an Email</h3>
                                        <a href='mailto:venerablevignesh@gmail.com'>venerablevignesh@gmail.com</a>
                                    </div>
                                </div>
                                {/* End Info Item */}
                                <iframe src="https://www.google.com/maps/embed?pb=...your_map_url..." frameBorder="0" style={{ border: 0, width: '100%', height: '270px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200" action='getform.io/thank-you'>
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <label htmlFor="name-field" className="pb-2">Your Name</label>
                                        <input type="text" name="name" id="name-field" className="form-control" required value={formData.name} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email-field" className="pb-2">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email-field" required value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="subject-field" className="pb-2">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject-field" required value={formData.subject} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="message-field" className="pb-2">Message</label>
                                        <textarea className="form-control" name="message" rows="10" id="message-field" required value={formData.message} onChange={handleInputChange}></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message text-success">Your message has been sent. Thank you!</div>
                                        <button type="submit">Send Message</button>
                                        <p>{status}</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* End Contact Form */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactComponent;
