import { Contact } from "lucide-react";
import { Footer } from "~/valeriane/components/Footer";
import { Navbar } from "~/valeriane/components/Navbar";

export default function About() {
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