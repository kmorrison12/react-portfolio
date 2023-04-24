import React from 'react'
import kmgraphic from '../../assests/km-graphic-2.png'

export default function Header() {
    return (
        <header>
            <nav class="bg-gray-900">
                <div class="container flex flex-col items-center pt-6 pb-4 mx-auto">
                    <div class="mx-auto ">
                        <div class="flex items-center">
                            <img src={kmgraphic}  class="h-20 mr-3" alt=""/>
                            <span class="self-center text-4xl sm:text-5xl font-semibold whitespace-nowrap text-orange-50 italic pb-4">Katie Morrison</span>
                        </div>
                    </div>
                </div>
            </nav>


        </header>


    )
}