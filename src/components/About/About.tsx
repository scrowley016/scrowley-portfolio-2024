import { Container } from "./styles";

import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import nextIcon from "../../assets/nextjs.png";
import php from "../../assets/php.jpg";
import python from "../../assets/python.jpg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h3>About me</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>

            Hi there! I'm Shannon, I am a seasoned full stack developer with a rich background in both web and iOS development, currently enhancing user experiences at Helm Experience & Design. My technical toolkit is replete with advanced skills in React, PHP, and a suite of other powerful technologies, enabling me to architect and build sophisticated full-stack solutions. My career trajectory has taken me from the foundational role of an IT technician to the intricate world of software development, a path characterized by relentless pursuit of knowledge and a deep-rooted passion for solving complex problems.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            At Helm, I take pride in my ability to turn abstract client visions into tangible, impactful applications that engage and delight users. This role not only allows me to leverage my technical acumen to create dynamic applications but also helps me stay at the forefront of technology, continuously adapting and learning in a fast-paced industry. My work is a reflection of my dedication to excellence and my commitment to delivering exceptional results that resonate with target audiences.
            </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Beyond my role as a developer, I am also a mentor at Fullstack Academy, where I enrich the learning experiences of budding developers. Here, I focus on project management and educational strategies to cultivate a new generation of tech professionals who are ready to tackle industry challenges. My experience as a mentor enriches my work by giving me a dual perspective, combining an educator’s clarity and a technician’s precision in approaching development challenges. This unique blend of skills and perspectives not only enhances my capabilities but also adds a valuable dimension to my professional persona.
          </p>
        </ScrollAnimation>
         <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I am eager to explore opportunities to bring innovative solutions to life, whether it involves crafting powerful applications or guiding future tech leaders. Let's connect and create something great together!
          </p>
        </ScrollAnimation>
       
         
      </div>
      <div>
         <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Proficient Technologies:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000} className="scrollContainer">
              <img src={reactIcon} alt="React" />
              <p>React.js</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000} className="scrollContainer">
              <img src={nodeIcon} alt="Node" />
              <p>Node.js</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000} className="scrollContainer">
              <img src={vueIcon} alt="Vue" />
              <p>Vue.js</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000} className="scrollContainer">
              <img src={htmlIcon} alt="Html" />
              <p>HTML</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000} className="scrollContainer">
              <img src={cssIcon} alt="Css" />
              <p>CSS</p>
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000} className="scrollContainer">
              <img src={wordpress} alt="Wordpress" />
              <p>Wordpress</p>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000} className="scrollContainer">
              <img src={php} alt="PHP" />
              <p>PHP</p>
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000} className="scrollContainer">
              <img src={nextIcon} alt="Next" />
              <p>Next.js</p>
            </ScrollAnimation>
          </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000} className="scrollContainer">
              <img src={python} alt="PHP" />
              <p>Python</p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      
    </Container>
  )
}
