"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const techImages = [
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    title: "AI & Automation",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    title: "Cloud Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    title: "Cyber Security",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    title: "Modern Web Apps",
  },
  {
    src: "https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=1200&q=80",
    title: "Blockchain Systems",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % techImages.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/30 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/30 blur-[120px] rounded-full animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-950/50 to-purple-950/50 border border-blue-500/30 backdrop-blur">
              <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Next-Gen Development Studio
              </span>
            </div>

            <h1 className="font-black leading-tight text-4xl sm:text-5xl xl:text-6xl">
              <span className="block text-white">Crafting Digital</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
                Masterpieces
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              Bleeding-edge software blending innovation, security & performance.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/get-started"
                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Launch Project →
              </Link>
             
            </div>
          </div>

          {/* RIGHT – CAROUSEL */}
          <div className="relative">
            <div className="absolute -inset-5 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 blur-3xl opacity-25 animate-pulse-slow" />

            <div className="relative h-[260px] sm:h-[300px] xl:h-[340px] rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
              {techImages.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                    {img.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%,100% { background-position:0% 50% }
          50% { background-position:100% 50% }
        }
        @keyframes float {
          0%,100% { transform:translate(0,0) }
          50% { transform:translate(20px,-20px) }
        }
        @keyframes float-delayed {
          0%,100% { transform:translate(0,0) }
          50% { transform:translate(-20px,20px) }
        }
        @keyframes grid-move {
          0% { transform:translate(0,0) }
          100% { transform:translate(50px,50px) }
        }
        @keyframes pulse {
          0%,100% { opacity:0.2 }
          50% { opacity:0.45 }
        }
      `}</style>
    </section>
  );
}
