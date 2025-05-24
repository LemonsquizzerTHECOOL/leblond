"use client";

import { InteractiveLink } from "./InteractiveLink";

export function FloatBar() {
    return (
        <>
            <div className="mt-10 flex flex-col gap-2">
                <InteractiveLink text="home" url="/#"></InteractiveLink>
                <InteractiveLink text="books" url="/books"></InteractiveLink>
                <InteractiveLink text="about" url="/about"></InteractiveLink>
                <InteractiveLink text="contact" url="/gallery"></InteractiveLink>
                <InteractiveLink text="shop" url="https://www.etsy.com/uk/market/valeriane_leblond"></InteractiveLink>
            </div>
        </>
    )
}