import React from "react";
import dock from "../public/dock.png";
import Link from "next/link";
import Image from "next/image";
export default function Toolbox() {
  return (
    <div className="container">
      <title>{"Andrew's"} Toolbox</title>
      <Link href="/" passHref>
        {" "}
        &larr; Back{" "}
      </Link>
      <h1>Toolbox</h1>
      <p>On this page you can find what software & gear I use.</p>
      <h2>Gear</h2>
      <p>
        I currently use a <strong>14 inch Macbook (M1 Pro). </strong>I also have
        2 external monitors hooked up to my Macbook.
      </p>
      <h2>Apps</h2>
      <p>
        My dock is very minimal. I dislike when {"it's"} cluttered, so I keep a
        very small amount of apps. Here are the apps I use on a daily basis.
        <div className="toolbox">
          <div>
            <strong>Organization</strong>
            <li>
              <a href="https://notion.so"> Notion </a>
            </li>
            <li>
              <a href="https://todoist.com">Todoist</a>
            </li>
            <li>
              <a href="https://rectangleapp.com">Rectangle</a>
            </li>
          </div>
          <div>
            <strong>Productivity</strong>
            <li>
              <a href="https://raycast.com"> Raycast </a>
            </li>
            <li>
              <a href="https://fig.io">Fig</a>
            </li>
            <li>
              <a href="https:/sparkmailapp.com">Spark</a>
            </li>
          </div>
          <div>
            <strong>Main Apps</strong>
            <li>
              <a href="https://sw.kovidgoyal.net/kitty/"> Kitty </a>
            </li>
            <li>
              <a href="https://discord.com"> Discord </a>
            </li>
            <li>
              <a href="https://slack.com"> Slack </a>
            </li>
            <li>
              <a href="https://code.visualstudio.com"> Visual Studio Code </a>
            </li>
            <li>
              <a href="https://spotify.com"> Spotify </a>
            </li>
            <li>
              <a href="https://figma.com">Figma</a>
            </li>
            <li>
              <a href="https://zoom.us">Zoom</a>
            </li>
            <li>
              <a href="https://docker.com">Docker</a>
            </li>
            <li>
              <a href="https://brave.com"> Brave Browser </a>
            </li>
          </div>

          <div>
            <strong>Tools</strong>
            <li>
              <a href="https://justgetflux.com/">Flux</a>
            </li>
            <li>
              <a href="https://nightowl.kramser.xyz/">Nightowl</a>
            </li>
          </div>
        </div>
      </p>
    </div>
  );
}
