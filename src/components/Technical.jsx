import React from 'react'
import { LayoutGrid, Bug, Network, Camera, } from "lucide-react";
function Technical() {
    const technicalSkills = [
        {
            name: "Web Development",
            description: "Proficient in HTML, CSS & Bootstrap, React.js, Tailwind CSS. Creating responsive and modern web interfaces.",
            icons: LayoutGrid,
        },
        {
            name: "Web Scraping",
            description: "Good knowledge of web scraping techniques using Selenium and Beautiful Soup for data extraction.",
            icons: Bug,
        },
        {
            name: "Programming Languages",
            description: "Basic knowledge of JavaScript and Python for backend and scripting tasks.",
            icons: Network,
        },
        {
            name: "Creative Tools",
            description: "Experience with Adobe Photoshop, Illustrator, and Premiere Pro for graphic design and video editing.",
            icons: Camera,
        }
    ]
    return (
        <div className='min-h-110 bg-linear-to-r from-violet-300 to-blue-300' id='technical'>
            <div className='flex justify-center md:py-20'>
                <div className='bg-black lg:w-3/4 w-2xl lg:px-20 px-5 py-10 shadow-2xl shadow-blue-500/50'>
                    <p className='bg-gradient-to-r py-5 from-violet-500 to-blue-300 bg-clip-text text-5xl font-semibold text-transparent'>Technical Skills</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {technicalSkills.map((item, index) => {
                            const Icon = item.icons;
                            return (
                                <div className='flex flex-col items-center'>
                                    <div className='flex-col items-center py-5 gap-3 text-white noto'>
                                        <div className='flex gap-5 py-4'>
                                            <Icon className="w-10 h-10 text-blue-400 hover:text-violet-500 transition duration-300" />
                                            <p className='text-2xl font-normal'>{item.name}</p>
                                        </div>
                                        <p className='text-white pl-15 text-md'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technical