import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/ContactBox";
import Cat from "../components/Cat";

export default function HomePage() {
  return (
    <main>
      <Cat></Cat>
      <Navbar></Navbar>
      <About></About>
      <Contact></Contact>
    </main>
  );
}
