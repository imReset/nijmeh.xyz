import React from "react";
import dayjs from "dayjs";;
import Link from "next/link";

export default function Home() {
  return (
      <div className="container">
        <title>Andrew Nijmeh</title>
        <h1>Andrew Nijmeh</h1>

        <p>
          <Link href="mailto:andrewn@gmx.com" passHref><strong> ✉️ </strong></Link> ·

          <Link href="https://github.com/sponsors/anddddrew" passHref><strong> 💸 </strong></Link> ·

          <Link href="https://github.com/anddddrew" passHref><strong> 💻 </strong></Link> ·

          <Link href="/toolbox" passHref><strong> 🧰 </strong></Link> 
        </p>
        <p>
          Welcome to my website! Im a 13 year old software developer from Toronto. Ive been doing software development for 3.5 years (2.5 yrs professionally),
          I love blockchain & crypto, if you have any cool ideas feel free to email me!
        </p>
        <h2>current</h2>
        <p>
          At the moment, I'm building a few open-source projects on GitHub.💻. 
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
          ©️ Andrew Nijmeh • 2022 💖
          </span>
        </p>
      </div>
 
      
  )
}
