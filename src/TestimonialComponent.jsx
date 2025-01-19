import React from 'react';
import vishanAcademy from "./assets/img/testimonials/Vishanacademy.jpeg"
import sivaram from "./assets/img/testimonials/sivaram.jpeg"
import ammaiappantrust from "./assets/img/testimonials/ammaiappantrust.jpeg"
function TestimonialComponent() {
    return (
        <>
            {/* <!-- Testimonials Section --> */}
            <section id="testimonials" className="testimonials section light-background">
                {/* <!-- Section Title --> */}
                <div className="container section-title" data-aos="fade-up">
                    <h2 style={{textTransform: 'uppercase'}}>Testimonials</h2>
                    <p>"I am committed to ensuring my clients’ satisfaction, and <br/>I strive to exceed their expectations through exceptional service and innovative solutions."</p>
                </div>
                {/* <!-- End Section Title --> */}

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper init-swiper">
                        <script type="application/json" className="swiper-config">
                            {JSON.stringify({
                                loop: true,
                                speed: 600,
                                autoplay: {
                                    delay: 5000,
                                },
                                slidesPerView: "auto",
                                pagination: {
                                    el: ".swiper-pagination",
                                    type: "bullets",
                                    clickable: true,
                                },
                                breakpoints: {
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 1,
                                    },
                                },
                            })}
                        </script>
                        <div className="swiper-wrapper">
                            {/* <!-- Testimonial Items --> */}
                            {[
                                {
                                    text: "The professionalism and expertise displayed by your team are remarkable, ensuring that every project is executed with precision and creativity. From timely delivery to seamless support, your commitment to meeting and exceeding expectations has left a lasting impression.",
                                    img: `${vishanAcademy}`,
                                    name: "Richard Praveen Dos",
                                    role: "Chairman & Founder, Vishan Academy",
                                },
                                // {
                                //     text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
                                //     img: "assets/img/testimonials/testimonials-2.jpg",
                                //     name: "Sara Wilsson",
                                //     role: "Designer",
                                // },
                                {
                                    text: "Brother Vignesh, on behalf of our trust, undertakes video editing tasks exceptionally well and beautifully. With great precision and skill, he creates video edits that effectively showcase our trust’s food service to the world in an admirable manner.",
                                    img: `${ammaiappantrust}`,
                                    name: "Saravanan",
                                    role: "Ammai Appan Trust, Pondicherry",
                                },
                                // {
                                //     text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
                                //     img: "assets/img/testimonials/testimonials-4.jpg",
                                //     name: "Matt Brandon",
                                //     role: "Freelancer",
                                // },
                                {
                                    text: "The design, functionality, and overall user experience are exceptional. It's clear that a lot of thought and effort went into crafting every detail. The app has truly exceeded my expectations",
                                    img: `${sivaram}`,
                                    name: "Sivaram",
                                    role: "Karpagavilas Store, Cuddalore",
                                },
                            ].map((testimonial, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            <span>{testimonial.text}</span>
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <img src={testimonial.img} className="testimonial-img" alt={testimonial.name} />
                                        <h3>{testimonial.name}</h3>
                                        <h4>{testimonial.role}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            {/* <!-- /Testimonials Section --> */}
        </>
    );
}

export default TestimonialComponent;
