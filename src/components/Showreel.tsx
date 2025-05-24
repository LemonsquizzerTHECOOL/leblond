"use client";

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Showreel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'artwork/1.png',
        'artwork/2.png',
        'artwork/3.png',
        'artwork/5.jpg',
        'artwork/6.jpg',
        'artwork/7.jpg',
        'artwork/8.jpg',
        'artwork/9.jpg',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto my-32">
            <div className="relative h-96 overflow-hidden rounded-lg">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
                        style={{
                            transform: `translateX(${(index - currentIndex) * 100}%)`
                        }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
                <ArrowLeft></ArrowLeft>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
                <ArrowRight></ArrowRight>
            </button>

            <div className="flex justify-center gap-2 mt-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-16 h-16 rounded-lg overflow-hidden ${index === currentIndex ? 'ring-2 ring-blue-500' : ''
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}