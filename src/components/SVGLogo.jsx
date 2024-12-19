import React from "react";

const SVGLogo = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Animated Circle */}
    <circle
      cx="100"
      cy="100"
      r="50"
      stroke="url(#textGradient)"
      strokeWidth="10"
      fill="none"
      strokeDasharray="502"
      strokeDashoffset="502"
      style={{ animation: "draw 2s linear infinite" }}
    />

    {/* Define Gradient */}
    <defs>
      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="green" />
        <stop offset="100%" stopColor="black" />
      </linearGradient>
    </defs>
    {/* Static Logo Text */}
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="48"
      fill="url(#textGradient)"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      SE
    </text>
  </svg>
);

export default SVGLogo;
