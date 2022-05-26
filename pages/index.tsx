import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";             

export default function Home() {
  const [time, setTime] = useState("00:00:00 p.m.");

  useEffect(() => {
    updateTime();
  }, []);

  function updateTime() {
    let current = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    setTime(current.toLowerCase().slice(-11, -1) + ".m.");
    setTimeout(updateTime, 1000);
  }

  return (
    <div className="container">
      <title>Andrew Nijmeh</title>
      <img className="headshot" src="./headshot.png" alt="Andrew Nijmeh" />
      <h1>Andrew Nijmeh</h1>
      <p className="links">
        <Link href="mailto:andrewn@gmx.com" passHref>
          <strong> ~/mail </strong>
        </Link>
        <Link href="https://github.com/sponsors/anddddrew" passHref>
          <strong> ~/sponsor </strong>
        </Link>
        <Link href="https://g.nijmeh.xyz" passHref>
          <strong> ~/github </strong>
        </Link>
        <Link
          href="https://www.linkedin.com/in/andrew-nijmeh-1a6726200/"
          passHref
        >
          <strong> ~/linkedin </strong>
        </Link>
        <Link href="https://t.nijmeh.xyz" passHref>
          <strong> ~/twitter </strong>
        </Link>
        <Link href="https://nijmeh.eth" passHref>
          <strong> ~/ens </strong>
        </Link>
        <Link href="/notes" passHref>
          <strong> ~/blog </strong>
        </Link>
        <Link href="/toolbox" passHref>
          <strong> ~/toolbox </strong>
        </Link>
      </p>
      <p>
        Andrew Nijmeh - programmer, hacker & software engineer @ frenter.com.
      </p>

      <br />
      <p>It is currently {time} for andrew. (est)</p>

      <h2>current</h2>
      <p>
        {"I'm"} currently working for <a href="https://frenter.com">frenter</a>.
      </p>
      <h2>prev</h2>

      <p>
        I worked as a junior software engineer at a company that sold
        <a href="https://plr.me"> PLR (Private Labeled Rights) content. </a>
        (july 2021 - decemeber 2021)
      </p>

      <p>
        I have also worked at <a href="https://auraside.com">auraside</a> as a
        TypeScript engineer (Nov 2020 - June 2021).
      </p>

      <h2>contact me</h2>

      <p>
        you can contact me via email{" "}
        <a href="mailto:andrewn@gmx.com">andrewn@gmx.com</a> or message me on{" "}
        <a href="https://twitter.com/0xnijmeh">twitter.</a> i typically respond
        faster on twitter.
      </p>

      <h2>skills</h2>
      <p>
        <li>Docker + Docker-compose (deployments)</li>
        <li>Kubernetes </li>
        <li>Amazon Web Services</li>
        <li>Python (automation, other various scripts)</li>
        <li>TypeScript (server-side code)</li>
        <li>Rust (systems programming + other various stuff) </li>
        <li>PostgreSQL (database) </li>
        <li>NextJS/React (frontend)</li>
        <li>Solidity (Smart Contracts)</li>
      </p>

      <h2>
        projects
        <p>
          <li>
            <a href="https://github.com/anddddrew/assembler">Assembler</a>
          </li>
          <li>
            <a href="https://github.com/anddddrew/evm">EVM Disassembler</a>
          </li>
          <li>
            <a href="https://github.com/anddddrew/fusion">Fusion</a>
          </li>
          <li>
            <a href="https://github.com/anddddrew/polio">Polio</a>
          </li>
        </p>
      </h2>
      <h2>
        music
        <p>
          I listen to a bunch of music when I am programming, or just want to
          chill out. I also play the guitar from time to time.
        </p>
        <br />
        <p>
          <li>
            <a href="https://open.spotify.com/track/5QLHGv0DfpeXLNFo7SFEy1?si=0fe97adaee1d48c3">
              Zero Remastered 2012 - The Smashing Pumpkins
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/track/0Pie5DFAHHxpkONFUsAI6s?si=9e212a3d81504e42">
              Aneurysm - Nirvana
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/track/1ByE7lUw6wWMTbCb3woHdK?si=6603fc2512274257">
              Know - System Of A Down
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/track/4J7ZK2uDwjoboxcjdPieHz?si=636fdfb05b8942c4">
              Siva - The Smashing Pumpkins
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/track/3eMYc6FK9XvyauIaxcJtRS?si=9f9f2844ef554105">
              Drown - The Smashing Pumpkins
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/track/43OH1K8VQSctPPt7982cRF?si=6a6378bd267a4d55">
              Scoff - Nirvana
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/album/1cUnNrx2TxvrpwPRtvpGwn?si=Ppp5rC4fRI6IXJe52eIp3w">
              Rotten Apples - The Smashing Pumpkins
            </a>
          </li>
          <li>
            {" "}
            <a href="https://open.spotify.com/track/5wdub8zu2WLds6uRN0jUsV?si=469ff0952e774dcd">
              Bullet With Butterfly Wings - The Smashing Pumpkins
            </a>
          </li>
        </p>
      </h2>
      <p className="footer">
        <span>©️ Andrew Nijmeh made with 💖</span>
      </p>
    </div>
  );
  }