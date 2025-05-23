import { Artwork } from "~/valeriane/components/gallery/Artwork";
import { Navbar } from "~/valeriane/components/Navbar";

export default function Gallery() {
    return (
        <main>
            <Navbar></Navbar>
            <div className="grid grid-cols-6 auto-rows-[200px] gap-4 p-8">
                <Artwork
                    name="3"
                    desc="toiler"
                    image="1.png"
                    colSpan={2}
                    rowSpan={2}
                />
                <Artwork
                    name="2"
                    desc="wow"
                    image="2.png"
                    colSpan={4}
                    rowSpan={1}
                />
                <Artwork
                    name="1"
                    desc="toiler"
                    image="3.png"
                    colSpan={2}
                    rowSpan={1}
                />
                <Artwork
                    name="4"
                    desc="vertical"
                    image="4.png"
                    colSpan={2}
                    rowSpan={2}
                />
            </div>
        </main>
    );
}
