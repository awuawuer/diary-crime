import React from "react";
import Benefits from "@/Components/Benefits";
import Features from "@/Components/Features";
import Hero from "@/Components/Hero";
import About from "@/Components/About/About";
import Testimonials from "@/Components/Testimonials";
import Faqs from "@/Components/Faqs";
import Chats from "@/Components/Chats";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Benefits />
      <About />
      <Testimonials />
      <Faqs />
      <Chats />
    </div>
  );
}
