import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/ContactBox";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <main className="dark:bg-nord-0 min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1 flex flex-col">
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </main>
  );
}