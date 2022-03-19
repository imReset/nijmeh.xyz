import React from "react";
import dayjs from "dayjs";;

export default function Home() {
  return (
      <div className="container">
        <h1>Andrew Nijmeh</h1>

        <p>
          <a href="mailto:andrewn@gmx.com"><strong> ✉️ </strong></a> ·

          <a href="https://github.com/sponsors/anddddrew"><strong> 💸 </strong></a> ·

          <a href="https://github.com/anddddrew"><strong> 💻 </strong></a> ·

          <a href="/toolbox"><strong> 🧰 </strong></a> ·

          <a href="../public/resume.pdf"><strong>📄</strong></a> 

        </p>
        <p>
          Welcome to my website! I'm a 13 year old software developer from Toronto. I've been doing software development for 3.5 years (2.5 yrs professionally),
          I love blockchain & crypto, if you have any cool ideas feel free to email me!
        </p>
        <h2>current</h2>
        <p>
          At the moment, I'm working on my startup called Triffle - we are equipping this generation of teens with the opportunity to secure their financial future via investing in crypto 🚀. I'm also building a couple open source projects on my GitHub 💻. 
        </p>
        <h2>
          prev
        </h2>
        <p>
          I worked as a junior software engineer 
          at a company that sold
          <a href="https://plr.me"
          > PLR (Private Labeled Rights) content. </a>
              (july 2021 - decemeber 2021)
        </p>
        <p>
          I also worked at
          <a href="https://auraside.com"> auraside </a>
            as a typescript engineer (november 2020 - june 2021).
        </p>
        <p className="footer">
          <span>
          ©️ Andrew Nijmeh • 2022
          </span>
        </p>
      </div>
 
      
  )
}
