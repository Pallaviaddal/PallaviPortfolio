import React from 'react'

function Skills() {
    return (
        <div className='min-h-110 bg-black' id='skills'>
            <div className='flex justify-center md:py-10'>
                <div className='lg:w-3/4 w-2xl lg:px-10'>
                    <p className='bg-gradient-to-r py-5 from-violet-500 to-blue-300 bg-clip-text text-5xl font-semibold text-transparent'>Skills & Interests</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 lg:mx-0 mx-5'>
                        <div className='text-white dosis text-xl'>
                            <p className='bg-gradient-to-r py-5 from-violet-400 to-blue-300 bg-clip-text text-3xl font-semibold text-transparent'>Soft Skills</p>
                            <ul className='list-disc list-inside text-md space-y-4'>
                                <li>Strong organizational and time-management skills</li>
                                <li>Ability to work independently and in teams</li>
                                <li>Quick learner with adaptability.</li>
                                <li>Efficient at meeting deadlines</li>
                            </ul>
                        </div>
                        <div className='text-white dosis text-xl'>
                            <p className='bg-gradient-to-r py-5 from-violet-400 to-blue-300 bg-clip-text text-3xl font-semibold text-transparent'>Hobbies & Passions</p>
                            <ul className='list-disc list-inside text-md space-y-4'>
                                <li>Listening to music for inspiration.</li>
                                <li>Learning new technical skills continuously</li>
                                <li>Editing videos and photos creatively</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills