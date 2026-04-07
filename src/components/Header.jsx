import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Summary", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Stack", href: "#skills" },
  { name: "Systems", href: "#portfolio" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      {({ open, close }) => (
        <>
          <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 sm:px-6">
            <a href="#hero" className="flex items-center gap-3 text-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/30 bg-slate-950/80 text-sm font-semibold tracking-[0.3em] text-brand-200">
                AB
              </span>
              <span className="hidden sm:block">
                <span className="block text-sm font-semibold text-slate-100">Alaap Banerjee</span>
                <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">
                  AI Platform Engineer
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="btn-secondary min-h-0 px-5 py-2.5 text-sm">
                Connect
              </a>
            </div>

            <div className="md:hidden">
              <Disclosure.Button className="rounded-full border border-slate-700/80 bg-slate-950/70 p-2.5 text-slate-200 transition hover:border-brand-400/40 hover:text-white">
                {open ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          <Disclosure.Panel className="mx-auto mt-3 max-w-7xl md:hidden">
            <div className="glass-panel rounded-3xl p-4">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => close()}
                    className="block rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-brand-400/20 hover:bg-slate-900/70 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => close()}
                className="btn-primary mt-4 w-full text-sm"
              >
                Start a conversation
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
