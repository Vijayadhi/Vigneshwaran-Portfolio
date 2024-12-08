import React from 'react'
import PortfolioComponent from './PortfolioComponent'

function ResumeComponent() {
    const handleDownload = () => {
        // Create an invisible link element
        const link = document.createElement('a');
        link.href = 'src/assets/VigneshResume.pdf'; // Path to your resume
        link.download = 'Vigneshwaran-Resume.pdf'; // Name the downloaded file (optional)

        // Trigger the click event
        link.click();
    };
    return (
        <>
            {/* <!-- Resume Section --> */}
            <section id="resume" className="resume section">

                {/* <!-- Section Title --> */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Resume</h2>
                    <p>Discover my professional journey, highlighting my skills, achievements, and experiences. From academic excellence to real-world expertise, this is a snapshot of my dedication, growth, and passion for making an impact. Let’s build the future together!</p>
                </div>

                {/* <!-- End Section Title --> */}

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Sumary</h3>

                            <div className="resume-item pb-0">
                                <h4>Vigneshwaran Jayaraman</h4>
                                <p><em>Creative and detail-oriented Full Stack Developer with expertise in Python Django and MERN stack, complemented by proficiency in UI/UX design and graphics. With a proven track record of building responsive websites and mobile applications, I bring innovation and dedication to delivering user-centered solutions from concept to completion.</em></p>
                                <ul>
                                    <li>Cuddalore, Tamil Nadu, India - 607 401</li>
                                    <li>(+91) 63806 61438</li>
                                    <li>venerablevignesh@example.com</li>
                                </ul>

                            </div>
                            {/* <!-- Edn Resume Item --> */}

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor of Information Technology</h4>
                                <h5>2022 - 2025</h5>
                                <p><em>Achariya Arts &amp; Science College, Pondicherry</em></p>
                                <p>Innovative and detail-oriented student pursuing a Bachelor’s degree in Information Technology. Gaining experience in software development, database management, and web technologies. Focused on combining theoretical knowledge with practical experience to create solutions that meet real-world challenges.</p>
                            </div>

                            {/* <!-- Edn Resume Item --> */}

                            <div className="resume-item">
                                <h4>Diploma in Technical Service Engineering</h4>
                                <h5>August 2022 - January 2023</h5>
                                <p><em>Pioneer Computers, Cuddalore</em></p>
                                <p>Acquired comprehensive knowledge in technical service engineering, including troubleshooting, system maintenance, and hardware repairs. Developed skills in analyzing and resolving technical issues in a variety of systems and devices. Hands-on experience in providing efficient solutions to meet the technical needs of clients.</p>
                            </div>

                            <h3 className="resume-title">Certification</h3>
                            <div className="resume-item">
                                <h4>Full-stack Development (MERN stack) Certification</h4>
                                <h5>2023-2024</h5>
                                <p><em>Guvi ZEN Class Program, IIT-M Incubated</em></p>
                                <p>Completed certification in Full-stack Development with MERN stack, covering core web technologies including MongoDB, Express.js, React, and Node.js. Gained practical knowledge in building and deploying modern, scalable web applications with a strong focus on both front-end and back-end development.</p>
                            </div>

                            <div className="resume-item">
                                <h4>Python Backend Development (Django)</h4>
                                <h5>2021-2022</h5>
                                <p><em>App Tech, Cuddalore</em></p>
                                <p>Completed certification in Python Backend Development with Django, focusing on building robust, scalable web applications. Gained hands-on experience with Django's ORM, middleware, authentication, and REST APIs. Developed a solid understanding of backend architecture, including database management and server-side logic, to support full-stack development.</p>
                            </div>

                            <div className="resume-item">
                                <h4>Advanced Diploma in Python Programming</h4>
                                <h5>2020-2021</h5>
                                <p><em>CSC, Cuddalore</em></p>
                                <p>Completed an Advanced Diploma in Python Programming, with a strong foundation in C, C++, Python, and MySQL. Gained hands-on experience in software development, database management, and object-oriented programming. Acquired expertise in building efficient algorithms, developing database-driven applications, and writing clean, maintainable code. Focused on practical applications of programming concepts to solve real-world problems.</p>
                            </div>

                            {/* <!-- Edn Resume Item --> */}

                        </div>

                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Python Fullstack Developer &amp; Trainer</h4>
                                <h5>2022-2023</h5>
                                <p>BugHunt Technologies,<br /> <em>Cuddalore, Tamil Nadu, India</em></p>
                                <p>Worked as a Python Fullstack Developer & Trainer, contributing to the development of web applications using Python and assisting in both backend and frontend development tasks. Additionally, mentored team members in full-stack development using Python, Tkinter, MySQL, and other technologies.</p>
                                <ul>
                                    <li>Designed and developed web applications with Python, leveraging frameworks such as Django for backend development and Tkinter for GUI applications.</li>
                                    <li>Built and maintained MySQL databases for efficient data storage, management, and retrieval in applications.</li>
                                    <li>Developed APIs for seamless data exchange between backend and front-end interfaces, ensuring smooth integration with MySQL databases.</li>
                                    <li>Contributed to debugging, troubleshooting, and optimizing existing codebase, enhancing the performance and reliability of applications.</li>
                                    <li>Assisted in training and mentoring junior developers, providing guidance on Python full-stack development and fostering team collaboration.</li>
                                </ul>
                            </div>

                            <div className="resume-item">
                                <h4>Python Fullstack Intern</h4>
                                <h5>2021-2022</h5>
                                <p>BugHunt Technologies,<br /> <em>Cuddalore, Tamil Nadu, India</em></p>
                                <p>Worked as a Python Fullstack Intern, contributing to the development of web applications using Python assisting in both frontend and backend development tasks.</p>
                                <ul>
                                    <li>Collaborated in the design and development of scalable web applications, leveraging Python and JavaScript for backend and frontend development.</li>
                                    <li>Contributed to building APIs and integrating third-party services for enhanced application functionality.</li>
                                    <li>Assisted in debugging and troubleshooting issues to ensure the smooth operation of web applications.</li>
                                    <li>Worked with a cross-functional team to implement features and enhancements, improving user experience and performance.</li>
                                </ul>
                            </div>

                            {/* <!-- Edn Resume Item --> */}

                            <div className="resume-item">
                                <h4>Technical Service Intern</h4>
                                <h5>2022</h5>
                                <p><em>Pionner Computers</em>, Cuddalore, Tamil Nadu, India</p>
                                <p>Provided hands-on technical support by diagnosing and resolving card-level hardware issues in computers and laptops, focusing on motherboard repairs and component replacements, ensuring optimal system performance.</p>
                                <ul>
                                    <li>Diagnosed and resolved hardware issues for computers and laptops, focusing on card-level components repair.</li>
                                    <li>Performed troubleshooting, testing, and maintenance of computer systems, ensuring optimal functionality for clients.</li>
                                    <li>Assisted in replacing faulty components and upgrading systems, improving performance and reliability.</li>
                                    <li>Collaborated with senior technicians to identify recurring hardware issues and contributed to developing efficient repair solutions.</li>
                                </ul>
                            </div>
                            {/* <!-- Edn Resume Item --> */}

                        </div>


                    </div>
                    <div className="resume-button">
                        <button
                            className="btn btn-lg text-center"
                            style={{ background: "#149ddd", fontWeight: 'bold', color: "#15141A", textAlign: "center" }}
                            onClick={handleDownload}
                        >
                            Download CV &nbsp;
                            <i className="bi bi-arrow-down-circle" style={{ color: "white", fontWeight: 'bold' }}></i>
                        </button>
                    </div>


                </div>

            </section>
            {/* <!-- /Resume Section --> */}
        </>
    )
}

export default ResumeComponent