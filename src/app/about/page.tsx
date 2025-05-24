import { Sidenav } from "~/valeriane/components/Sidenav";

export default function About() {
    return (
        <main className="min-h-screen min-w-screen polka">
            <div className="flex flex-row h-screen">
                <Sidenav />

                <div className="h-full w-full overflow-y-auto p-8 flex items-center justify-center gap-8">
                    <div className="bg-nord-0/10 p-4 shadow-lg rotate-[-2deg]">
                        <img
                            src="val.png"
                            alt="Valeriane"
                            className="h-[500px] w-auto object-contain bg-white"
                        />
                        <div className="text-center mt-4 font-handwriting text-gray-700">
                            Valeriane
                        </div>
                    </div>
                    <div className="w-2/3 max-w-3xl space-y-8">
                        <div className="flex items-center gap-6 mb-8">
                            <img
                                src="/ty.png"
                                alt="Bwthyn Logo"
                                className="w-24 h-24 block dark:hidden"
                            />
                            <img
                                src="/ty.png"
                                alt="Bwthyn Logo Dark"
                                className="w-24 h-24 hidden dark:block"
                            />
                            <div>
                                <h1 className="text-3xl text-nord-2 mb-2 dark:text-nord-10 font-extralight">
                                    About me
                                </h1>
                                <p className="text-slate-500 text-sm">
                                    (artist & illustrator)
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-lg text-nord-2 dark:text-nord-4 leading-relaxed space-y-6 font-serif">
                            <p>
                                Valériane is a French-Québécois artist who has been living in Wales since 2007.
                                She grew up in Angers, France, and moved to this beautiful country after graduating
                                with a degree in literature from Nantes.
                            </p>
                            <p>
                                She now lives in Aberystwyth with her four sons and a cat, where she finds
                                inspiration in the stunning Welsh landscapes and rich local culture.
                            </p>
                            <p>
                                Her work combines traditional techniques with contemporary themes, creating
                                pieces that bridge the gap between classical and modern artistic expression.
                            </p>
                        </div>

                        <div className="flex gap-3.5 text-nord-2 dark:text-nord-4">
                            <a href="#" className="hover:text-nord-10 transition-colors">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-nord-10 transition-colors">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-nord-10 transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}