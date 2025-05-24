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
                className="text-nord-2 text-2xl relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all hover:after:w-full font-serif"
            >
                {text}
            </a>
        </>
    )
}