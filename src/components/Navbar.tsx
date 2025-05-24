"use client";

import { Facebook, Instagram, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <nav className="backdrop-blur-xs p-5 flex flex-row justify-between sticky top-0 z-20 dark:bg-nord-0/50">
                <img src="Signature1.png" className="-rotate-1" alt="signature" />
                <div className="flex flex-row gap-4 items-center">
                    <div className="p-2 rounded-full w-9 h-9"></div>
                    <Instagram />
                    <Facebook />
                </div>
            </nav>
        );
    }

    return (
        <nav className="backdrop-blur-xs p-5 flex flex-row justify-between sticky top-0 z-20 dark:bg-nord-0/50">
            <img src="Signature1.png" className="-rotate-1 dark:invert-100" alt="signature" />
            <div className="flex flex-row gap-4 items-center">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 rounded-full hover:bg-nord-5/20"
                    aria-label="Toggle dark mode"
                >
                    {theme === "dark" ? (
                        <Moon className="w-5 h-5" />
                    ) : (
                        <Sun className="w-5 h-5" />
                    )}
                </button>
                <Instagram />
                <Facebook />
            </div>
        </nav>
    );
}