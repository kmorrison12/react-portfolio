import React from 'react'
import kmorrison from '../../assests/katie-morrison.png'

export default function About() {
    // return (
    //     <div class="min-h-screen">
    //         <div class="">
    //             {/* <div class="flex flex-col-6 items-center w-full mt-40 sm:pt-20 lg:flex-row"> */}

    //             <div class="flex items-center justify-center sm:pt-10 w-full h-96 lg:w-1/2">
    //                 <img class="object-contain" src={kmorrison} alt="photo of Katie Morrison" />
    //             </div>
    //             <div class="lg:ml-20 lg:order-2">
    //                 <p class="mt-4 mr-10 text-sky-900 text-xl lg:text-3xl sm:text-2xl ml-4">Located in Hickory, North Carolina with her dog Charlie, Katie currently works as a business manager in local government for her community's Meals on Wheels program. Althougth serving the community brings her pride and joy, she is looking for a new challenge in web development! Katie recently completed a coding bootcamp at UNC Charlotte to pursue her career dreams. Be sure to revisit her page to see all of her new development work!</p>
    //             </div>
    //             {/* </div> */}

    //         </div>
    //     </div>

    // )

    return (
        <div class="min-h-screen">
            <div class="container flex mx-auto lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">

                    <div class="mt-10 lg:ml-20 lg:order-2">
                        <p class="mt-4 ml-4 text-sky-900 text-xl md:text-2xl lg:text-3xl lg:mt-40">Located in Hickory, North Carolina with her dog Charlie, Katie currently works as a business manager in local government for her community's Meals on Wheels program. Althougth serving the community brings her pride and joy, she is looking for a new challenge in web development! Katie recently completed a coding bootcamp at UNC Charlotte to pursue her career dreams. Be sure to revisit her page to see all of her new development work!</p>
                    </div>
                </div>

                <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <img class="object-contain mt-10 lg:mt-40 w-full h-full max-w-2xl rounded-md ml-10" src={kmorrison} alt="photo of Katie Morrison" />
                </div>
            </div>
        </div>

    )
}
