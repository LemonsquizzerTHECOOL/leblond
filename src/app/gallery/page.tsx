import { Artwork } from "~/valeriane/components/gallery/Artwork";
import { Navbar } from "~/valeriane/components/Navbar";

export default function Gallery() {
    return (
        <main>
            <Navbar></Navbar>
            <div className="grid grid-cols-6 auto-rows-[200px] gap-4 p-8">
                <Artwork
                    name="Piece de resistance"
                    desc="toiler"
                    image="1.png"
                    colSpan={2}
                    rowSpan={2}
                    detail="A rustic schene wihiahriid fisd ofihdis hfodis fhdos ihfoisdhf dishf oi"
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
                    name="5"
                    desc="vertical"
                    image="5.jpg"
                    colSpan={2}
                    rowSpan={2}
                />
                <Artwork
                    name="4"
                    desc="vertical"
                    image="6.jpg"
                    colSpan={2}
                    rowSpan={2}
                />
                <Artwork
                    name="4"
                    desc="vertical"
                    image="7.jpg"
                    colSpan={2}
                    rowSpan={2}
                />
                <Artwork
                    name="4"
                    desc="vertical"
                    image="8.jpg"
                    colSpan={2}
                    rowSpan={1}
                />
                <Artwork
                    name="4"
                    desc="vertical"
                    image="9.jpg"
                    colSpan={2}
                    rowSpan={1}
                />
                <Artwork
                    name="4"
                    desc="vertical"
                    image="10.jpg"
                    colSpan={1}
                    rowSpan={2}
                />

            </div>
        </main>
    );
}
