import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-slate-900 fixed w-full z-50">
      {({ open, close }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-green-500 text-xl font-bold border border-green-500 w-10 h-10 flex items-center justify-center rounded-full">
              A
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name.toUpperCase()}
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <Disclosure.Button className="text-gray-300 hover:text-white">
                {open ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden px-6 pb-4">
            <div className="space-y-2">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => close()}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
