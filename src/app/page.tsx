"use client";

import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function Home() {
  const meowfact = fetch("https://meowfacts.herokuapp.com/");
  const [meowfactData, setMeowfactData] = useState(null);

  const [confettiPieces, setConfettiPieces] = useState(0);
  const [isGifVisible, setIsGifVisible] = useState(false);

  const handleExplode = () => {
    setConfettiPieces(50);
    setIsGifVisible(true);
    meowfact.then((res) => res.json()).then((data) => setMeowfactData(data.data[0]));
  };

  const drawHeart = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(7.5, 4.0);
    ctx.bezierCurveTo(7.5, 3.7, 7.0, 2.5, 5.0, 2.5);
    ctx.bezierCurveTo(2.0, 2.5, 2.0, 6.25, 2.0, 6.25);
    ctx.bezierCurveTo(2.0, 8.0, 4.0, 10.2, 7.5, 12.0);
    ctx.bezierCurveTo(11.0, 10.2, 13.0, 8.0, 13.0, 6.25);
    ctx.bezierCurveTo(13.0, 6.25, 13.0, 2.5, 10.0, 2.5);
    ctx.bezierCurveTo(8.5, 2.5, 7.5, 3.7, 7.5, 4.0);
    ctx.fill();
    ctx.closePath();
  };

  return (
    <div className="bg-[#fff9ed]">
      <div className="flex justify-center items-center h-screen" onClick={handleExplode}>
        <div className="relative bottom-1/32"> {/* This div is the positioning context for the images */}
          <img className="object-cover relative" src="download (1).jpeg" alt="" />
          <img
            className="object-cover absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md filter brightness-110"
            src="download__2_-removebg-preview.png"
            alt="Overlay"
          />
          <div className="flex justify-center items-center">
            <p className="absolute top-5/6 font-light text-gray-700 text-center text-xl">{meowfactData}</p>
          </div>
        </div>

        {confettiPieces > 0 && <Confetti numberOfPieces={confettiPieces} recycle={true} colors={['#6a0dad', '#8a2be2', '#9932cc', '#ba55d3', '#dda0dd']} gravity={0.1} drawShape={drawHeart} />}

        {/* --- THIS IS THE CORRECTED PART --- */}
        {isGifVisible && (
          // 1. This is the single container for ALL GIFs. It's a "playground".
          // It covers the entire screen (fixed inset-0) and ignores clicks (pointer-events-none).
          <div className="fixed inset-0 pointer-events-none">

            {/* 2. Each GIF is positioned absolutely within the playground */}
            {/* GIF 1: Top Left */}
            <img
              src="download.gif"
              className="absolute top-1/6 left-1/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
            />

            {/* GIF 2: Top Right */}
            <img
              src="download (1).gif"
              className="absolute top-1/6 left-3/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
              style={{ animationDelay: '0.2s' }} // Add a slight delay for a nice effect
            />

            {/* GIF 3: Bottom Left */}
            <img
              src="download (2).gif"
              className="absolute top-7/8 left-1/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
              style={{ animationDelay: '0.4s' }} // Add a slight delay for a nice effect
            />

            {/* GIF 4: Bottom Right */}
            <img
              src="Happy Birthday Sticker - Happy Birthday - ค้นพบและแชร์ GIF.gif"
              className="absolute top-7/8 left-3/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
              style={{ animationDelay: '0.6s' }} // Add a slight delay for a nice effect
            />
          </div>
        )}
      </div>
    </div>
  );
}