import React from 'react'
function Career() {
    return (
        <div className='bg-cyan-300 lg:min-h-150 md:py-32 px-5 xl:px-60 lg:px-30 py-5' id='career'>
            <p className='text-5xl sora font-medium'>Career Objective</p>
            <div class="grid lg:grid-cols-3 lg:gap-4 grid-cols-1">
                <div class="lg:col-span-2 col-span-1 py-5 Dosis">
                    <p className='text-xl'>Aspiring computer science graduate 
                        seeking a challenging role in a dynamic organization where 
                        I can apply my technical skills 
                        in web development and data management to contribute to innovative projects while continuing 
                        to grow professionally.</p>
                    <p className='text-xl font-bold py-3 noto'>Location:<span className='font-normal text-lg'> Warangal, Telangana</span></p>
                    <p className='text-xl font-bold py-3 noto'>Contact:<span className='font-normal text-lg'> +91 9963781623</span></p>
                </div>
                <div className='mx-10 lg:block hidden'>
                    <img src="./career.png" alt="" className='rounded-2xl'/>
                </div>
            </div>
        </div>
    )
}

export default Career