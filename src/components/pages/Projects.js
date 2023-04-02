import React from 'react'

export default function Projects({title, description, deployed, repo, image}) {
    return (
        <div class="flex items-center justify-center ">
        <div class="max-w-sm bg-white border border-gray-200 rounded-l shadow-xl bg-white border-sky-900 rounded-t-lg">
            <a href="#">
                <img class="rounded-t-lg" src='https://images.unsplash.com/photo-1680007631114-cc0b37816fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}.</p>
                <a href={deployed} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Deployed Application
                </a>
                <a href={repo} class="inline-flex items-center p-3 ml-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Repository
                </a>
            </div>
        </div>
        </div>

    )
}
