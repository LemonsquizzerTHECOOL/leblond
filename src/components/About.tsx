import { Facebook, Instagram, Palette, Book, Home, Coffee, Heart } from "lucide-react";

export function About() {
    return (
        <div className="min-h-screen bg-nord-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
                    <div className="relative group">
                        <div className="relative bg-nord-4 p-6">

                            <div className="-space-y-96">
                                <div className="p-3 bg-nord-4 flex flex-col rotate-3 shadow-2xl shadow-black/20 -z-2">
                                    <img src="artwork/1.png"></img>
                                    <div className="p-2">
                                        <p className="text-2xl text-center">Reidio Beic</p>
                                    </div>
                                </div>

                                <div className="p-3 bg-white flex flex-col -rotate-12 shadow-2xl shadow-black/20 -z-1">
                                    <img src="artwork/2.png"></img>
                                    <div className="p-2">
                                        <p className="text-2xl text-center">Adar</p>
                                    </div>
                                </div>

                                <div className="p-3 bg-white flex flex-col rotate-3 shadow-2xl shadow-black/20 absolute left-11">
                                    <img src="artwork/3.png"></img>
                                    <div className="p-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-nord-4">
                            <div className="flex items-center gap-6 mb-8 pb-6">
                                <img
                                    src="Bwthyn21.png"
                                    alt="Bwthyn Logo"
                                    className="w-24 h-24"
                                />
                                <div>
                                    <h2 className="text-3xl font-light text-nord-2 mb-2">My Story</h2>
                                    <p className="text-slate-500 text-sm">Artist & Illustrator</p>
                                </div>
                            </div>

                            <div className="prose prose-lg text-nord-2 leading-relaxed space-y-4 font-serif">
                                <p>
                                    I am a French and Québécoise artist who has lived in Wales since 2007.
                                    I was brought up in Angers, France, and went to live in this beautiful
                                    country after graduating in literature in Nantes. I live in an old farmhouse
                                    near Aberystwyth with my three sons, several cats and too many chickens.
                                </p>

                                <div className="flex items-start gap-3 my-6 p-4">
                                    <Coffee className="w-5 h-5 text-nord-2 mt-1 flex-shrink-0" />
                                    <p className="text-sm italic">
                                        I have a little studio at home where I paint while listening to French
                                        radio and sipping posh tea. In winter the wood-burner is lit and I have
                                        a cat or two purring by my side. In summer I struggle to stay indoors
                                        and paint more during the evening.
                                    </p>
                                </div>

                                <p>
                                    My artworks often deal with the idea of belonging, how people inhabit
                                    the land, what makes the place they call home. Most of my works have
                                    details and sub-stories that you may notice if you look longer.
                                </p>

                                <p>
                                    I love reading novels and I wanted to be a writer when I was a child.
                                    There is a narrative aspect in my paintings, and I often have to write
                                    down what I have in mind before I start to paint it. I also illustrate
                                    picture books, which is a great way of combining my two passions,
                                    books and painting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}