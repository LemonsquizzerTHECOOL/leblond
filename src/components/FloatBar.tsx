"use client";

import { Facebook, Instagram } from "lucide-react";
import { InteractiveLink } from "./InteractiveLink";

export function FloatBar() {
    return (
        <>
            <div className="mt-10 flex flex-col gap-2">
                <InteractiveLink text="home" url="#"></InteractiveLink>
                <InteractiveLink text="gallery" url="/gallery"></InteractiveLink>
                <InteractiveLink text="about" url="/gallery"></InteractiveLink>
                <InteractiveLink text="contact" url="/gallery"></InteractiveLink>
            </div>
        </>
    )
}