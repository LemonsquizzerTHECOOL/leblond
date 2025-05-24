"use client";

import { X } from "lucide-react";
import { useRef } from "react";

interface BookProps {
    title: string,
    author: string,
    coverImage: string,
    rowSpan?: number,
    colSpan?: number,
    synopsis?: string
}

export function Book({ title, author, coverImage, rowSpan = 1, colSpan = 1, synopsis }: BookProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openDialog = () => {
        dialogRef.current?.showModal();
    };

    return (
        <>
            <div
                onClick={openDialog}
                className={`bg-nord-4 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300 relative group cursor-pointer`}
                style={{
                    gridRow: `span ${rowSpan}`,
                    gridColumn: `span ${colSpan}`,
                }}
            >
                <img src={`books/${coverImage}`} alt={`${title} cover`} className="w-full h-full object-cover rounded" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded duration-300 bg-nord-0/45 backdrop-blur-2xl flex flex-col justify-center items-center text-white">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm">by {author}</p>
                </div>
            </div>

            <dialog
                ref={dialogRef}
                className="p-10 rounded-lg max-w-2xl w-full dark:bg-nord-1 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onClick={(e) => {
                    if (e.target === dialogRef.current) dialogRef.current.close();
                }}
            >
                <img src={`books/${coverImage}`} alt={`${title} cover`} className="w-full h-full object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-500 dark:text-nord-4 mb-4">by {author}</p>
                {synopsis && <p className="text-gray-700 dark:text-nord-4 mb-4">{synopsis}</p>}
                <button
                    onClick={() => dialogRef.current?.close()}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X />
                </button>
            </dialog>
        </>
    );
}