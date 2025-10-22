"use client";

import React from "react";
import { MenuBurger } from "./MenuBurger";

function GlobalHeader() {
  return (
    <div className="sticky top-8 left-auto right-4 z-[60]">
      <MenuBurger />
    </div>
  );
}

export default GlobalHeader;
