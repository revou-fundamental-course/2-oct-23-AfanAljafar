"use client";

import Button from "../../single/button";
import LinkComp from "../../single/link";
import Title from "../../single/title";
import Image from "next/image";
import "./header.css";

export default function Header() {
  return (
    <nav className="header-comp">
      <div className="header-left">
        <Title children={"Buzz Space!"}></Title>
      </div>
      <div className="header-right">
        <LinkComp children={"Home"} href="/Blog" />
        <Button
          children={"Start New Project"}
          type={"button"}
          onClickEvent={() => null}
        />
      </div>
    </nav>
  );
}
