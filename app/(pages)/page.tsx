"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

gsap.registerPlugin(useGSAP);


export default function Home() {
  const container = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo('div[data-gsap="hero-section-1"]', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3 })
      .fromTo('div[data-gsap="hero-section-2"]', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3 })
      .fromTo('div[data-gsap="skill-section"], div[data-gsap="project-section', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3 })
  }, { scope: container });

  return (
    <div ref={container}>
      <div className="mountain-background" style={{height: "70vh"}}>
        <div className="px-16 flex flex-wrap justify-between items-center gap-5 h-full">
          <div data-gsap="hero-section-1" className="opacity-0 text-left lg:flex lg:justify-center lg:w-full lg:mb-24 lg:gap-8 md:flex-col md:items-center md:text-center">
            <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl">Hi, I am</h1>
            <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl" style={{color: "#995d6c"}}>David Nguyen</h1>
          </div>

          <div data-gsap="hero-section-2" className="opacity-0 text-right lg:flex lg:justify-center lg:w-full lg:gap-8 md:flex-col md:items-center">
            <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl" style={{color: "#554252"}}>Full stack</h1>
            <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl">Developer</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-20 px-16 py-14 lg:flex-wrap" style={{background:"#26262C"}}>
        <div data-gsap="skill-section" className="opacity-0 basis-2/5 lg:basis-full lg:flex lg:flex-col lg:items-center lg:w-full lg:text-center">
          <h2 className="text-6xl tracking-tighter md:text-5xl xl:text-4xl">
            Looking for&nbsp;
            <span style={{color: "#d5a419"}}>
              Balance
            </span>
          </h2>
          <h3 className="text-6xl tracking-tighter mt-4 md:text-5xl xl:text-4xl">
              Between&nbsp;
            <span style={{color: "#d5a419"}}>
              UX and DX
            </span>
          </h3>

          <div className="flex flex-wrap tracking-tight text-base gap-2 mt-8 lg:justify-center md:text-sm">
            <div className="shadow rounded-3xl px-4 py-2 whitespace-nowrap" style={{background: "#4e4637"}}>
              5 years of experience
            </div>

            <div className="shadow rounded-3xl px-4 py-2 whitespace-nowrap" style={{background: "#4e4637"}}>
              Keen sense for UI/UX
            </div>

            <div className="shadow rounded-3xl px-4 py-2 whitespace-nowrap" style={{background: "#4e4637"}}>
              Clean code lover
            </div>
            
            <div className="shadow rounded-3xl px-4 py-2 whitespace-nowrap" style={{background: "#4e4637"}}>
              Degree in Mechatronics
            </div>

            <div className="shadow rounded-3xl px-4 py-2 whitespace-nowrap" style={{background: "#4e4637"}}>
              Passion for learning
            </div>
          </div>
        </div>

        <div data-gsap="skill-section" className="opacity-0 basis-3/5 h-full lg:basis-full" style={{height: "40vh"}}>
          <div className="relative h-full w-full">
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word1" style={{color: "#b4aa99"}}>TypeScript</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word2" style={{color: "#8c7444"}}>Python</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word3" style={{color: "#8c7444"}}>CSS</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word4" style={{color: "#b4aa99"}}>HTML</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word5" style={{color: "#ffeeca"}}>MongoDB</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word6" style={{color: "#ffeeca"}}>FastAPI</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word7" style={{color: "#b4aa99"}}>Vue</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word8" style={{color: "#ffeeca"}}>React</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word9" style={{color: "#8c7444"}}>PostgreSQL</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word10" style={{color: "#b4aa99"}}>Django</div>
            <div className="absolute -translate-x-2/4 -translate-y-2/4 tracking-tight word11" style={{color: "#b4aa99"}}>JavaScript</div>
          </div>
        </div>
      </div>

      <div data-gsap="project-section" className="opacity-0 flex flex-row-reverse justify-between items-center px-16 py-24 h-full w-full lg:flex-wrap lg:flex-col lg:items-center lg:gap-16">
        <div className="text-right basis-2/5 lg:text-center">
          <h3 className="text-6xl md:text-5xl xl:text-4xl tracking-tight ">
            Personal
          </h3>
          <h2 className="text-8xl font-medium xl:text-6xl tracking-tight mt-6" style={{color: "#995d6c"}}>
            Projects
          </h2>
        </div>

        <div className="basis-3/5 flex gap-16 lg:flex-wrap lg:justify-center">
          <div className="shadow rounded-2xl p-8 text-left w-96 xl:w-60" style={{background: "#1f1e24", color: "#686378"}}>
            <div className="flex items-center gap-4">
              <div className="text-4xl">
                🎛️
              </div>

              <div className="text-2xl font-semibold tracking-wider" style={{color: "#995d6c"}}>
                Off Beat
              </div>
            </div>

            <div className="mt-4 mb-12">
              Learn how to stay on beat.
            </div>

            <a href="https://chuisoffbeat.vercel.app/" target="_blank">
              <button className="rounded-lg border-none px-4 py-2 text-md cursor-pointer hover:opacity-85 transition-all" style={{background: "#995d6c", color: "#e0ccd1"}}>
                View Project -&gt;
              </button>
            </a>
          </div>

          <div className="shadow rounded-2xl p-8 text-left w-96 xl:w-60" style={{background: "#1f1e24", color: "#686378"}}>
            <div className="flex items-center gap-4">
              <div className="text-4xl">
                🐍
              </div>

              <div className="text-2xl font-semibold tracking-wider" style={{color: "#995d6c"}}>
                PyRacer
              </div>
            </div>

            <div className="mt-4 mb-12">
              Increase your Python coding speed.
            </div>

            <a href="https://pyracer.herokuapp.com/" target="_blank">
              <button className="rounded-lg border-none px-4 py-2 text-md cursor-pointer hover:opacity-85 transition-all" style={{background: "#995d6c", color: "#e0ccd1"}}>
                View Project -&gt;
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="relative" style={{borderTop: "2px solid #8c7444"}}>
        <div className="absolute -translate-x-2/4 -translate-y-2/4 left-1/2 px-8 py-4 flex gap-8" style={{background: "#18191d"}}>
          <a href="https://www.linkedin.com/in/david-nguyen-b6352b307/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} color="#fff" style={{color: "#ffeeca", fontSize: "25px"}} />
          </a>

          <a href="https://github.com/YellowChu" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{color: "#ffeeca", fontSize: "25px"}} />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 pt-20 pb-10 h-full">
          {/* <a href="/test.pdf" download>
            <button className="border-none rounded-3xl px-8 py-2 text-base font-medium cursor-pointer hover:opacity-85 transition-all" style={{background: "#8c7444", color: "#E0CCD1"}}>
              Learn More
            </button>
          </a> */}

          <div className="text-3xl text-center font-light tracking-wider italic xl:text-2xl xs:text-base" style={{color: "#8c7444"}}>
            &#x201E;Thanks for stopping by&#x201C;
            <div className="mt-2">
              David Nguyen
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
