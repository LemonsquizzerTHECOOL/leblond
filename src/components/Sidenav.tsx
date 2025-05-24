import { Facebook, Instagram } from "lucide-react";
import { FloatBar } from "./FloatBar";

export function Sidenav() {
    return (
        <div className="bg-nord-4 h-full w-[30vh] p-7 shadow-lg flex flex-col justify-center">
            <div className="flex flex-col h-full">
                <div>
                    <img className="w-[200px]" src="Signature1.png" alt="" />
                    <img className="w-[200px]" src="artwork\11b.png" alt="" />
                </div>
                <div className="flex-grow"></div>
                <FloatBar></FloatBar>
                <div className="flex-grow"></div>
                <div className="flex flex-row gap-2">
                    <Instagram></Instagram>
                    <Facebook></Facebook>
                </div>
            </div>
        </div>
    )
}