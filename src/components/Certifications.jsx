import React from 'react'

function Certifications() {
    return (
        <div className="min-h-100 bg-black lg:px-60 py-5 px-10" id='certifications'>

            <p className="bg-gradient-to-r py-5 from-violet-500 to-blue-300 bg-clip-text text-5xl font-semibold text-transparent">
                Certifications & Learning
            </p>

            <div className="grid md:grid-cols-2 gap-6 grid-cols-1">

                {/* Card 1 */}
                <div className="bg-gray-900 rounded-sm p-6 ">
                    <div className=' text-white '>
                        <p className='text-lg font-semibold py-2 robot'>AWS Cloud</p>
                        <p className='text-lg sora '>Amazon Web Services Training and Certification</p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-900 rounded-sm p-6 ">
                    <div className=' text-white '>
                        <p className='text-lg font-semibold py-2 robot'>AWS Storage</p>
                        <p className='text-lg sora '>Specialized training in cloud storage solutions</p>
                    </div>
                </div>


                {/* Card 3 */}
                <div className="bg-gray-900 rounded-sm p-6 ">
                    <div className=' text-white '>
                        <p className='text-lg font-semibold py-2 robot'>Full Stack Development</p>
                        <p className='text-lg sora '>Completed comprehensive course at <span className='text-blue-500 text-xl font-semibold'>Data Pulse InfoTech</span></p>
                    </div>
                </div>


                {/* Card 4 */}
                <div className="bg-gray-900 rounded-sm p-6 ">
                    <div className=' text-white '>
                        <p className='text-lg font-semibold py-2 robot'>Web Development</p>
                        <p className='text-lg sora '>Participation certificate in Full Stack Web Development</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications

