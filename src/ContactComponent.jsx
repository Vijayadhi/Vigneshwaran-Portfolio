import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

        // Your EmailJS service and template details
        const serviceID = `${import.meta.env.VITE_EMAILER_SERVICE_ID}`; // EmailJS service ID
        const templateID = `${import.meta.env.VITE_EMAILE_TEMPLATE_ID}`; // EmailJS template ID for the form message
        const userID = `${import.meta.env.VITE_EMAILER_USER_ID}`; // Your EmailJS user ID

        // Send email to you (admin)
        emailjs.send(serviceID, templateID, formData, userID)
            .then(
                (result) => {
                    // console.log(result.text);
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });



                    // Auto-reply data to send to the user
                    const autoReplyTemplateID = `${import.meta.env.VITE_EMAILER_AUTOREPLY_ID}`; // Auto-reply template ID
                    const autoReplyData = {
                        from_name: formData.name,
                        from_email: formData.email,
                        subject: "Thank you for contacting us",
                        // message: "We have received your message and will get back to you soon."
                    };

                    // Send the auto-reply email
                    emailjs.send(serviceID, autoReplyTemplateID, autoReplyData, userID)
                        .then(
                            (autoReplyResult) => {
                                console.log("Auto-reply sent ");
                            },
                            (error) => {
                                console.log("Error sending auto-reply: ");
                            }
                        );
                },
                (error) => {

                    setStatus('Error sending message');
                }
            );
    };

    return (
        <>
            <section id="contact" className="contact section">

                {/* <!-- Section Title --> */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Looking to collaborate or hire? <br />Let’s create something amazing together. Feel free to reach out!</p>
                </div>

                {/* <!-- End Section Title --> */}

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
                                {/* <!-- End Info Item --> */}

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div>
                                        <h3>Let’s Connect </h3>
                                        <a href='tel:6380661438'>+91 6380661438</a>
                                    </div>
                                </div>
                                {/* <!-- End Info Item --> */}

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h3>Ping Me an Email</h3>
                                        <a href='mailto:venerablevignesh@gmail.com'>venerablevignesh@gmail.com</a>
                                    </div>
                                </div>
                                {/* <!-- End Info Item --> */}
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31250.04714072402!2d79.72129461011284!3d11.747014578961757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x3a549888444e5d9d%3A0x6aa2c2d991f57236!2sCuddalore%2C%20Tamil%20Nadu!3m2!1d11.748041899999999!2d79.7713687!4m3!3m2!1d11.757212299999999!2d79.7158225!5e0!3m2!1sen!2sin!4v1733578319326!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31250.04714072402!2d79.72129461011284!3d11.747014578961757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x3a549888444e5d9d%3A0x6aa2c2d991f57236!2sCuddalore%2C%20Tamil%20Nadu!3m2!1d11.748041899999999!2d79.7713687!4m3!3m2!1d11.757212299999999!2d79.7158225!5e0!3m2!1sen!2sin!4v1733578319326!5m2!1sen!2sin" frameBorder="0" style={{ border: 0, width: 100 + "%", height: 270 + "px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <label for="name-field" className="pb-2">Your Name</label>
                                        <input type="text" name="name" id="name-field" className="form-control" required="" value={formData.name}
                                            onChange={handleInputChange} />
                                    </div>

                                    <div className="col-md-6">
                                        <label for="email-field" className="pb-2">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email-field" required="" value={formData.email}
                                            onChange={handleInputChange} />
                                    </div>

                                    <div className="col-md-12">
                                        <label for="subject-field" className="pb-2">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject-field" required="" value={formData.subject}
                                            onChange={handleInputChange} />
                                    </div>

                                    <div className="col-md-12">
                                        <label for="message-field" className="pb-2">Message</label>
                                        <textarea className="form-control" name="message" rows="10" id="message-field" required="" value={formData.message}
                                            onChange={handleInputChange}></textarea>
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
                        {/* <!-- End Contact Form --> */}

                    </div>

                </div>

            </section>
            {/* <!-- /Contact Section --> */}
        </>
    );
}

export default ContactComponent;
