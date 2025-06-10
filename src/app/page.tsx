// src/app/page.tsx
"use client";

import Footer from "../components/Footer";
import InitialPage from "./pages/page1";
import { HeroSection } from "./pages/page1/HeroSection/page";

import { InfoSection } from "./pages/page1/InfoSection/page";
import { IntroSection } from "./pages/page1/IntroSection";

export default function Home() {
  return (
    <InitialPage></InitialPage>
  );
}
