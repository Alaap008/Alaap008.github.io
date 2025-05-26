import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-4 bg-slate-900 text-gray-500">
      &copy; {new Date().getFullYear()} Alaap Banerjee. All rights reserved.
    </footer>
  );
}
