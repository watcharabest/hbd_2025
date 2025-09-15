"use client";

import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function Home() {
  const [confettiPieces, setConfettiPieces] = useState(0);
  const [isGifVisible, setIsGifVisible] = useState(false);

  const handleExplode = () => {
    setConfettiPieces(500);
    setIsGifVisible(true);
  };

  const drawHeart = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    // Scaled down coordinates (original values divided by ~10)
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

  // useEffect(() => {
  //   handleExplode();
  // }, []);

  return (
    <div className="bg-[#fff9ed]">
      <div className="flex justify-center items-center h-screen" onClick={handleExplode}>
        <img className="object-cover relative" src="download (1).jpeg" alt="" />
        <img className="object-cover absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="download__2_-removebg-preview.png" alt="" />
        {confettiPieces > 0 && <Confetti numberOfPieces={confettiPieces} recycle={false} colors={['#6a0dad', '#8a2be2', '#9932cc', '#ba55d3', '#dda0dd']} gravity={0.1} drawShape={drawHeart}/>}
        {isGifVisible && <img src="download.gif" className="object-cover absolute w-1/8 h-2/8 top-1/8 left-1/8" />}
      </div>
    </div>
  );
}
