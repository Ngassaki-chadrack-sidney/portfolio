"use client";

import React from "react";
import Header from "../Header";
import StackAndProjectsSection from "../StackAndProjectsSection";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div id="home" className="w-full bg-slate-900 text-foreground">
      <Header />
      <StackAndProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
