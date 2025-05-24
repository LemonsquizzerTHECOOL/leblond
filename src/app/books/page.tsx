import { BooksCollage } from "~/valeriane/components/collage/BooksCollage";
import { Sidenav } from "~/valeriane/components/Sidenav";

export default function HomePage() {
    return (
        <main className="min-h-screen min-w-screen">
            <div className="flex flex-row h-screen">
                <Sidenav></Sidenav>

                <div className="h-full w-full overflow-y-auto">
                    <BooksCollage></BooksCollage>
                </div>
            </div>
        </main>
    );
}