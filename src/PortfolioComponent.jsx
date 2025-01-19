import React, { useState } from 'react';
import "./App.css";
import AboutComponent from './AboutComponent';
import flight_img from './assets/img/portfolio/image.png';
import aasc_manager from './assets/img/portfolio/aasc.png';
import ecm_img from './assets/img/portfolio/ecm.png';
import gdf_img from './assets/img/portfolio/getDataFilledDotcom.png';
import omg_img from './assets/img/portfolio/omega-computers.png';
import url_img from './assets/img/portfolio/url-shortner.png';
import social_image from './assets/img/portfolio/smct.png';
import stm from './assets/img/portfolio/stm.png';
import hallbokking from './assets/img/portfolio/hallbooking.png';
import reduxcart from './assets/img/portfolio/redux-cart.png';
import recrou from './assets/img/portfolio/recrou.png';
import reacttodo from './assets/img/portfolio/react_todo.png';
import axc from './assets/img/portfolio/axc.png';
import ecm_api from './assets/img/portfolio/ecm-portfolio.png';


function PortfolioComponent() {
    const [itemsToShow, setItemsToShow] = useState(6);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const portfolioItems = [

        {
            imgSrc: `${omg_img}`,
            title: 'Shri Hayagiriva Group of Services',
            category: 'Fullstack',
            shortDescription: 'Dynamic platform built with Python Django, enabling admins to manage and redistribute services',
            fullDescription: 'A comprehensive full-stack application developed using Python Django, providing an efficient platform for managing and redistributing multiple services. With a robust admin panel, admins can customize content such as blogs, galleries, and other service details, offering an enhanced experience for both service providers and users. The platform allows seamless service applications, making it easy to manage and update content on the go. Perfect for organizations looking to provide a user-friendly service hub with administrative flexibility and content customization',
            link: 'https://shgs.onrender.com/',
        },
        {
            imgSrc: `${aasc_manager}`,
            title: 'AASC Manager',
            category: 'Fullstack',
            shortDescription: 'A complex Python full-stack application for content management and multiple user roles.',
            fullDescription: 'ASC Manager is a complex Python-based full-stack application designed for content management systems (CMS), enabling users with multiple roles such as admin and users. The app allows content creation, modification, and management with role-based access control.',
            link: 'https://aasc-st-asmt-manager.onrender.com/',
        },
        {
            imgSrc: `${ecm_img}`,
            title: 'Electricity Consumption Manager',
            category: 'Fullstack',
            shortDescription: 'Graphical representation of electricity consumption across multiple buildings using Django REST Framework and React.',
            fullDescription: 'The Electricity Consumption Manager is an advanced system that provides a graphical representation of electricity consumption across multiple buildings. Built with Django REST Framework for the backend and React for the frontend, this system includes charts (pie charts) to visually represent energy usage for each building and meter.',
            link: 'https://ec-manager-app.netlify.app/',
        },
        {
            imgSrc: `${gdf_img}`,
            title: 'getDataFilledDotcom',
            category: 'Fullstack',
            shortDescription: 'A MERN stack app for matrimony centers to generate high-quality bride bio-data templates.',
            fullDescription: 'getDataFilledDotcom is a MERN stack application developed for matrimony centers. This system enables the easy filling of bride bio-data templates, which can be downloaded in a high-quality PDF format. It serves as a solution for distributing and managing matrimonial data efficiently.',
            link: 'https://getdatafilledotcom.netlify.app/',
        },
        {
            imgSrc: `${social_image}`,
            title: 'Social and Musical Chambers Trust',
            category: 'Fullstack',
            shortDescription: 'A user-friendly platform for seamless flight search, filtering, and reservation with integrated Amadeus API.',
            fullDescription: 'The Social and Musical Chambers Trust Management System is a platform designed to streamline the activities and operations of a trust dedicated to promoting music and social causes. The system allows efficient management of events, memberships, donations, and announcements while fostering community engagement through a user-friendly interface.',
            link: 'https://socailandmusicalchamber.netlify.app',
        },

        {
            imgSrc: `${url_img}`,
            title: 'URL Shortner',
            category: 'Frontend',
            shortDescription: 'Dynamic app with Javascript enabling users to short thier urls.',
            fullDescription: 'A Dynamic app developed using Javascript enabling users to short thier long urls.Implements the CRUD operation to short the given long urls with the help of bitly api. Also has the functionalites to Edit, Copy, and even deleted the shorted urls.',
            link: 'https://mastercodeaddictsurlshortner.netlify.app/',
        },
        {
            imgSrc: `${stm}`,
            title: 'Student Mentor Assigning',
            category: 'Backend',
            shortDescription: 'API backend for managing student-mentor relationships, featuring CRUD operations.',
            fullDescription: 'A robust API that provides functionality to create, read, update, and delete (CRUD) operations for both students and mentors. Additionally, it allows for assigning mentors to students, retrieving assigned mentors, viewing previous mentor histories, and updating mentor-student relationships seamlessly.',
            link: 'https://student-mentor-assigning-lkcd.onrender.com/',
        },
        {
            imgSrc: `${stm}`,
            title: 'Node JS file system (Time Stamp Createor)',
            category: 'Backend',
            shortDescription: 'A Node.js file system that generates a timestamp for every incoming GET request and logs it for tracking purposes.',
            fullDescription: 'This Node.js application utilizes the file system to generate and store a timestamp whenever a GET request is made. On every incoming request, it records the current date and time in a log file, providing a way to track the timing of requests for analytics or logging purposes. This system allows for easy tracking and debugging by storing the timestamps in a file, helping developers monitor the frequency of GET requests and their timestamps.',
            link: 'https://node-express-timestamp.onrender.com',
        },
        {
            imgSrc: `${hallbokking}`,
            title: 'Hall Booking System',
            category: 'Backend',
            shortDescription: 'A hall booking system where users can register, view available rooms, and make bookings if rooms are available.',
            fullDescription: 'This Hall Booking System allows users to register and access a list of available rooms. Once registered, users can view real-time availability and book rooms for specific dates. The system checks room availability before confirming a booking, ensuring no double bookings occur. It stores user details, booking history, and room availability data, and allows users to manage their bookings, including viewing and canceling future reservations. Admins can update room availability, manage bookings, and generate reports, providing an efficient and streamlined process for both users and administrators.',
            link: 'https://hallbooking-h49u.onrender.com',
        },
        {
            imgSrc: `${reduxcart}`,
            title: 'Cart Page (using Redux)',
            category: 'Frontend',
            shortDescription: 'A Cart Page in a React Redux application that allows users to manage items in their shopping cart, updating item quantities, sub total and total prices are shown.',
            fullDescription: 'The Cart Page in this React Redux application provides users with an intuitive interface to manage their shopping cart. Users can add, remove, and update the quantities of items in the cart. As items are updated, the subtotal for each item is calculated and displayed, along with the total price for all items in the cart. Redux is used to store the cart data in the global state, ensuring that changes made to the cart are reflected across components in real-time. This centralized management of cart state enables easy updates, including recalculating prices and quantities, and ensuring that the cart is always up-to-date. The page also includes a checkout button for users to proceed with their purchase.',
            link: 'https://redux-cartto-page.netlify.app/',
        },
        {
            imgSrc: `${recrou}`,
            title: 'React Router ',
            category: 'Frontend',
            shortDescription: 'A task in React Router that enables navigation between different pages in a React application using dynamic routing.',
            fullDescription: 'This task involves implementing React Router in a React application to enable seamless navigation between different components or pages. React Router provides a way to dynamically render components based on the URL, allowing users to navigate through the app without reloading the page. By defining routes and associating them with corresponding components, users can visit specific sections of the app by clicking on links, or programmatically through buttons or actions. This setup ensures that the application behaves like a single-page app (SPA), with efficient and smooth transitions between views. It supports various routing features such as nested routes, route parameters, redirects, and more, giving flexibility in handling different app paths.',
            link: 'https://redux-cartto-page.netlify.app/',
        },
        {
            imgSrc: `${reacttodo}`,
            title: 'React ToDo App ',
            category: 'Frontend',
            shortDescription: 'A To-Do App built with React that allows users to create, edit, mark tasks as completed, and delete them, all with a simple, interactive interface.',
            fullDescription: 'This To-Do App is a simple yet effective task management tool built using React. It allows users to add new tasks, edit existing ones, mark tasks as completed, and delete tasks when they are no longer needed. The app offers a clean, user-friendly interface where users can view their tasks in a list format and interact with them using checkboxes and buttons. The app stores the list of tasks in the component\'s state, ensuring that the list updates dynamically as users perform actions. It includes features like task filtering (to show completed or pending tasks), sorting tasks, and managing the task\'s state (completed or not). This project demonstrates React\'s core principles such as state management, event handling, and conditional rendering, making it an ideal starter project for anyone looking to improve their skills with React.',
            link: 'https://mastercodeaddictstodoapp.netlify.app/',
        },
        {
            imgSrc: `${axc}`,
            title: 'JS Axios CRUD ',
            category: 'Frontend',
            shortDescription: 'A basic User Management system using Axios for performing CRUD operations with React as the frontend.',
            fullDescription: 'This project implements a simple User Management system where users can be created, retrieved, updated, and deleted using Axios for API calls. The application is built with React on the frontend, where users can interact with a form to add a new user or update an existing one. Axios is used to send HTTP requests to a backend server (such as a Node.js or Django API) to manage the user data.',
            link: 'https://mastercodeaddictsaxioscrud.netlify.app/',
        },
        {
            imgSrc: `${ecm_api}`,
            title: 'Electricity Manager API',
            category: 'Backend',
            shortDescription: 'EC Manager API is a backend service designed to manage electricity consumption data for multiple buildings and meters, providing endpoints for adding, updating, retrieving, and deleting records related to electricity usage.',
            fullDescription: 'The EC Manager API is a backend service built to manage and track electricity consumption for various buildings and their associated meters. It exposes several RESTful API endpoints to interact with the electricity consumption data. The system is designed to handle records for multiple buildings, each with multiple meters that track electricity usage over time.',
            link: 'https://electricity-manager-api.onrender.com/',
        },
    ];



    const handleViewMore = () => {
        setItemsToShow((prev) => prev + 6); // Increase the number of visible items
    };

    const handleViewLess = () => {
        setItemsToShow((prev) => Math.max(prev - 6, 6)); // Decrease visible items but not below the initial count
    };

    const handleModalOpen = (item) => {
        setModalContent(item);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setModalContent(null);
    };

    const filteredItems = selectedCategory === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container section-title" data-aos="fade-up">
                    <h2 style={{ textTransform: 'uppercase' }}>My Portfolio</h2>
                    <p>Welcome to my portfolio! Here, you’ll find a collection of projects...</p>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-center mb-4">
                        <button
                            className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'} mx-2`}
                            onClick={() => setSelectedCategory('all')}
                        >
                            All
                        </button>
                        <button
                            className={`btn ${selectedCategory === 'Fullstack' ? 'btn-primary' : 'btn-secondary'} mx-2`}
                            onClick={() => setSelectedCategory('Fullstack')}
                        >
                            Fullstack
                        </button>
                        <button
                            className={`btn ${selectedCategory === 'Frontend' ? 'btn-primary' : 'btn-secondary'} mx-2`}
                            onClick={() => setSelectedCategory('Frontend')}
                        >
                            Frontend
                        </button>
                        <button
                            className={`btn ${selectedCategory === 'Backend' ? 'btn-primary' : 'btn-secondary'} mx-2`}
                            onClick={() => setSelectedCategory('Backend')}
                        >
                            Backend
                        </button>
                    </div>

                    <div className="row portfolio-container">
                        {filteredItems.slice(0, itemsToShow).map((item, index) => (
                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app mb-5" key={index}>
                                <div className="portfolio-content h-100">
                                    <img
                                        src={item.imgSrc}
                                        className="img-fluid"
                                        alt={item.title}
                                    />
                                    <div className="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.shortDescription}</p>
                                        <a
                                            href="#!"
                                            onClick={() => handleModalOpen(item)}
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in"></i>
                                        </a>
                                        <a
                                            href={item.link}
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

                    <div className="text-center mt-4">
                        {itemsToShow < filteredItems.length && (
                            <button className="btn btn-primary mx-2" onClick={handleViewMore}>
                                View More
                            </button>
                        )}
                        {itemsToShow > 6 && (
                            <button className="btn btn-secondary mx-2" onClick={handleViewLess}>
                                View Less
                            </button>
                        )}
                    </div>
                </div>

                {/* Modal */}
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
                                        Visit
                                    </a>
                                </div>
                                <div className="modal-body">
                                    <img src={modalContent.imgSrc} className="img-fluid mb-4" alt={modalContent.title} />
                                    <p>{modalContent.fullDescription}</p>
                                </div>
                                <div className="modal-footer">
                                    <i className="bi bi-x-circle btn btn-dark" onClick={handleModalClose}></i>
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
