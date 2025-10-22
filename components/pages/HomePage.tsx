"use client";

import React from "react";
import Header from "../Header";
import RecentProject from "../RecentProject";
import Stack from "../Stack";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div className="w-full bg-white text-black">
      <Header />
      <RecentProject />
      <Stack />
      <Footer />
    </div>
  );
}
