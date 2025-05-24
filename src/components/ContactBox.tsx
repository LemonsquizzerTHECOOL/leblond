export function Contact() {
    return (
        <div className="bg-nord-4 dark:bg-nord-0 my-36 dark:text-nord-4">
            <div className="p-5 flex flex-col gap-4 items-center">
                <h2 className="text-2xl font-bold text-center font-serif">
                    Contact Me
                </h2>
                <p className="text-md text-center">
                    If you have questions, would like to get in touch about illustration work, books, or any other enquiries, you’re welcome to contact Valériane by email.
                </p>
            </div>
            <div className="container mx-auto px-4 flex items-center">
                <div className="w-1/2">
                    <div className="max-w-lg mx-auto">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src="owl.png" alt="Owl" className="max-w-full" />
                </div>
            </div>
        </div>
    );
}
