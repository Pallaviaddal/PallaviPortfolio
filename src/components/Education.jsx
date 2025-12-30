import React from 'react'

function Education() {
    return (
        <div className="min-h-100 bg-black md:py-10 lg:px-60 py-5 px-10" id='education'>

            <p className="bg-gradient-to-r py-5 from-violet-500 to-blue-300 bg-clip-text text-5xl font-semibold text-transparent">
                Education Background
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 grid-cols-1 py-5">

                {/* Card 1 */}
                <div className="bg-gray-700 rounded-lg p-6 ">

                    {/* Icon container */}
                    <div className="flex items-center justify-center w-15 h-15 rounded-full 
                          bg-radial-[at_50%_75%] from-violet-400 via-blue-300 to-violet-700">

                        {/* Icon */}
                        <svg
                            className="w-8 h-8 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 10.0001V16.0112C5 16.3702 5 16.5496 5.05465 16.7081C5.10299 16.8482 5.18187 16.9759 5.28558 17.0817C5.40287 17.2015 5.5634 17.2818 5.88446 17.4423L11.2845 20.1423C11.5468 20.2735 11.678 20.3391 11.8156 20.3649C11.9375 20.3877 12.0625 20.3877 12.1844 20.3649C12.322 20.3391 12.4532 20.2735 12.7155 20.1423L18.1155 17.4423C18.4366 17.2818 18.5971 17.2015 18.7144 17.0817C18.8181 16.9759 18.897 16.8482 18.9453 16.7081C19 16.5496 19 16.3702 19 16.0112V10.0001M2 8.50006L11.6422 3.67895C11.7734 3.61336 11.839 3.58056 11.9078 3.56766C11.9687 3.55622 12.0313 3.55622 12.0922 3.56766C12.161 3.58056 12.2266 3.61336 12.3578 3.67895L22 8.50006L12.3578 13.3212C12.2266 13.3868 12.161 13.4196 12.0922 13.4325C12.0313 13.4439 11.9687 13.4439 11.9078 13.4325C11.839 13.4196 11.7734 13.3868 11.6422 13.3212L2 8.50006Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </div>
                    <div className=' py-3 text-white '>
                        <p className='text-lg font-semibold py-2 robot'>B.Tech in CSE</p>
                        <p className='text-lg dosis '>MIETW (JNTUH Affiliate)</p>
                        <p className='text-lg dosis py-2'>2020 - 2024</p>
                        <p className='text-lg font-semibold robot'>CGPA: 7.35</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-700 rounded-lg p-6 ">

                    {/* Icon container */}
                    <div className="flex items-center justify-center w-15 h-15 rounded-full 
                          bg-radial-[at_50%_75%] from-violet-400 via-blue-300 to-violet-700">

                        {/* Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>


                    </div>
                    <div className=' py-3 text-white '>
                        <p className='text-lg font-semibold py-2 robot'>Intermediate</p>
                        <p className='text-lg dosis '>Shivani Junior College</p>
                        <p className='text-lg dosis py-2'>2018 – 2020</p>
                        <p className='text-lg font-semibold robot'>Score: 90.4%</p>
                    </div>
                </div>


                {/* Card 3 */}
                <div className="bg-gray-700 rounded-lg p-6 ">

                    {/* Icon container */}
                    <div className="flex items-center justify-center w-15 h-15 rounded-full 
                          bg-radial-[at_50%_75%] from-violet-400 via-blue-300 to-violet-700">

                        {/* Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 11H4.6C4.03995 11 3.75992 11 3.54601 11.109C3.35785 11.2049 3.20487 11.3578 3.10899 11.546C3 11.7599 3 12.0399 3 12.6V21M16.5 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V21M16.5 21V6.2C16.5 5.0799 16.5 4.51984 16.282 4.09202C16.0903 3.71569 15.7843 3.40973 15.408 3.21799C14.9802 3 14.4201 3 13.3 3H10.7C9.57989 3 9.01984 3 8.59202 3.21799C8.21569 3.40973 7.90973 3.71569 7.71799 4.09202C7.5 4.51984 7.5 5.0799 7.5 6.2V21M22 21H2M11 7H13M11 11H13M11 15H13"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>


                    </div>
                    <div className=' py-3 text-white '>
                        <p className='text-lg font-semibold py-2 robot'>SSC (10th Grade)</p>
                        <p className='text-lg dosis '>Shivani High School</p>
                        <p className='text-lg dosis py-2'>2017 – 2018</p>
                        <p className='text-lg font-semibold robot'>GPA: 8.3</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Education

