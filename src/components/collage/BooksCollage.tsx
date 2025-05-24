import { Artwork } from "../gallery/Artwork";
import { Book } from "../gallery/Book";

export function BooksCollage() {
    return (
        <>
            <div className="grid grid-cols-6 auto-rows-[200px] gap-4 p-8 dark:bg-nord-0 bg-nord-5">
                <Book
                    coverImage="1.jpg"
                    colSpan={2}
                    rowSpan={2}
                    author="neek"
                    synopsis="d"
                    title="d"
                />
                <Book
                    coverImage="2.jpg"
                    colSpan={2}
                    rowSpan={2}
                    author="neek"
                    synopsis="d"
                    title="d"
                />
                <Book
                    coverImage="3.jpg"
                    colSpan={2}
                    rowSpan={2}
                    author="neek"
                    synopsis="d"
                    title="d"
                />
                <Book
                    coverImage="4.jpg"
                    colSpan={2}
                    rowSpan={2}
                    author="neek"
                    synopsis="d"
                    title="d"
                />
                <Book
                    coverImage="5.jpg"
                    colSpan={2}
                    rowSpan={2}
                    author="neek"
                    synopsis="d"
                    title="d"
                />
                <Book
                    coverImage="6.jpg"
                    colSpan={2}
                    rowSpan={2}
                    author="neek"
                    synopsis="d"
                    title="d"
                />
                <Book
                    coverImage="7.jpg"
                    colSpan={2}
                    rowSpan={2}
                    author="neek"
                    synopsis="d"
                    title="d"
                />
            </div>

        </>
    )
}