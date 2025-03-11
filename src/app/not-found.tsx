"use client"; // This is crucial for Client-side rendering

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import not_available from "./json/nodata.json";
import SecondaryButton from "./components/Button/SecondaryButton";

export default function NotFound() {
  const noData: any = useRef(null);
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    // Dynamically import lottie-web only on the client side
    const loadLottie = async () => {
      const lottieModule = await import("lottie-web");
      setLottie(lottieModule.default); // Store Lottie in state after it's loaded
    };

    if (typeof window !== "undefined") {
      loadLottie();
    }

    return () => {
      if (Lottie) {
        Lottie.destroy();
      }
    };
  }, [Lottie]);

  useEffect(() => {
    if (Lottie && noData.current) {
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
    }
  }, [Lottie]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div ref={noData}></div>
      <Link href="/">
        <SecondaryButton>Go to Homepage</SecondaryButton>
      </Link>
    </div>
  );
}
