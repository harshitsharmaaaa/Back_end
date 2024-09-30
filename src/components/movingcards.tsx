"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 
const items = [
  {
    quote: "I'm a developer, I know how to code, and I'm here to help you.",
    name: "John Doe",
    title: "CEO of XYZ Inc",
  },
  {
    quote: "I'm a developer, I know how to code, and I'm here to help you.",
    name: "John Doe",
    title: "CEO of XYZ Inc",
  },
  {
    quote: "I love coding, and I'm here to help you.",
    name: "Jane Doe",
    title: "Developer at ABC Corp",
  },
  {
    quote:
      "I'm a developer, I know how to code, and I'm here to help you.",
    name: "John Doe",
    title: "CEO of XYZ Inc",
  },
  {
    quote: "I'm a developer, I know how to code, and I'm here to help you.",
    name: "John Doe",
    title: "CEO of XYZ Inc",
  },
  {
    quote: "I'm a developer, I know how to code, and I'm here to help you.",
    name: "Jane Doe",
    title: "Developer at ABC Corp",
  },
  {
    quote:
      "I'm a developer, I know how to code, and I'm here to help you.",
    name: "John Doe",
    title: "CEO of XYZ Inc",
  }
];

export default function MovingCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={items}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  );
}