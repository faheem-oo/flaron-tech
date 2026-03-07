"use client";

import { useState, useEffect } from "react";

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<
    { id: number; left: string; delay: string; duration: string; size: number; opacity: number }[]
  >([]);

  useEffect(() => {
    setLeaves(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${15 + Math.random() * 10}s`,
        size: 8 + Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.2,
      }))
    );
  }, []);

  if (leaves.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute"
          style={{
            left: leaf.left,
            top: "-20px",
            animation: `float-leaf ${leaf.duration} ${leaf.delay} ease-in-out infinite`,
            opacity: leaf.opacity,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z"
              fill="#6DBE45"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
