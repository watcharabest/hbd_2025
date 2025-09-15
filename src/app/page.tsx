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
        <div className="relative bottom-1/32">
          <img className="object-cover relative" src="download (1).jpeg" alt="" />
          <img
            className="object-cover absolute top-1/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-md filter brightness-110"
            src="download__2_-removebg-preview.png"
            alt="Overlay"
          />
          {/* Responsive cat fact text */}
          <p className="absolute top-3/4 left-1/2 transform -translate-x-1/2 font-normal text-gray-700 text-center text-sm sm:text-lg">{meowfactData}</p>
        </div>

        {confettiPieces > 0 && <Confetti numberOfPieces={confettiPieces} recycle={true} colors={['#6a0dad', '#8a2be2', '#9932cc', '#ba55d3', '#dda0dd']} gravity={0.1} drawShape={drawHeart} />}

        {isGifVisible && (
          <div className="fixed inset-0 pointer-events-none">
            <img
              src="download.gif"
              className="absolute top-1/6 left-1/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
            />

            <img
              src="download (1).gif"
              className="absolute top-1/6 left-3/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
              style={{ animationDelay: '0.2s' }}
            />

            <img
              src="download (2).gif"
              className="absolute top-3/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
              style={{ animationDelay: '0.4s' }}
            />

            <img
              src="Happy Birthday Sticker - Happy Birthday - ค้นพบและแชร์ GIF.gif"
              className="absolute top-6/8 left-3/4 transform -translate-x-1/2 -translate-y-1/2 object-cover w-24 h-24 md:w-40 md:h-40 rounded-full shadow-md animate-bounce"
              alt="Celebration gif"
              style={{ animationDelay: '0.6s' }}
            />
          </div>
        )}
      </div>
    </div>
  );
}