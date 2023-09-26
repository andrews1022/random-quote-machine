"use client";

import { Poppins, Roboto } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Quote } from "@/types";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: "400"
});

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: "400"
});

type QuoteProps = {
  randomQuote: Quote | undefined | null;
};

export default function Quote({ randomQuote }: QuoteProps) {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  return (
    <section
      className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <button
          type="submit"
          className="p-3 mb-4 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-slate-200 hover:cursor-pointer hover:bg-white mt-6"
          onClick={() => {
            setFade(true);
            setTimeout(() => router.refresh(), 1000);
            setTimeout(() => setFade(false), 1200);
          }}
        >
          Refresh Quote
        </button>
      </div>

      {randomQuote ? (
        <>
          <p className={`text-2xl text-center mt-4 ${poppins.className}`}>
            Author: {randomQuote.author}
          </p>

          <p className={`text-2xl text-center mt-4 ${poppins.className}`}>
            Category: {randomQuote.category}
          </p>

          <div className="grow mt-24">
            <p className={`text-5xl text-center max-w-3xl leading-normal ${roboto.className}`}>
              {randomQuote.quote}
            </p>
          </div>
        </>
      ) : null}
    </section>
  );
}
