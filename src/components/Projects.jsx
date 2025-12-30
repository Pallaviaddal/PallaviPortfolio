import React from 'react'
import { Store, Utensils, Mail } from "lucide-react";
function Projects() {
    const projects = [
        {
            icon: Store,
            title: "Web Scraping on Amazon",
            desc: "Scraped Amazon to collect product details, pricing, and reviews. Converted data into structured DataFrame and Excel sheet using Selenium, Beautiful Soup, Pandas, and SQL.",
        },
        {
            icon: Utensils,
            title: "Food Website Project",
            desc: "Developed responsive food website using HTML, CSS, and Bootstrap. Features smooth animations, responsive design, and clean user interface for browsing and ordering food.",
        },
        {
            icon: Mail,
            title: "Automatic Email System",
            desc: "Implemented automated email system using Sendinblue. Streamlined marketing campaigns with personalized messages, scheduling, and performance tracking.",
        },
    ];
    return (
        <div className='min-h-100 bg-black pt-10' id='projects'>
            <div className='md:px-10 lg:px-50 px-5'>
                <h1 className="px-3 md:px-10 bg-gradient-to-r py-2 from-violet-500 to-cyan-400 bg-clip-text md:text-5xl text-2xl font-semibold text-transparent sora">Featured Project: Artivana</h1>
                <div className="grid grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-2 gap-2 text-white">
                    <div className='text-white space-y-4'>
                        <p className='px-3 md:ps-10 bg-gradient-to-r tracking-wide from-violet-500 to-cyan-400 bg-clip-text md:text-2xl text-lg text-transparent sora'>Custom Frame E-Commerce Platform</p>
                        <div className='px-3 md:ps-10 py-3 md:text-lg noto space-y-2'>
                            <p>Full-stack e-commerce website for personalized photo frames with <span className='text-blue-400'>QR code features </span> for custom songs or secret messages.</p>
                            <ul class="list-disc list-inside md:space-y-3 space-y-2 text-gray-300">
                                <li>Secure login and user-specific cart using JWT</li>
                                <li>React.js frontend with Tailwind CSS</li>
                                <li>Node.js, Express.js, MongoDB backend</li>
                                <li>Successfully deployed on Vercel</li>
                            </ul>
                            <p className='text-xl font-bold'>Live Demo: <a href="https://artivana-zdmj.vercel.app/" className='text-lg font-semibold hover:border-0 border-b border-white text-blue-600'>Artivana</a></p>
                        </div>
                    </div>
                    <div className='md:block hidden'>
                        <img src="./artivana.png" alt="Artivana Project Screenshot" className='rounded-md shadow-lg shadow-blue-500/50 mx-auto lg:w-80 lg:h-80' />
                    </div>
                </div>
            </div>
            <div className='md:px-10 lg:px-50 px-5'>
                <h1 className="px-3 md:px-10 bg-gradient-to-r md:mt-20 from-violet-500 to-cyan-400 bg-clip-text md:text-5xl text-2xl text-transparent sora">Major Projects</h1>
                <div className="grid grid-cols-1 py-4 gap-2 text-white">
                    <div className="bg-black px-6 md:px-20 py-20 text-white space-y-12">
                        {projects.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex gap-8 items-center justify-center">

                                    {/* LEFT CHEVRON SHAPE */}
                                    <div className="relative md:w-20 md:h-28 w-10 h-18 shrink-0 flex items-center justify-center">
                                        <div
                                            className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"
                                            style={{
                                                clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
                                            }}
                                        />
                                        <div className="relative z-10 flex items-center justify-center h-full">
                                            <Icon className="md:w-7 md:h-7 w-5 h-5 text-gray-300" />
                                        </div>
                                    </div>

                                    {/* RIGHT CONTENT */}
                                    <div className="space-y-3 max-w-4xl">
                                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects