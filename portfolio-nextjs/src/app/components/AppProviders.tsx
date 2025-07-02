"use client";

import { ThemeProvider } from "@/app/contexts/ThemeContext"; // Using alias @
import React, { ReactNode } from "react";
import ParticlesCDN from "./ParticlesCDN"; // Import the ParticlesCDN component

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ParticlesCDN /> {/* Render ParticlesCDN component here */}
      {children}
    </ThemeProvider>
  );
}
