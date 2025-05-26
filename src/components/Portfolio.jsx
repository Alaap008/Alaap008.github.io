import React from "react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-700 px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-2">PORTFOLIO</h2>
      <p className="text-gray-400 mb-8">My latest work</p>
      <div className="flex justify-center gap-6 flex-wrap">
        {["Sahitya", "Bulk Image Tool", "Catalogue Listing"].map((proj, i) => (
          <div key={i} className="bg-slate-800 w-64 h-40 flex items-center justify-center text-white shadow">
            PROJECT 0{i + 1}: {proj}
          </div>
        ))}
      </div>
    </section>
  );
}
