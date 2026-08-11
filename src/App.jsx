import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      ".eyebrow",
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      }
    )

    tl.fromTo(
      ".hero-text h1",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }
    )

    tl.fromTo(
      ".hero-text h3",
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }
    )

    tl.fromTo(
      ".hero-description",
      {
        opacity: 0,
        y: 25
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      }
    )

    tl.fromTo(
      ".hero-buttons",
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      }
    )

    tl.fromTo(
      ".profile-placeholder",
      {
        opacity: 0,
        x: 60,
        scale: 0.9
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      }
    )
    tl.fromTo(
  ".about-section",
  {
    opacity: 0,
    y: 40
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: "power3.out"
  }
)
    gsap.fromTo(
      ".about-section",
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%"
        }
      }
    )

    gsap.fromTo(
      ".skill-card",
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%"
        }
      }
    )

    gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%"
        }
      }
    )

    gsap.fromTo(
      ".contact-section",
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%"
        }
      }
    )
  }, [])

  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">

        <nav>
          <h2>HIMANSHI</h2>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">

          <div className="hero-text">

            <p className="eyebrow">
              HELLO, I'M
            </p>

            <h1>
              Himanshi Mishra
            </h1>

            <h3>
              Web Developer
            </h3>

            <p className="hero-description">
              Building modern, responsive and interactive web experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects">
                View My portfolio
              </a>

              <a href="#contact">
                Contact Me
              </a>
            </div>

          </div>

          <div className="profile-placeholder">
            PHOTO
          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}
      <section id="about" className="about-section">

        <div className="about-heading">
          <p>ABOUT ME</p>

          <h2>
            A little about
            <br />
            my journey
          </h2>
        </div>

        <div className="about-content">

          <p>
            I'm Himanshi Mishra, a web developer with a background in
            Mathematics. After completing my B.Sc. and M.Sc. in Mathematics,
            I decided to transition into web development and started
            building my skills through hands-on learning and projects.
          </p>

          <p>
            I'm passionate about creating clean, responsive and interactive
            experiences while continuously learning new technologies.
          </p>

        </div>

      </section>


      {/* SKILLS SECTION */}
      <section id="skills" className="skills-section">

        <div className="skills-heading">

          <p>MY SKILLS</p>

          <h2>
            Technologies I work with
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>HTML</h3>
            <p>
              Semantic and accessible web structure.
            </p>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>
              Responsive layouts and modern styling.
            </p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>
              Interactive and dynamic web experiences.
            </p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>
              Building reusable and interactive UI.
            </p>
          </div>

        </div>

      </section>


      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">

        <div className="projects-heading">

          <p>MY PROJECTS</p>

          <h2>
            Things I've built
          </h2>

        </div>

        <div className="projects-grid">

          {/* PROJECT 01 */}
          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <h3>
              SkyMart
            </h3>

            <p>
              A modern grocery retail web application designed to provide
              a smooth and user-friendly shopping experience.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/himanshim-dev00/skymart"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 02 */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Redux Notes App
            </h3>

            <p>
              A React-based notes application using Redux Toolkit for
              efficient state management and interactive note handling.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Redux</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/himanshim-dev00/redux-notes-app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 03 */}
          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              Design Studio
            </h3>

            <p>
              A modern studio website focused on clean design,
              responsive layouts and a smooth user experience.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <a
              href="https://github.com/himanshim-dev00/Design-Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 04 */}
          <div className="project-card">

            <div className="project-number">
              04
            </div>

            <h3>
              Nice Day Landing Page
            </h3>

            <p>
              A clean and responsive landing page created with
              modern HTML and CSS styling.
            </p>

            <div className="project-tech">
              <span>HTML5</span>
              <span>CSS3</span>
            </div>

            <a
              href="https://github.com/himanshim-dev00/nice-day-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>


          {/* PROJECT 05 */}
          <div className="project-card">

            <div className="project-number">
              05
            </div>

            <h3>
              Student Registration Form
            </h3>

            <p>
              A responsive student registration form with a clean layout
              and simple user-friendly interface.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <a
              href="https://github.com/himanshim-dev00/Student-s-Registration-Form-"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>

          </div>

        </div>

      </section>


      {/* CONTACT SECTION */}

<section id="contact" className="contact-section">

  <div className="contact-heading">
    <p>GET IN TOUCH</p>

    <h2>
      Let's build something together.
    </h2>
  </div>

  <p className="contact-description">
    I'm always open to discussing new projects, creative ideas
    and opportunities.
  </p>
<a
  href="mailto:himanshimishra9936@gmail.com"
  className="contact-link"
>
  Contact Me →
</a>

</section>

<div className="social-links">

  <a
    href="https://github.com/himanshim-dev00"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <svg viewBox="0 0 24 24" className="social-icon">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.33c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.04.77 2.1v2.47c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  </a>

  <a
    href="https://www.linkedin.com/in/himanshi-mishra-6652a73b7/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <svg viewBox="0 0 24 24" className="social-icon">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.54 20.45h3.57V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 .01.78.01 1.74v20.52C.01 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0Z"
      />
    </svg>
  </a>

</div>

<footer className="footer">

  <div className="footer-content">

    <p className="footer-name">
      HIMANSHI
    </p>

    <p className="footer-text">
      Building, learning and growing one project at a time.
    </p>

    <div className="footer-links">

      <a
        href="https://github.com/himanshim-dev00"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/himanshi-mishra-6652a73b7/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

    </div>

  </div>

  <p className="footer-copy">
    © 2026 Himanshi Mishra. All rights reserved.
  </p>

</footer>
    </main>
  )
}

export default App