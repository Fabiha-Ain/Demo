// About.js
import React from "react";
import "./About.css";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const openLink = (url) => {
  window.open(url, "_blank");
};

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>--ABOUT HER</h2>
        <h1>What She Is All About</h1>
        <div className="left-right-container">
          <div className="left-section">
            <img
              src="https://picsum.photos/id/237/200/300"
              alt="Profile"
              className="profile-image"
            />
            <div className="social-icons">
              <IconButton
                onClick={() =>
                  openLink(
                    "https://www.facebook.com/profile.php?id=100078133748379"
                  )
                }
              >
                <FacebookIcon className="icon" />
              </IconButton>
              <IconButton
                onClick={() =>
                  openLink("https://www.instagram.com/jainfariha/")
                }
              >
                <InstagramIcon className="icon" />
              </IconButton>
              <IconButton
                onClick={() =>
                  openLink(
                    "https://www.linkedin.com/in/fariha-chowdhury-jain-206660148/"
                  )
                }
              >
                <LinkedInIcon className="icon" />
              </IconButton>
              <IconButton
                onClick={() => openLink("https://twitter.com/ZainFariha1")}
              >
                <TwitterIcon className="icon" />
              </IconButton>
            </div>
            <div className="progress-bars">
              <div className="progress-info">
                <p>Geographic Information Analysis</p>
                <div className="progress-bar" style={{ width: "80%" }}></div>
              </div>
              <div className="progress-info">
                <p>Automated Data Analysis</p>
                <div className="progress-bar" style={{ width: "60%" }}></div>
              </div>
              <div className="progress-info">
                <p>Research On Natural Science</p>
                <div className="progress-bar" style={{ width: "90%" }}></div>
              </div>
              <div className="progress-info">
                <p>Research On Human Geography</p>
                <div className="progress-bar" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
          <div className="right-section">
            <p>
              Fariha Chowdhury Jain has pursued her Master’s degree in
              Meteorology at the University of Dhaka. She left Shahjalal
              University of Science and Technology with a bachelor’s degree in
              Geography and Environment. She worked as a research assistant at
              SUST for over a year and a half. She conducted online researches
              throughout the COVID-19 pandemic. Right now, she is working with
              several Research teams. Her vision is to research deeper into her
              area of interest, such as Climate change impacts, Biogeography,
              Geomorphology, and child development. Thoughts of making the world
              a better place for future generations where her efforts would have
              a significant impact on protecting the physical and human
              environment prompted her to join different organizations. She
              enjoys photographing different cultures and landscapes.
            </p>
          </div>
        </div>
        <div className="section">
          <h1>--WHAT SHE DOES</h1>
          <h2>Her Area Of Interests</h2>
          <div className="flex-container">
            <div className="left-interests">
              <div className="arrow" onClick={() => openLink("#")}>
                =&gt;
              </div>
              <h3>Child Education</h3>
              <p>
                ligula eget dapibus fringilla, urna mauris maximus erat, vitae
                venenatis mauris tellus nec turpis. Curabitur faucibus felis
                elit, vel auctor lorem tristique sed. Fusce varius consectetur
                dui, vitae ultricies ligula feugiat vitae. In auctor sagittis
                enim sed feugiat.
              </p>
              <div className="arrow" onClick={() => openLink("#")}>
                =&gt;
              </div>
              <h3>Agricultural Advancements</h3>
              <p>
                ligula eget dapibus fringilla, urna mauris maximus erat, vitae
                venenatis mauris tellus nec turpis. Curabitur faucibus felis
                elit, vel auctor lorem tristique sed. Fusce varius consectetur
                dui, vitae ultricies ligula feugiat vitae. In auctor sagittis
                enim sed feugiat.
              </p>
            </div>
            <div className="right-interests">
              <div className="arrow" onClick={() => openLink("#")}>
                =&gt;
              </div>
              <h3>Rural Development</h3>
              <p>
                ligula eget dapibus fringilla, urna mauris maximus erat, vitae
                venenatis mauris tellus nec turpis. Curabitur faucibus felis
                elit, vel auctor lorem tristique sed. Fusce varius consectetur
                dui, vitae ultricies ligula feugiat vitae. In auctor sagittis
                enim sed feugiat.
              </p>
              <div className="arrow" onClick={() => openLink("#")}>
                =&gt;
              </div>
              <h3>Meteorology</h3>
              <p>
                ligula eget dapibus fringilla, urna mauris maximus erat, vitae
                venenatis mauris tellus nec turpis. Curabitur faucibus felis
                elit, vel auctor lorem tristique sed. Fusce varius consectetur
                dui, vitae ultricies ligula feugiat vitae. In auctor sagittis
                enim sed feugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h1>--EXPERIENCES</h1>
          <h2>Her Workplaces!</h2>
          <div className="flex-container">
            <div className="left-experience">
              <div className="experience-bar">
                Geographic Information Systems Analyst
              </div>
              <div className="experience-description">
                <p>Spekter GmbH | Munich, Germany</p>
                <p
                  onClick={() =>
                    openLink(
                      "https://www.dnb.com/business-directory/company-profiles.specter_gmbh.8502345b3142d480ee46c67623e8e352.html"
                    )
                  }
                >
                  Spekter GmbH
                </p>
                <p>
                  Spekter is a leading environmental tech company in the field
                  of heavy rain risk management in Germany. Spekter combines
                  technical know-how, cutting-edge technology, and market
                  presence in close cooperation with its partners. Spekter
                  creates comprehensive solutions to identify the dangers of
                  flooding and protect people from them.
                </p>
                <p>2022 - PRESENT</p>
              </div>
              <div className="experience-bar">Research Assistant</div>
              <div className="experience-description">
                <p>
                  Bangladesh Rice Research Institute (BRRI) | Gazipur,
                  Bangladesh
                </p>
                <p>
                  Research Title: Evaluation of the Effects of Climate Change on
                  Future BORO Rice Cultivation in Bangladesh
                </p>
                <p>2019 - 2019</p>
              </div>
            </div>
            <div className="right-experience">
              <div className="experience-bar">Research Assistant</div>
              <div className="experience-description">
                <p>
                  Bangladesh Rice Research Institute (BRRI) | Gazipur,
                  Bangladesh
                </p>
                <p>
                  Project Title: Projection of climate change and its impact
                  assessment on BORO rice in Bangladesh
                </p>
                <p>2021 - 2022</p>
              </div>
              <div className="experience-bar">Enumerator</div>
              <div className="experience-description">
                <p>UNICEF Bangladesh | Dhaka, Bangladesh</p>
                <p
                  onClick={() =>
                    openLink("https://www.unicef.org/bangladesh/en")
                  }
                >
                  UNICEF Bangladesh
                </p>
                <p>
                  Project name: Baseline Survey of Accelerated Water and
                  Sanitation for All (ASWA II) under GoB UNICEF project
                  Responsibilities: Conduct socio-economic survey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
