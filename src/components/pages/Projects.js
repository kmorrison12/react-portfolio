import React from 'react'

export default function Projects({ title, description, deployed, repo, image }) {
    return (
        <div className=""> 
            <div class="max-w-sm border border-gray-200 rounded-lg shadow-xl bg-white border-sky-900 m-5">
                <a href={deployed}>
                    <img class="rounded-t-lg" src={image} alt="" />
                </a>
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900">{title}</h5>
                    <p class="mb-3 font-normal text-sky-900">{description}</p>
                    <a href={deployed} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-700 focus:ring-1 focus:outline-none focus:ring-sky-900">
                        Deployed Application
                    </a>
                    <a href={repo} class="inline-flex items-center p-3 ml-1 mt-1 py-2 text-sm font-medium text-center text-white bg-sky-900 rounded-lg hover:bg-sky-700 focus:ring-1 focus:outline-none focus:ring-sky-900">
                        Repository
                    </a>
                </div>
            </div>




 {/* <div>
      <div
        id="item-grid"
        className="mt-auto relative py-20 md:py-24 bg-amber-100"
      >
          <div className="flex flex-wrap flex-row -mx-4 text-center">
                <div
                  className="flex mb-12 px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6"
                  key={items._id}
                >
                  <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 hover:bg-black opacity-0 transition duration-700 hover:opacity-20"></div>
                      <img
                        className="max-w-full h-full"
                        src={items.iconURL}
                        alt="item"
                      ></img>
                    </div>
                    <div className="flex flex-shrink py-6 px-8 flex-1">
                      <div className="mb-2 px-12">
                        <h3 className="text-xl leading-normal mb-4 font-bold text-gray-800">
                          {items.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div> */}
    </div>
    )
}
