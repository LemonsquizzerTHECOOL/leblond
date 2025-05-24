"use client";

import { X } from "lucide-react";
import { useRef } from "react";

interface ArtworkProps {
    name: string,
    desc: string,
    image: string,
    rowSpan?: number,
    colSpan?: number,
    detail?: string
}
export function Artwork({ name, image, desc, rowSpan = 1, colSpan = 1, detail }: ArtworkProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    return (
        <>
            <div
                onClick={openDialog}
                className={`bg-neutral-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 hover:rotate-0 hover:scale-105 transition-all duration-300 relative group border-dashed border border-gray-800/20 cursor-pointer`}
                style={{
                    gridRow: `span ${rowSpan}`,
                    gridColumn: `span ${colSpan}`,
                }}
            >
                <img src={`artwork/${image}`} alt={name} className="w-full h-full object-cover rounded" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/35 flex flex-col justify-center items-center text-white">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm">{desc}</p>
                </div>
            </div>

            <dialog
                ref={dialogRef}
                className="p-10 rounded-lg max-w-2xl w-full backdrop:bg-black/50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={(e) => {
                    if (e.target === dialogRef.current) dialogRef.current.close();
                }}
            >
                <img src={`artwork/${image}`} alt={name} className="w-full h-full object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-4">{detail}</p>
                <button
                    onClick={() => dialogRef.current?.close()}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X></X>
                </button>
            </dialog>
        </>
    );
}