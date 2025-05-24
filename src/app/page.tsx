import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/ContactBox";
import { Footer } from "../components/Footer";
import Gallery from "./gallery/page";
import { FloatBar } from "../components/FloatBar";
import { Artwork } from "../components/gallery/Artwork";

export default function HomePage() {
  return (
    <main className="min-h-screen min-w-screen">
      <div className="flex flex-row h-screen">
        <div className="bg-nord-4 h-full w-[30vh] p-7 shadow-lg flex flex-col justify-center">
          <div className="flex flex-col h-full">
            <div>
              <img className="w-[200px]" src="Signature1.png" alt="" />
              <img className="w-[200px]" src="artwork\11b.png" alt="" />
            </div>
            <div className="flex-grow"></div>
            <FloatBar></FloatBar>
            <div className="flex-grow"></div>
          </div>
        </div>

        <div className="h-full w-full overflow-y-auto">
          <div className="grid grid-cols-6 auto-rows-[200px] gap-4 p-8 dark:bg-nord-0 bg-nord-5">
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
              image="6.jpg"
              colSpan={2}
              rowSpan={2}
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
              image="6.jpg"
              colSpan={2}
              rowSpan={2}
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
            {/* <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div>
            <div className="bg-white rounded-lg shadow-md aspect-square"></div> */}
          </div>

        </div>
      </div>
    </main >
  );
}