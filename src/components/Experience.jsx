import React from 'react'
import { Briefcase } from 'lucide-react';

function Experience() {
    
    return (
        <div className="relative min-h-110 bg-[url('/experience.png')] bg-cover bg-center" id='experience'>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Content */}
            <div className="relative z-10 min-h-110 md:py-20 text-white">
                <div className="text-start px-2  lg:px-50">
                    <h1 className="px-5 md:px-8 bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text md:text-5xl text-4xl text-transparent sora">
                        Professional Experience
                    </h1>
                    <div className="relative max-w-4xl mx-auto border mt-5 border-white/10 bg-gradient-to-b from-gray-900 to-black shadow-lg">

                        {/* Top icon bar */}
                        <div className="flex justify-center bg-gray-800 border-t border-r border-l border-gray-600 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business-icon lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 space-y-2 text-xl border-b border-r border-l border-gray-600">

                            <h3 className="text-2xl font-semibold text-white">
                                Frontend Developer Intern
                            </h3>

                            <p className="text-lg">
                                <span className="text-cyan-400 font-medium">
                                    Drecon Innovations
                                </span>
                                <span className="text-gray-400"> | Feb 2025 – Aug 2025</span>
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                Worked on web-based solutions aligned with client requirements.
                                Contributed to frontend development, ensuring seamless integration
                                and performance.
                            </p>

                            <p className="text-gray-200">
                                <span className="font-semibold text-white">
                                    Technologies:
                                </span>{" "}
                                React.js, Tailwind CSS, HTML, CSS, Git
                            </p>

                        </div>
                    </div>

                </div>



            </div>

        </div>

    )
}

export default Experience