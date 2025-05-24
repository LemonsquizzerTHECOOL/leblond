import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="backdrop-blur-sm bg-nord-4/65 p-5 flex flex-row justify-between sticky top-0 z-20">
            <img src="Signature1.png" className="-rotate-1"></img>
            <div className="flex flex-row gap-4">
                <Instagram></Instagram>
                <Facebook></Facebook>
            </div>
        </nav>
    );
}
