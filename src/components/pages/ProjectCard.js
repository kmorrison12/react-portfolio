import Slashed from '../../assests/slashed-and-smashed-logo.png'
import Hydro from '../../assests/hydro-home-logo.png'
import TeamProfile from '../../assests/team-profile.jpg'
import WorkDay from '../../assests/scheduler-screenshot.png'
import TextEditor from '../../assests/text-editor.png'
import SwapShop from '../../assests/swapshop.png'
import Projects from './Projects'

export default function ProjectCard() {
    const projects = [
        {
            title: "Slashed and Smashed",
            description: "Slashed and Smashed is an application for broswing horror movies by your selected streaming service then provides a random horror themed cocktail to pair with the movie.",
            deployed: "https://jnighton.github.io/Horror-Finder/",
            repo: "https://github.com/jNighton/Horror-Finder",
            image: Slashed 
        },
        {
            title: "Hydro Home",
            description: "Hydro Home allows users to set a water consumption goal and allows them to enter and track their daily water consumption.",
            deployed: "https://ancient-anchorage-85467.herokuapp.com/login",
            repo: "https://github.com/beefbones/hydro-home",
            image:  Hydro 
        },
        {
            title: "SwapShop",
            description: "SwapShop is a revolutionary app that lets you trade items you no longer need for things you want! Say goodbye to the hassle of selling or throwing away unwanted items.",
            deployed: "https://swopshop.herokuapp.com/",
            repo: "https://github.com/beefbones/swapshop",
            image: SwapShop
        },
        {
            title: "Work Day Scheduler",
            description: "The Work Day Schedular application allows users to plan their day by adding tasks or appointments to the indicated time.",
            deployed: "https://kmorrison12.github.io/work-day-scheduler/",
            repo: "https://github.com/kmorrison12/work-day-scheduler",
            image:  WorkDay 
        },
        {
            title: "Text Editor",
            description: "This qpplication allows users to create notes or code snippets with or without an internet connection then reliably retrieve them for later use.",
            deployed: "https://nameless-mountain-90856.herokuapp.com/",
            repo: "https://github.com/kmorrison12/text-editor",
            image: TextEditor 
        },
        {
            title: "Team Profile Generator",
            description: "This Team Profile Generator is a command line application that can be used to build a team profile.",
            deployed: "https://github.com/kmorrison12/team-profile-generator",
            repo: "https://github.com/kmorrison12/team-profile-generator",
            image: TeamProfile 
        },
    ]

    return (
        <div class="grid grid-cols-3 justify-items-center">
            {
                projects.map(element => {
                    return <div>
                        <Projects title={element.title} description={element.description} deployed={element.deployed} repo={element.repo} image={element.image}></Projects>
                    </div>
                })
            }
        </div>
    )

}

