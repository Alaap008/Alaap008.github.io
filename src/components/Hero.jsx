import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-slate-700"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
        <TypeAnimation
          sequence={[
            "I'm Alaap Banerjee",
            1000,
            "I'm a Full Stack Developer",
            1000,
            "I'm a Leader",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
        />
      </h1>
      <p className="text-lg text-gray-300">
        Frontend-focused Full Stack Developer
      </p>
    </section>
  );
}