"use client";

import React, { useEffect, useRef } from 'react';

const Cat: React.FC = () => {
    const nekoEl = useRef<HTMLDivElement>(null);
    const mousePosX = useRef(0);
    const mousePosY = useRef(0);
    const frameCount = useRef(0);
    const idleTime = useRef(0);
    const idleAnimation = useRef<string | null>(null);
    const idleAnimationFrame = useRef(0);
    const nekoPosX = useRef(32);
    const nekoPosY = useRef(32);
    const nekoSpeed = 10;
    const lastFrameTimestamp = useRef<number | undefined>(undefined);

    const spriteSets = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        scratchSelf: [
            [-5, 0],
            [-6, 0],
            [-7, 0],
        ],
        scratchWallN: [
            [0, 0],
            [0, -1],
        ],
        scratchWallS: [
            [-7, -1],
            [-6, -2],
        ],
        scratchWallE: [
            [-2, -2],
            [-2, -3],
        ],
        scratchWallW: [
            [-4, 0],
            [-4, -1],
        ],
        tired: [[-3, -2]],
        sleeping: [
            [-2, 0],
            [-2, -1],
        ],
        N: [
            [-1, -2],
            [-1, -3],
        ],
        NE: [
            [0, -2],
            [0, -3],
        ],
        E: [
            [-3, 0],
            [-3, -1],
        ],
        SE: [
            [-5, -1],
            [-5, -2],
        ],
        S: [
            [-6, -3],
            [-7, -2],
        ],
        SW: [
            [-5, -3],
            [-6, -1],
        ],
        W: [
            [-4, -2],
            [-4, -3],
        ],
        NW: [
            [-1, 0],
            [-1, -1],
        ],
    };

    useEffect(() => {
        const isReducedMotion =
            window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

        if (isReducedMotion) return;

        const el = nekoEl.current;

        if (!el) return;

        el.id = "oneko";
        el.ariaHidden = "true";
        el.style.width = "32px";
        el.style.height = "32px";
        el.style.position = "fixed";
        el.style.pointerEvents = "none";
        el.style.imageRendering = "pixelated";
        el.style.left = `${nekoPosX.current - 16}px`;
        el.style.top = `${nekoPosY.current - 16}px`;
        el.style.zIndex = "2147483647";

        let nekoFile = "./oneko.gif"
        el.style.backgroundImage = `url(${nekoFile})`;

        const handleMouseMove = (event: MouseEvent) => {
            mousePosX.current = event.clientX;
            mousePosY.current = event.clientY;
        };

        const onAnimationFrame = (timestamp: number) => {
            if (!el.isConnected) {
                return;
            }
            if (!lastFrameTimestamp.current) {
                lastFrameTimestamp.current = timestamp;
            }
            if (timestamp - lastFrameTimestamp.current > 100) {
                lastFrameTimestamp.current = timestamp
                frame()
            }
            window.requestAnimationFrame(onAnimationFrame);
        }

        const setSprite = (name: string, frame: number) => {
            if (!spriteSets[name]) return;
            const sprite = spriteSets[name][frame % spriteSets[name].length];
            el.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
        };

        const resetIdleAnimation = () => {
            idleAnimation.current = null;
            idleAnimationFrame.current = 0;
        };

        const idle = () => {
            idleTime.current += 1;

            if (
                idleTime.current > 10 &&
                Math.floor(Math.random() * 200) == 0 &&
                idleAnimation.current == null
            ) {
                let avalibleIdleAnimations: string[] = ["sleeping", "scratchSelf"];
                if (nekoPosX.current < 32) {
                    avalibleIdleAnimations.push("scratchWallW");
                }
                if (nekoPosY.current < 32) {
                    avalibleIdleAnimations.push("scratchWallN");
                }
                if (nekoPosX.current > window.innerWidth - 32) {
                    avalibleIdleAnimations.push("scratchWallE");
                }
                if (nekoPosY.current > window.innerHeight - 32) {
                    avalibleIdleAnimations.push("scratchWallS");
                }
                idleAnimation.current =
                    avalibleIdleAnimations[
                    Math.floor(Math.random() * avalibleIdleAnimations.length)
                    ];
            }

            switch (idleAnimation.current) {
                case "sleeping":
                    if (idleAnimationFrame.current < 8) {
                        setSprite("tired", 0);
                        break;
                    }
                    setSprite("sleeping", Math.floor(idleAnimationFrame.current / 4));
                    if (idleAnimationFrame.current > 192) {
                        resetIdleAnimation();
                    }
                    break;
                case "scratchWallN":
                case "scratchWallS":
                case "scratchWallE":
                case "scratchWallW":
                case "scratchSelf":
                    setSprite(idleAnimation.current, idleAnimationFrame.current);
                    if (idleAnimationFrame.current > 9) {
                        resetIdleAnimation();
                    }
                    break;
                default:
                    setSprite("idle", 0);
                    return;
            }
            idleAnimationFrame.current += 1;
        };

        const frame = () => {
            frameCount.current += 1;
            const diffX = nekoPosX.current - mousePosX.current;
            const diffY = nekoPosY.current - mousePosY.current;
            const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

            if (distance < nekoSpeed || distance > 100) {
                idle();
                return;
            }

            idleAnimation.current = null;
            idleAnimationFrame.current = 0;

            if (idleTime.current > 1) {
                setSprite("alert", 0);
                idleTime.current = Math.min(idleTime.current, 7);
                idleTime.current -= 1;
                return;
            }

            let direction = "";
            direction = diffY / distance > 0.5 ? "N" : direction;
            direction = diffY / distance < -0.5 ? "S" : direction;
            direction = diffX / distance > 0.5 ? "W" : direction;
            direction = diffX / distance < -0.5 ? "E" : direction;
            setSprite(direction, frameCount.current);

            nekoPosX.current -= (diffX / distance) * nekoSpeed;
            nekoPosY.current -= (diffY / distance) * nekoSpeed;

            nekoPosX.current = Math.min(Math.max(16, nekoPosX.current), window.innerWidth - 16);
            nekoPosY.current = Math.min(Math.max(16, nekoPosY.current), window.innerHeight - 16);

            el.style.left = `${nekoPosX.current - 16}px`;
            el.style.top = `${nekoPosY.current - 16}px`;
        };

        document.addEventListener("mousemove", handleMouseMove);
        window.requestAnimationFrame(onAnimationFrame);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={nekoEl} />;
};

export default Cat;
