import React, { useEffect, useState } from 'react';
import "./App.css"
import AboutComponent from './AboutComponent';

function PortfolioComponent() {
    const [itemsToShow, setItemsToShow] = useState(6);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const portfolioItems = [
        {
            imgSrc: 'src/assets/img/portfolio/image.png',
            title: 'Flight Reservation System',
            shortDescription: 'A user-friendly platform for seamless flight search, filtering, and reservation with integrated Amadeus API.',
            fullDescription: 'A dynamic web application designed to simplify flight searches and reservations. Built using the **<b>MERN stack (MongoDB, Express.js, React.js, Node.js)**, it integrates with the **Amadeus API** for real-time flight data. The application features responsive design implemented with **Tailwind css** It utilizes **session storage** for temporary data management and supports advanced filtering options for user convenience. This system combines modern UI/UX principles with robust backend architecture to deliver a seamless booking experience.',
            link: 'https://flight-reservation-system-wine.vercel.app/?vercelToolbarCode=AN28OJKUfQnmyz5'
        },
        {
            imgSrc: 'src/assets/img/portfolio/aasc.png',
            title: 'ASC Manager',
            shortDescription: 'A complex Python full-stack application for content management and multiple user roles.',
            fullDescription: 'ASC Manager is a complex Python-based full-stack application designed for content management systems (CMS), enabling users with multiple roles such as admin and users. The app allows content creation, modification, and management with role-based access control.',
            link: 'https://aasc-st-asmt-manager.onrender.com/'
        },
        {
            imgSrc: 'src/assets/img/portfolio/ecm.png',
            title: 'Electricity Consumption Manager',
            shortDescription: 'Graphical representation of electricity consumption across multiple buildings using Django REST Framework and React.',
            fullDescription: 'The Electricity Consumption Manager is an advanced system that provides a graphical representation of electricity consumption across multiple buildings. Built with Django REST Framework for the backend and React for the frontend, this system includes charts (pie charts) to visually represent energy usage for each building and meter.',
            link: 'https://ec-manager-app.netlify.app/'
        },
        {
            imgSrc: 'src/assets/img/portfolio/getDataFilledDotcom.png',
            title: 'getDataFilledDotcom',
            shortDescription: 'A MERN stack app for matrimony centers to generate high-quality bride bio-data templates.',
            fullDescription: 'getDataFilledDotcom is a MERN stack application developed for matrimony centers. This system enables the easy filling of bride bio-data templates, which can be downloaded in a high-quality PDF format. It serves as a solution for distributing and managing matrimonial data efficiently.',
            link: 'https://getdatafilledotcom.netlify.app/'
        },
        {
            imgSrc: 'src/assets/img/portfolio/omega-computers.png',
            title: 'Shri Hayagiriva Group of Services',
            shortDescription: 'Dynamic platform built with Python Django, enabling admins to manage and redistribute services',
            fullDescription: 'A comprehensive full-stack application developed using Python Django, providing an efficient platform for managing and redistributing multiple services. With a robust admin panel, admins can customize content such as blogs, galleries, and other service details, offering an enhanced experience for both service providers and users. The platform allows seamless service applications, making it easy to manage and update content on the go. Perfect for organizations looking to provide a user-friendly service hub with administrative flexibility and content customization',
            link: 'https://shgs.onrender.com/'
        },
        {
            imgSrc: 'src/assets/img/portfolio/url-shortner.png',
            title: 'URL Shortner',
            shortDescription: 'Dynamic app with Javascript enabling users to short thier urls.',
            fullDescription: 'A Dynamic app developed using Javascript enabling users to short thier long urls.Implements the CRUD operation to short the given long urls with the help of bitly api. Also has the functionalites to Edit, Copy, and even deleted the shorted urls.',
            link: 'https://mastercodeaddictsurlshortner.netlify.app/'
        },
        // Add more items as needed...
    ];

    const handleViewMore = () => {
        setItemsToShow(prev => prev + 6); // Increase the number of visible items
    };

    const handleModalOpen = (item) => {
        setModalContent(item);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setModalContent(null);
    };
    return (
        <>
            {/* <!-- Portfolio Section --> */}
            <section id="portfolio" className="portfolio">
                <div class="container section-title" data-aos="fade-up">
                    <h2>My Portfolio</h2>
                    <p>Welcome to my portfolio! Here, you’ll find a collection of projects that showcase my skills and expertise in various technologies. Each project reflects my commitment to delivering high-quality, innovative solutions that meet real-world challenges.</p>
                </div>

                {/* <!-- End Section Title --> */}
                <div className="container">
                    <div className="row portfolio-container">
                        {portfolioItems.slice(0, itemsToShow).map((item, index) => (
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app mb-5" key={index}>
                                <div className="portfolio-content h-100">
                                    <img
                                        src={item.imgSrc}
                                        className="img-fluid"
                                        alt={item.title}
                                    /><br />
                                    <div className="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.shortDescription}</p>
                                        <a
                                            href="#!"
                                            onClick={() => handleModalOpen(item)}
                                            title="View Details"
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                        <a
                                            href={item.link}
                                            title="Visit Page"
                                            className="details-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="bi bi-link-45deg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {itemsToShow < portfolioItems.length && (
                        <div className="text-center mt-4">
                            <button
                                className="btn btn-primary"
                                onClick={handleViewMore}
                            >
                                View More
                            </button>
                        </div>
                    )}
                </div>

                {/* Modal for detailed view */}
                {showModal && modalContent && (
                    <div className="modal show" style={{ display: 'block' }} onClick={handleModalClose}>
                        <div className="modal-dialog modal-lg" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="fw-bold modal-title">{modalContent.title}</h3>
                                    <a
                                        href={modalContent.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-dark"
                                    >
                                        <i className="bi bi-box-arrow-up-right"><br />Visit</i>
                                    </a>
                                    {/* <button type="button" className="close" onClick={handleModalClose}>&times;</button> */}
                                </div>
                                <div className="modal-body">
                                    <img
                                        src={modalContent.imgSrc}
                                        className="img-fluid mb-4"
                                        alt={modalContent.title}
                                    />
                                    <p>{modalContent.fullDescription}</p>
                                </div>
                                <div className="modal-footer">
                                    &nbsp;
                                    {/* Only one close button is kept here */}
                                    {/* <button type="button" className="" onClick={}> */}
                                    <i className="bi bi-x-circle btn btn-dark" onClick={handleModalClose}></i>
                                    {/* </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <AboutComponent />
        </>
    );
}

export default PortfolioComponent;
