"use client";

import { Facebook, Instagram } from "lucide-react";

interface LinkProps {
    text: string,
    url: string
}

export function InteractiveLink({ text, url }: LinkProps) {
    return (
        <>
            <a
                href={url}
                className="text-nord-2 text-2xl relative transform transition-transform hover:translate-x-2 font-serif"
            >
                {text}
            </a>
        </>
    )
}