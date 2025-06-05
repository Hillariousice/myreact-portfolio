import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from 'react-icons/ai'
import Image from "next/image"
import deved from '../public/shehulk.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa';

export default function Home() {
  const [darkMode,setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
      {
        title: "GRACE REAL ESTATE (Full-Stack)",
        description: "An online real estate platform for property purchases, rentals, and secure payment processing.",
        techStack: "JavaScript, Node.js, Express, TypeScript, React, MongoDB",
        githubLink: "https://github.com/hillariousice/gracerealestate",
        liveDemoLink: "https://grace-real-estate.vercel.app/"
      },
      {
        title: "SWIFT RIDER (Collaborative Full-Stack)",
        description: "A dispatch-rider app that lets users order rides in real time, featuring seamless ride management and tracking.",
        techStack: "JavaScript, Node.js, Express, TypeScript, React, PostgreSQL",
        githubLink: "https://github.com/hillariousice/swift-rider",
        liveDemoLink: "https://swift-rider.netlify.app"
      },
      {
        title: "FineDine (Mobile App)",
        description: "A React Native recipe app for discovering and managing good recipes.",
        techStack: "JavaScript, React Native, Redux",
        githubLink: "https://github.com/Hillariousice/finedine",
        liveDemoLink: "https://finedine-ecru.vercel.app/"
      },
      {
        title: "JOB-ON-GO (Full-Stack)",
        description: "A job application platform where users can browse and apply for opportunities with real-time data and secure authentication.",
        techStack: "Vue.js, Firebase, Tailwind CSS",
        githubLink: "https://github.com/Hillariousice/job-on-go",
        liveDemoLink: "https://job-on-go.vercel.app/"
      },
      {
        title: "AGRI-WEATHER (Mobile App)",
        description: "A React Native app that helps farmers detect climate change patterns related to soil conditions using real-time weather data.",
        techStack: "React Native, OpenWeather API",
        githubLink: "https://github.com/Hillariousice/agri-weather",
        liveDemoLink: "https://agri-weather.vercel.app/"
      }
    ];

  const techStackCards = [
      {
        title: "Frontend",
        content: [
          { subCat: "Markup & Styling:", items: "HTML5, CSS3, Tailwind CSS, SCSS, Styled-Components, PrelineUI, Lucide Icons" },
          { subCat: "JavaScript Frameworks & Libraries:", items: "React (Hooks, Context API, Redux Toolkit), Next.js (SSR/SSG), Vue.js" },
          { subCat: "State Management:", items: "Redux / Redux Toolkit, React Context API, useState, useReducer, useMemo, useCallback" }
        ]
      },
      {
        title: "Mobile Development",
        content: [
          { subCat: "Platform:", items: "React Native (iOS & Android)" },
          { subCat: "Key Skills:", items: "Offline & real-time data handling (e.g., Redux + Context patterns)" }
        ]
      },
      {
        title: "Backend",
        content: [
          { subCat: "Node.js Ecosystem:", items: "Node.js, Express.js, NestJS" },
          { subCat: "Architecture & APIs:", items: "RESTful APIs, WebSockets (real-time features), OOP (object-oriented patterns), Microservices architecture" },
          { subCat: "Authentication & Security:", items: "JSON Web Tokens (JWT), Role-based access control (RBAC), Secure form validation, authentication flows" },
          { subCat: "Email & Notifications:", items: "Nodemailer" }
        ]
      },
      {
        title: "Databases & Data Storage",
        content: [
          { subCat: "SQL:", items: "PostgreSQL, MySQL, SQLite" },
          { subCat: "NoSQL:", items: "MongoDB, Firebase Firestore" },
          { subCat: "Caching:", items: "Redis" },
          { subCat: "Real-time:", items: "Firebase Realtime" }
        ]
      },
      {
        title: "DevOps & Cloud Services",
        content: [
          { subCat: "Version Control & CI/CD:", items: "Git & GitHub (Actions, Project Boards)" },
          { subCat: "Containerization & Hosting:", items: "Docker, Heroku, AWS (EC2, Lambda, S3, autoscaling, CloudWatch), Azure, Firebase (Hosting, Auth, Functions)" },
          { subCat: "Monitoring & APIs:", items: "Swagger (API documentation), Firebase Crashlytics / Monitoring tools" }
        ]
      },
      {
        title: "Testing, Project Management & Other",
        content: [
          { subCat: "Testing & Quality:", items: "Test-Driven Development (TDD), Unit & Integration Testing (Jest, React Native Testing Library, etc.), Code reviews & best-practice linting" },
          { subCat: "Project Management & Collaboration:", items: "Agile methodologies (Scrum), Jira, ClickUp, GitHub Project Boards, Remote collaboration tools (e.g., Slack integrations, Zoom)" },
          { subCat: "Other Notable Mentions:", items: "Experience integrating third-party APIs (e.g., OpenWeather API, payment gateways), Server-side performance optimization (lazy loading, code-splitting, caching strategies), Responsive / mobile-first design principles" }
        ]
      }
    ];

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen flex flex-col dark:bg-gray-900`}>
      <Head>
        <title>Hillary Okporka Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>
      <main id="home" className="flex-grow bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section id="about-me" className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
            <h1 className="text-xl font-burtons">Developedbyuri</h1>

            {/* Desktop Menu Links */}
            <ul className="hidden md:flex items-center">
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href='https://drive.google.com/file/d/1QX0qbp8J55r4BSLBqTDkmqpobB8d4ax8/view?usp=drivesdk'>Resume</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open Menu">
                <FaBars className="text-2xl"/>
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg z-50">
              <ul className="flex flex-col items-center py-4">
                <li className="py-2"><a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-teal-500">Home</a></li>
                <li className="py-2"><a href="#about-me" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-teal-500">About Me</a></li>
                <li className="py-2"><a href="#tech-stack" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-teal-500">Tech Stack</a></li>
                <li className="py-2"><a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-800 dark:text-gray-200 hover:text-teal-500">Projects</a></li>
                <li className="py-4">
                  <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" href='https://drive.google.com/file/d/1QX0qbp8J55r4BSLBqTDkmqpobB8d4ax8/view?usp=drivesdk' onClick={() => setIsMenuOpen(false)}>Resume</a>
                </li>
                <li className="py-2">
                  <BsFillMoonStarsFill onClick={()=> {setDarkMode(!darkMode); setIsMenuOpen(false);}} className="cursor-pointer text-2xl text-gray-800 dark:text-gray-200"/>
                </li>
              </ul>
            </div>
          )}
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-500 dark:text-teal-200 font-medium md:text-6xl">Hillary Okporka</h2>
            <h3 className="text-2xl py-2 md:text-3xl text-gray-700 dark:text-white">Software Developer.</h3>
           <p className="text-md py-5 leading-8 text-gray-800 dark:text-white text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">
            Passionate developer focused on delivering clean, efficient code and elegant design. Let’s connect and create something great.
           </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://x.com/clotidestark?s=21&t=js7mq5ZSEylYHzudbdUQBA" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle/></a>
            <a href="https://www.linkedin.com/in/hillary-okporka-348a23182" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
            <a href="https://github.com/Hillariousice" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
      <section className="mt-3">
        <div>
          <h3 className="text-3xl py-1 text-gray-700 dark:text-white">About Me</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
            I’m Hillary Okporka, a Full-Stack Software Engineer with 4+ years of experience building scalable web and mobile applications. I specialize in TypeScript-based stacks—React, Next.js, NestJS, and React Native—paired with databases like MongoDB and PostgreSQL. My passion is translating complex requirements into intuitive, high-performance UIs and robust backend services. I’ve worked across fintech, real estate, and logistics domains, delivering features under tight deadlines while maintaining code quality, security, and responsiveness.
          </p>
        </div>
      </section>
      <section id="tech-stack" className="py-10">
        <h3 class="text-3xl py-1 text-center text-gray-700 dark:text-white">My Tech Stack</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
          {techStackCards.map((card, cardIndex) => (
            <div key={cardIndex} className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex flex-col">
              <h3 className="text-xl font-semibold pt-4 pb-4 text-teal-500 dark:text-teal-200">{card.title}</h3>
              <div className="text-left text-sm text-gray-800 dark:text-gray-200 space-y-2">
                {card.content.map((item, itemIndex) => (
                  <p key={itemIndex}>
                    <span className="font-semibold">{item.subCat}</span> {item.items}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="projects">
        <div>
          <h3 className="text-3xl py-1 text-gray-700 dark:text-white">Projects</h3>
          {/* Optional: Add a brief intro paragraph for projects if needed */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {projects.map((project, index) => (
            <div key={index} className="text-center shadow-lg p-10 rounded-xl my-6 dark:bg-gray-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium pt-4 pb-2 text-teal-500 dark:text-teal-200">{project.title}</h3>
                <p className="py-2 text-sm text-gray-800 dark:text-white">{project.description}</p>
                <p className="py-2 text-xs text-gray-600 dark:text-gray-300"><span className="font-semibold">Tech Stack:</span> {project.techStack}</p>
              </div>
              <div className="mt-6 flex justify-center gap-4">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md hover:opacity-90">View Code</a>
                {project.liveDemoLink && (
                  <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="text-sm bg-gray-500 text-white px-4 py-2 rounded-md hover:opacity-90 dark:bg-gray-600">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      </main>
      <footer className="text-center py-10 px-10 mt-10 bg-white dark:bg-gray-900 text-gray-700 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

          <div className="mb-6 space-y-2">
            <p>Email: <a href="mailto:hillariousice@gmail.com" className="hover:text-teal-500 dark:hover:text-teal-300">hillariousice@gmail.com</a></p>
            <p>Phone: <a href="tel:09021392965" className="hover:text-teal-500 dark:hover:text-teal-300">09021392965</a> | <a href="tel:08108677553" className="hover:text-teal-500 dark:hover:text-teal-300">08108677553</a></p>
          </div>

          <div className="text-4xl flex justify-center gap-12 py-4 text-gray-600 dark:text-gray-400 mb-6">
            <a href="https://x.com/clotidestark?s=21&t=js7mq5ZSEylYHzudbdUQBA" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-teal-500 dark:hover:text-teal-300"><AiFillTwitterCircle/></a>
            <a href="https://www.linkedin.com/in/hillary-okporka-348a23182" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-teal-500 dark:hover:text-teal-300"><AiFillLinkedin/></a>
            <a href="https://github.com/Hillariousice" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-teal-500 dark:hover:text-teal-300"><AiFillGithub/></a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Hillary Okporka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
