"use client";

import Button from "../../single/button";
import HomeButton from "../../single/homeButton";
import LinkComp from "../../single/link";
import Title from "../../single/title";
import "./header.css";

export default function Header() {
  return (
    <nav className="header-comp">
      <div className="header-left">
        <Title children={"Buzz Space!"}></Title>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <LinkComp children={"Blog"} href="/Blog" />
          </li>
          <li>
            <HomeButton children={""} href={"/"} />
          </li>
          <li>
            <Button
              children={"Start New Project"}
              type={"button"}
              onClickEvent={() => null}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
