import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="bg-nord-4 p-10 flex flex-row justify-between">
            <img src="Signature1.png" className="-rotate-1"></img>
            <div className="flex flex-row gap-4">
                <Instagram></Instagram>
                <Facebook></Facebook>
            </div>
        </nav>
    );
}
