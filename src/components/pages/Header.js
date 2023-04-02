import React from 'react'
import kmgraphic from '../../assests/km-graphic-2.png'
import NavTabs from '../NavTabs'

export default function Header() {
    return (
        <header class="bg-white dark:bg-gray-900">
            <nav class="bg-white dark:bg-gray-900">
                <div class="container flex flex-col items-center p-6 mx-auto">
                    <a href="#about" class="mx-auto ">
                        <a class="flex items-center">
                            <img src={kmgraphic} class="h-20 mr-3" />
                            <span class="self-center text-5xl font-semibold whitespace-nowrap text-orange-50 italic">Katie Morrison</span>
                        </a>
                    </a>
                    <NavTabs />
                </div>
            </nav>


        </header>


    )
}