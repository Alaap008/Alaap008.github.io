import React from "react";

export default function ResumeCard() {
  return (
    <section className="bg-slate-900 p-10 text-center">
      <div className="inline-block border border-green-500 p-4 rounded-full mb-6">
        <span className="text-green-500 font-bold text-2xl">A</span>
      </div>
      <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
        Frontend developer with 4+ years of experience. Skilled in ReactJS, Angular, TypeScript, Node.js, Redux, and AWS.
      </p>
      <a
        href="#"
        className="border border-green-500 text-green-500 px-6 py-2 hover:bg-green-500 hover:text-white transition"
      >
        Download Resume
      </a>
    </section>
  );
}
