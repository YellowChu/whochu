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
            <div className="text-left lg:flex lg:justify-center lg:w-full lg:mb-24 lg:gap-8 md:flex-col md:items-center">
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-4xl">Hi, I am</h1>
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-4xl" style={{color: "#995d6c"}}>David Nguyen</h1>
            </div>

            <div className="text-right lg:flex lg:justify-center lg:w-full lg:gap-8 md:flex-col md:items-center">
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-4xl" style={{color: "#554252"}}>Full stack</h1>
              <h1 className="text-9xl -tracking-widest lg:text-8xl xl:text-6xl xl:text-center xs:text-4xl">Developer</h1>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="p-16">
          <div className="flex h-full gap-20">
            <div className="flex flex-col justify-center" style={{color: "#fff8ea"}}>
              <h2 className="tracking-tighter">
                Looking for&nbsp;
                <span style={{color: "#d5a419"}}>
                  Balance
                </span>
              </h2>
              <h3 className="tracking-tighter">   
                <span style={{color: "#d5a419"}}>
                  Between&nbsp;
                </span>
                UX and DX
              </h3>

              <div className="flex flex-wrap tracking-tight gap-2 mt-5">
                <div className="badge">
                  5 years of experience
                </div>

                <div className="badge">
                  Keen sense for UI/UX
                </div>

                <div className="badge">
                  Clean code lover
                </div>
                
                <div className="badge">
                  Degree in Mechatronics
                </div>

                <div className="badge">
                  Passion for learning
                </div>
              </div>
            </div>

            <div className="word-cloud h-full w-full" style={{height: "50vh"}}>
              <div className="word word1" style={{color: "#b4aa99"}}>TypeScript</div>
              <div className="word word2" style={{color: "#8c7444"}}>Python</div>
              <div className="word word3" style={{color: "#8c7444"}}>CSS</div>
              <div className="word word4" style={{color: "#b4aa99"}}>HTML</div>
              <div className="word word5" style={{color: "#ffeeca"}}>MongoDB</div>
              <div className="word word6" style={{color: "#ffeeca"}}>FastAPI</div>
              <div className="word word7" style={{color: "#b4aa99"}}>Vue</div>
              <div className="word word8" style={{color: "#ffeeca"}}>React</div>
              <div className="word word9" style={{color: "#8c7444"}}>PostgreSQL</div>
              <div className="word word10" style={{color: "#b4aa99"}}>Django</div>
              <div className="word word11" style={{color: "#b4aa99"}}>JavaScript</div>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection>
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
      </PageSection>
    </>
  );
}
