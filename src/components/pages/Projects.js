import React from 'react'


export default function Projects({ title, description, deployed, repo, image }) {
    return (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl bg-white border-sky-900 rounded-t-lg m-5">
                <a href={deployed}>
                    <img class="rounded-t-lg" src='https://images.unsplash.com/photo-1680007631114-cc0b37816fff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" />
                </a>
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900">{title}</h5>
                    <p class="mb-3 font-normal text-sky-900 h-24">{description}</p>
                    <a href={deployed} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-700 focus:ring-1 focus:outline-none focus:ring-sky-900">
                        Deployed Application
                    </a>
                    <a href={repo} class="inline-flex items-center p-3 ml-3 py-2 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-700 focus:ring-1 focus:outline-none focus:ring-sky-900">
                        Repository
                    </a>
                </div>
            </div>

    )
}
