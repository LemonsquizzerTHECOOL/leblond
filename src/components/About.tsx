import { Coffee } from "lucide-react";

export function About() {
    return (
        <div className="dark:bg-nord-0 relative">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start h-full ">
                    <div className="relative group hidden lg:block">
                        <div className="relative dark:bg-nord-0 p-6">
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

                                <div className="p-3 bg-white flex flex-col rotate-3 shadow-2xl shadow-black/20 absolute left-1 z-10">
                                    <img src="artwork/3.png"></img>
                                    <div className="p-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="dark:bg-nord-0">
                            <div className="flex items-center gap-6 mb-8 pb-6">
                                <img
                                    src="Bwthyn21.png"
                                    alt="Bwthyn Logo"
                                    className="w-24 h-24"
                                />
                                <div>
                                    <h2 className="text-3xl font-light text-nord-2 mb-2 dark:text-nord-10">About me</h2>
                                    <p className="text-slate-500 text-sm">Artist & Illustrator</p>
                                </div>
                            </div>

                            <div className="prose prose-lg text-nord-2 dark:text-nord-4 leading-relaxed space-y-4 font-serif">
                                <p>
                                    I am a French-Québécois artist living in Wales since 2007. I grew up in Angers, France, and moved to this beautiful country after graduating with a literature degree in Nantes. I live in Aberystwyth with my four sons and a cat. I have a studio at home where I paint while listening to French radio and drinking tea.
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
                                    In the summer, I find it hard to stay indoors and paint more in the evening. My works often address the notion of belonging, how people inhabit the territory, and what makes their home. Most of my works have details and sub-stories that you might notice upon closer inspection. I love reading novels and, as a child, I wanted to be a writer. There is a narrative dimension to my paintings, and I often have to write down what is in my head on paper before I start painting. I also illustrate picture books, which is a great way to combine my two passions, books and painting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}