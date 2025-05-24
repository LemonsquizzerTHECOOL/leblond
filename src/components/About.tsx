import { Coffee, Facebook, Instagram } from "lucide-react";
import { FloatBar } from "./FloatBar";

export function About() {
    return (
        <div className="dark:bg-nord-0 relative">

            <FloatBar></FloatBar>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start h-full ">
                    <div className="relative group hidden lg:block">
                        <div className="relative dark:bg-nord-0 p-6">
                            <div className="-space-y-96">
                                <div className="p-3 bg-[rgb(216,221,232)] flex flex-col shadow-2xl shadow-black/20 absolute left-1 z-10 hover:-rotate-6 transition-all">
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
                                    className="w-24 h-24 block dark:hidden"
                                />
                                <img
                                    src="ty.png"
                                    alt="Bwthyn Logo Dark"
                                    className="w-24 h-24 hidden dark:block"
                                />
                                <div>
                                    <h2 className="text-3xl text-nord-2 mb-2 dark:text-nord-10 font-extralight">About me</h2>
                                    <p className="text-slate-500 text-sm">Artist & Illustrator</p>
                                </div>
                            </div>

                            <div className="prose prose-lg text-nord-2 dark:text-nord-4 leading-relaxed space-y-4 font-serif">
                                <p>
                                    Valériane is a French-Québécois artist who has been living in Wales since 2007.
                                    She grew up in Angers, France, and moved to this beautiful country after graduating with a degree in literature from Nantes. She now lives in Aberystwyth with her four sons and a cat.
                                </p>

                                <div className="flex items-start gap-3 my-6 p-4">
                                    <Coffee className="w-5 h-5 text-nord-2 mt-1 flex-shrink-0" />
                                    <p className="text-sm italic">
                                        Valériane works from her home studio, where she paints while listening to French radio and drinking tea.
                                    </p>
                                </div>

                                <p>
                                    During the summer months, she finds it hard to stay indoors and tends to paint more in the evenings. Her artwork often explores themes of belonging, how people inhabit landscapes, and what makes a place feel like home. Her paintings are full of small details and hidden stories that reward close inspection.
                                    A passionate reader, Valériane once dreamed of becoming a writer. This narrative drive continues to shape her painting process—she often writes down her thoughts before picking up a brush. She also illustrates picture books, which allows her to blend her two great passions: storytelling and painting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}