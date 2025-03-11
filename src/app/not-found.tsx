"use client";
import Lottie from "lottie-web";
import Link from "next/link";
import { useEffect, useRef } from "react";
import not_available from "./json/nodata.json";
import Button from "./components/Button/Button";
import SecondaryButton from "./components/Button/SecondaryButton";

export default function NotFound() {
  const noData: any = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: noData.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: not_available,
    });

    return () => {
      animation.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div ref={noData}></div>
      <Link href="/">
        <SecondaryButton>Go to Homepage</SecondaryButton>
      </Link>
    </div>
  );
}
