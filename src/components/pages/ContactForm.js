import React from "react"

export default function ContactForm() {

    return (
        <div className="min-h-screen">
        <section class=" max-w-4xl p-6 m-10 mx-auto bg-white rounded-md border border-gray-300 shadow-xl">
            <h2 class="text-lg font-semibold text-gray-700 capitalize">Contact Me!</h2>

            <form>
                <div class="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <label class="text-gray-700" for="username">Name</label>
                        <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700" for="emailAddress">Email Address</label>
                        <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    </div>

                    <div>
                        <label for="Description" class="text-gray-700">Message</label>
                        <textarea class="block  mt-2 w-full  rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
                    </div>

                <div class="flex justify-end mt-6">
                    <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
        </section>
        </div>

    );
}
