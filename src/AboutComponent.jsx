import React, { useEffect, useState } from 'react';
import ResumeComponent from './ResumeComponent'
function AboutComponent() {
    const [progress, setProgress] = useState({
        html: 0,
        css: 0,
        javascript: 0,
        django: 0,
        python: 0,
        photoshop: 0,
        react: 0,
        express: 0,
        figma: 0,
        technical_service: 0
    });

    // Update progress values when the component mounts
    useEffect(() => {
        const progressData = {
            html: 90,
            css: 65,
            javascript: 75,
            django: 100,
            python: 95,
            photoshop: 50,
            react: 70,
            express: 100,
            figma: 55,
            technical_service: 60
        };

        Object.keys(progressData).forEach((key, index) => {
            setTimeout(() => {
                setProgress((prevProgress) => ({
                    ...prevProgress,
                    [key]: progressData[key],
                }));
            }, index * 1000); // Delay each progress bar animation slightly
        });

        // Initialize Isotope
        // const isotope = new window.Isotope('.isotope-container', {
        //     itemSelector: '.portfolio-item',
        //     layoutMode: 'masonry',
        //     filter: '*', // Default filter: show all
        // });

        // // Handle filter click
        // const filters = document.querySelectorAll('.portfolio-filters li');
        // filters.forEach(filter => {
        //     filter.addEventListener('click', (e) => {
        //         const filterValue = e.target.getAttribute('data-filter');
        //         isotope.arrange({ filter: filterValue });
        //         filters.forEach(f => f.classList.remove('filter-active'));
        //         e.target.classList.add('filter-active');
        //     });
        // });
    }, []);
    return (
        <>
            {/* <!-- About Section --> */}
            <section id="about" className="about section">

                {/* <!-- Section Title --> */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>Driven and detail-oriented Information Technology student with a strong foundation in both technical and creative disciplines. Currently pursuing a Bachelor's degree in Information Technology at Achariya Arts & Science College, Pondicherry, with hands-on experience in web development, graphic design, and technical service engineering. My passion lies in leveraging technology to create innovative solutions and deliver user-centric designs. I am committed to continuous growth and eager to contribute to forward-thinking projects that drive both personal and organizational success.</p>
                </div>

                {/* <!-- End Section Title --> */}

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src="src/assets/img/IMG_20240120_090302_654.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>Python Fullstack & MERN Stack Developer</h2>
                            <p className="fst-italic py-3">
                                A passionate and skilled developer specializing in both Python Fullstack and MERN stack technologies. With a strong foundation in backend development using Django and Flask, and frontend expertise in React, Node.js, and MongoDB, I focus on building scalable, efficient, and user-friendly applications. Constantly learning and adapting to new technologies to create solutions that drive business growth and innovation.
                            </p>

                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>30/10/2004</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 6380661438</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>TamilNadu, India</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>venerablevignesh@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                Dedicated to delivering high-quality solutions, I excel at managing complex projects and ensuring timely, effective results. With a keen eye for detail and a focus on problem-solving, I strive to create value through thoughtful, innovative approaches. My work is driven by a passion for excellence, attention to client needs, and a commitment to continuous improvement in all aspects of development.
                            </p>

                        </div>
                    </div>

                </div>

            </section>
            {/* <!-- /About Section --> */}

            {/* <!-- Stats Section --> */}
            {/* <section id="stats" className="stats section"> */}

            {/* <div className="container" data-aos="fade-up" data-aos-delay="100"> */}

            {/* <div className="row gy-4"> */}
            {/* 
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-emoji-smile"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                            </div>
                        </div> */}
            {/* <!-- End Stats Item --> */}

            {/* <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-journal-richtext"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                            </div>
                        </div> */}
            {/* <!-- End Stats Item --> */}

            {/* <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-headset"></i>
                                <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                            </div>
                        </div> */}
            {/* <!-- End Stats Item --> */}

            {/* <div className="col-lg-3 col-md-6">
                            <div className="stats-item">
                                <i className="bi bi-people"></i>
                                <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                            </div>
                        </div> */}
            {/* <!-- End Stats Item --> */}
            {/* 
                    </div>

                </div>

            </section> */}
            {/* <!-- /Stats Section --> */}


            <ResumeComponent />
            {/* <!-- Skills Section --> */}
            <section id="skills" className="skills section light-background">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row skills-content skills-animation">
                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">
                                    <span>HTML</span> <i className="val">{progress.html}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.html}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.html}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">
                                    <span>CSS</span> <i className="val">{progress.css}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.css}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.css}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">
                                    <span>JavaScript</span> <i className="val">{progress.javascript}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.javascript}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.javascript}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Express</span> <i className="val">{progress.express}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.express}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.express}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Python</span> <i className="val">{progress.python}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.python}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.python}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>



                        <div className="col-lg-6">
                            <div className="progress">
                                <span className="skill">
                                    <span>Django</span> <i className="val">{progress.django}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.django}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.django}%` }}
                                    ></div>
                                </div>
                            </div>



                            <div className="progress">
                                <span className="skill">
                                    <span>React</span> <i className="val">{progress.react}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.react}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.react}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">
                                    <span>Photoshop</span> <i className="val">{progress.photoshop}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.photoshop}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.photoshop}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Figma</span> <i className="val">{progress.figma}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.figma}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.figma}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">
                                    <span>Technical Service</span> <i className="val">{progress.technical_service}%</i>
                                </span>
                                <div className="progress-bar-wrap">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        aria-valuenow={progress.technical_service}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        style={{ width: `${progress.technical_service}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Skills Section --> */}

            {/* <!-- Services Section --> */}
            <section id="services" className="services section">

                {/* <!-- Section Title --> */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <p>Offering a blend of technical expertise and creative solutions, I specialize in delivering high-quality services tailored to meet your unique needs. From full-stack development to stunning visuals, I bring ideas to life with precision and dedication.</p>
                </div>
                {/* <!-- End Section Title --> */}

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon flex-shrink-0"><i className="bi bi-laptop"></i></div>
                            <div>
                                <h4 className="title"><a href="service-details.html" className="stretched-link">Full-Stack Development</a></h4>
                                <p className="description">Proficient in Python Django and MERN stack, I build scalable, robust, and user-friendly web applications tailored to your business needs.</p>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon flex-shrink-0"><i className="bi bi-tools"></i></div>
                            <div>
                                <h4 className="title"><a href="service-details.html" className="stretched-link">Technical Support</a></h4>
                                <p className="description">Expertise in card-level repairs and hardware troubleshooting ensures swift and reliable technical support services for your devices.</p>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon flex-shrink-0"><i className="bi bi-brush"></i></div>
                            <div>
                                <h4 className="title"><a href="service-details.html" className="stretched-link">Graphic Design</a></h4>
                                <p className="description">From logo creation to marketing materials, I craft visually compelling designs that align with your brand identity using Photoshop and Figma.</p>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon flex-shrink-0"><i className="bi bi-palette"></i></div>
                            <div>
                                <h4 className="title"><a href="service-details.html" className="stretched-link">UI/UX Design</a></h4>
                                <p className="description">Delivering intuitive and aesthetically pleasing interfaces that enhance user experience, leveraging tools like Figma for design precision.</p>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon flex-shrink-0"><i className="bi bi-code-slash"></i></div>
                            <div>
                                <h4 className="title"><a href="service-details.html" className="stretched-link">Web Development</a></h4>
                                <p className="description">Specialized in creating responsive, dynamic websites with modern frameworks and technologies to ensure seamless performance.</p>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
                            <div className="icon flex-shrink-0"><i className="bi bi-image"></i></div>
                            <div>
                                <h4 className="title"><a href="service-details.html" className="stretched-link">Photo Editing</a></h4>
                                <p className="description">Providing high-quality photo editing services to enhance visual appeal, ensuring perfection in every detail.</p>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                    </div>

                </div>

            </section>

            {/* <!-- /Services Section --> */}

        </>
    )
}

export default AboutComponent