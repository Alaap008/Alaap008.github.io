import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-800 px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
      <p className="mb-2">alaapbanerjee08@gmail.com</p>
      <p className="mb-6">+91 8617471399</p>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" placeholder="Name" className="p-2 rounded bg-slate-700 text-white" />
        <input type="email" placeholder="Email" className="p-2 rounded bg-slate-700 text-white" />
        <textarea placeholder="Message" className="p-2 rounded bg-slate-700 text-white"></textarea>
        <button className="bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600">Send</button>
      </form>
    </section>
  );
}
