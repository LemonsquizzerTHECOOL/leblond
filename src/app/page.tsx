import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";

export default function HomePage() {
  return (
    <main>
      <Navbar></Navbar>
      <About></About>
    </main>
  );
}
