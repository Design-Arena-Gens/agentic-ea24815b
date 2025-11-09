"use client";

import { useEffect, useState } from "react";

function Clock() {
  const [now, setNow] = useState<string>(new Date().toLocaleString());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date().toLocaleString()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-200 shadow-sm backdrop-blur">
      Local time: <span className="font-medium text-white">{now}</span>
    </div>
  );
}

export default function Home() {
  const [name, setName] = useState<string>("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 dark:from-black dark:to-zinc-950 dark:text-zinc-100">
      <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-10 px-6 py-20">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi{name ? ", " : ""}
          <span className="bg-gradient-to-r from-sky-400 via-emerald-400 to-fuchsia-400 bg-clip-text text-transparent">
            {name || "there"}
          </span>
          !
        </h1>

        <p className="max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
          This is a lightweight Next.js starter deployed on Vercel. Type your name
          below and watch the greeting update in real-time.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-sky-300 focus:ring-2 focus:ring-sky-200 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-600 dark:focus:ring-sky-900"
          />
          <Clock />
        </div>

        <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Built with Next.js, Tailwind CSS, and deployed to Vercel.
        </div>
      </main>
    </div>
  );
}
