// Portfolio.js
import React, { useState } from "react";
import "./Portfolio.css";

const projects = [
  {
    image: "https://picsum.photos/200",
    title: "School Management System",
    details:
      "School Management System (SMS) is an online solution system for educational institutes. Key Features of this System include Student Information System, Employee Information System, Finance & Accounting, Attendance System, Class and Section Management, Examination and Marks Management, Class Routine and Subject Management, Hostel Management, and Fee Management. Technologies used: CodeIgniter Framework (PHP), HTML, Bootstrap, CSS, MySQL, jQuery.",
  },
  {
    image: "https://picsum.photos/200",
    title: "Online Magazine System",
    details:
      "Online magazine system is a website for users to read magazines online. It features social login, magazine upload with different editions, and an attractive magazine reader. Technologies used: Laravel Framework (PHP), HTML, Bootstrap, CSS, MySQL, jQuery.",
  },
  {
    image: "https://picsum.photos/200",
    title: "Point of Sale",
    details:
      "Point of sale is an online-based system for business organizations, including restaurants, super shops, and stores. It features categorized production information storage, product stock information, invoices for customers, inventory information, daily payment reports, profit/loss calculation, and various reporting options. Technologies used: Laravel 5.4, Vue JS, jQuery, HTML, Bootstrap 3, CSS, MySQL.",
  },
  {
    image: "https://picsum.photos/200",
    title: "Universal Sports Website",
    details:
      "This is an online platform for 'Football Fans Bangladesh,' one of the largest football communities in Bangladesh. Users have their login space with social websites. They can write and manage their articles. Key Features: Individual login for different types of users, different access roles, article approval system, search and filter by different categories, user profile. Technologies used: CodeIgniter Framework (PHP), HTML, Bootstrap, CSS, MySQL, jQuery.",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "Consultancy Firm Management",
    details:
      "This system is for consultancy firms. It helps companies track their clients' different statuses with their documents. Key Features: Module-based access control system, clients' information with documents, employee management system, salary management system, accounting system, attendance system, mailing system for subscriber/contact, CMS for the website. Technologies used: CodeIgniter Framework (PHP), HTML, Bootstrap, CSS, MySQL, jQuery.",
  },
  {
    image: "https://picsum.photos/400/300",
    title: "Portfolio & Blog",
    details:
      "Portfolio and Blog for myself. In this application, the portfolio has my complete biodata and the blog system will have tutorials regarding different topics. Key Features: Portfolio, Blog System. Technologies used: Laravel Framework (PHP), VueJS (for SPA), MySQL.",
  },
  {
    image: "https://picsum.photos/id/77/450/300",
    title: "Bangladesh Address Directory",
    details:
      "Bangladesh address directory is an online platform for users to find out their desired company address and contact information. Key Features: Company Information, Branch Information, Search facilities with different filter options, secure admin panel. Technologies used: CodeIgniter Framework (PHP), HTML, Bootstrap, CSS, MySQL, jQuery.",
  },
  {
    image: "https://picsum.photos/id/77/450/300",
    title: "Scholarship News Portal",
    details:
      "Scholarship News Portal is an online news portal for students who want to go abroad for study with a scholarship. This system helps them find out the perfect scholarship they want. Key Features: Scholarship News Post, Monitor the popularity, collect application from students via news post or university application link, flexible filter system for sorting scholarships, advertise system, verified university, email notification. Technologies used: Laravel 5.4, jQuery, HTML, Bootstrap 3, CSS, MySQL.",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const handleCloseButtonClick = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h2>--PORTFOLIO</h2>
        <h1>What She Has Done</h1>
      </div>
      <div className="portfolio-content">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <p>{project.title}</p>
              <button onClick={() => handleProjectClick(index)}>+</button>
            </div>
          </div>
        ))}
      </div>
      {selectedProject !== null && (
        <div className="project-details-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseButtonClick}>
              &times;
            </span>
            <h1>{projects[selectedProject].title}</h1>
            <p>{projects[selectedProject].details}</p>
            <button onClick={handleCloseButtonClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
