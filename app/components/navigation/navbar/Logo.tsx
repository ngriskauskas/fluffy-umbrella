"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

export default function Logo() {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  const [showButton, setShowButton] = useState(false);
  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);
  return (
    <Link href="/" style={{ display: showButton ? "none" : "block" }}>
      <Image
        src="/images/download.jpg"
        alt="Logo"
        width={width < 1024 ? "65" : "75"}
        height={width < 1024 ? "30" : "70"}
        className="relative"
      />
      <div style={{ display: showButton ? "block" : "none" }}>
        <Button />
      </div>
    </Link>
  );
}
