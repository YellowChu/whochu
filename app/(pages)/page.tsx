import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function PageSection({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div className="">
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <PageSection>
        <div className="mountain-background" style={{height: "70vh"}}>
          <div className="px-16 flex flex-wrap justify-between items-center gap-5 h-full">
            <div className="text-left lg:flex lg:justify-center lg:w-full lg:mb-24 lg:gap-8 md:flex-col md:items-center md:text-center">
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl">Hi, I am</h1>
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl" style={{color: "#995d6c"}}>David Nguyen</h1>
            </div>

            <div className="text-right lg:flex lg:justify-center lg:w-full lg:gap-8 md:flex-col md:items-center">
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl" style={{color: "#554252"}}>Full stack</h1>
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-5xl">Developer</h1>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="flex items-center gap-20 px-16 py-12 lg:flex-wrap" style={{height: "40vh"}}>
          <div className="basis-2/5 lg:basis-full lg:flex lg:flex-col lg:items-center lg:w-full lg:text-center">
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
              <div className="badge" style={{background: "#4e4637"}}>
                5 years of experience
              </div>

              <div className="badge" style={{background: "#4e4637"}}>
                Keen sense for UI/UX
              </div>

              <div className="badge" style={{background: "#4e4637"}}>
                Clean code lover
              </div>
              
              <div className="badge" style={{background: "#4e4637"}}>
                Degree in Mechatronics
              </div>

              <div className="badge" style={{background: "#4e4637"}}>
                Passion for learning
              </div>
            </div>
          </div>

          <div className="basis-3/5 h-full lg:basis-full">
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
      </PageSection>

      {/* <PageSection>
        <div className="p-16" style={{height: "40vh"}}>
          <div className="flex justify-between items-center h-full w-full">
            <div className="flex gap-32">
              <div className="project-card">
                <div className="flex items-center gap-4">
                  <div className="icon">
                    🎛️
                  </div>

                  <div className="title">
                    Off Beat
                  </div>
                </div>

                <div className="description mt-4">
                  Learn how to stay on beat.
                </div>

                <a href="https://chuisoffbeat.vercel.app/" target="_blank">
                  <button className="mt-8">
                    View Project ->
                  </button>
                </a>
              </div>

              <div className="project-card">
                <div className="flex items-center gap-4">
                  <div className="icon">
                    🐍
                  </div>

                  <div className="title">
                    PyRacer
                  </div>
                </div>

                <div className="description mt-4">
                  Increase your Python coding speed.
                </div>

                <a href="https://pyracer.herokuapp.com/" target="_blank">
                  <button className="mt-8">
                    View Project ->
                  </button>
                </a>
              </div>
            </div>

            <div className="text-right">
              <h3>
                Personal
              </h3>
              <h2 style={{letterSpacing: "-0.2rem", fontWeight: 500, color: "#995d6c"}}>
                Projects
              </h2>
            </div>
          </div>


        </div>
      </PageSection>

      <PageSection>
        <div className="footer">
          <div className="socials">
            <a href="https://www.linkedin.com/in/david-nguyen-b6352b307/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffeeca", fontSize: "25px"}} />
            </a>

            <a href="https://github.com/YellowChu" target="_blank">
              <FontAwesomeIcon icon={faGithub} style={{color: "#ffeeca", fontSize: "25px"}} />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 pt-20 pb-10 h-full">
            <a href="/test.pdf" download>
              <button>
                Learn More
              </button>
            </a>

            <div className="text-3xl text-center font-light tracking-wider italic" style={{color: "#8c7444"}}>
              &#x201E;Thanks for stopping by&#x201C;
              <div className="mt-2">
                David Nguyen
              </div>
            </div>
          </div>
        </div>
      </PageSection> */}
    </>
  );
}
