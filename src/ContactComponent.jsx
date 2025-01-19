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

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('subject', formData.subject);
        formDataToSend.append('message', formData.message);

        // Use your Formspree form endpoint (e.g., https://formspree.io/f/your_form_id)
        const apiEndpoint = 'https://formspree.io/f/mnnqybod'; // Replace with your Formspree form ID

        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: formDataToSend,
        })
            .then(response => {
                if (response.ok) {
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    throw new Error('Error sending message');
                }
            })
            .catch(error => {
                setStatus('Error sending message');
                console.log(error);
            });
    };
    

    return (
        <>
            <section id="contact" className="contact section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2 style={{textTransform: 'uppercase'}}>Contact</h2>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3906.1137749829163!2d79.71324667511465!3d11.75703478845775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQ1JzI1LjMiTiA3OcKwNDInNTcuMCJF!5e0!3m2!1sen!2sin!4v1737141709924!5m2!1sen!2sin" frameBorder="0" style={{ border: 0, width: '100%', height: '270px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=...your_map_url..." frameBorder="0" style={{ border: 0, width: '100%', height: '270px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
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
