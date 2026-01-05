import React from 'react'
import { Link } from 'react-router-dom'
import { Mails, PhoneCall, Linkedin, Github } from 'lucide-react'

function Contact() {
    return (
        <div className='min-h-100 bg-gradient-to-r from-blue-300 to-blue-500' id='contact'>
            <div className='flex justify-center md:py-10'>
                <div className='lg:w-3/4 w-2xl lg:px-10'>
                    <p className='text-black py-5 px-3 md:px-0 text-5xl font-medium mb-8 sora'>Let's Connect</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mx-0 md:mx-5 px-2'>
                        <div className='text-black text-md sora'>
                            <p className=' text-justify font-medium mb-8 '>
                                I confirm that all information provided is accurate and authorize its verification.
                                I'm excited to contribute my skills to innovative projects
                                and grow professionally in a dynamic environment.
                            </p>
                            <div className='py-1 space-y-4'>
                                <p className='font-semibold'>Contact Information:</p>
                                {/* <p className='font-semibold'>Phone: <span className='font-normal'>+91 9963781623</span></p> */}
                            </div>
                            <div className='py-1 space-y-4 flex space-x-2'>
                                <p><Mails/></p>
                                <Link to="mailto:pallaviaddala27@gmail.com" className="hover:underline text-blue-900 font"> pallaviaddala27@gmail.com</Link>
                            </div>
                            <div className='py-1 space-y-4 flex space-x-2'>
                                <p><PhoneCall/></p>
                                <Link to="tel:+91 9963781623" className="hover:underline"> +91 9963781623</Link>
                            </div>
                            <div className='py-1 space-y-4 flex space-x-2'>
                                <p><Linkedin/></p>
                                <Link to="https://www.linkedin.com/in/pallavi-addala-60b38a229/" className="hover:underline text-blue-900 font">LinkedIn Profile</Link>
                            </div>
                            <div className='py-1 space-y-4 flex space-x-2'>
                                <p><Github/></p>
                                <Link to="https://github.com/Pallaviaddal?tab=repositories" className="hover:underline text-blue-900 font">GitHub Profile</Link>
                            </div>
                            <div className='nota'>
                                <p className='text-xl font-bold'>Location: <span className="font-normal text-lg">Warangal, Telangana-506313</span></p>
                            </div>
                        </div>
                        <div className='lg:block hidden lg:mt-0 mt-10'>
                            <img src="./contactUs.png" alt="Contact" className='rounded-md w-90' />
                        </div>
                    </div>
                    <div className='py-10 md:space-x-3 space-x-1 md:px-0 px-3 space-y-8'>
                        <button>
                            <Link to="tel:+91 9963781623" className='mt-10 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg'>
                                Get in Touch
                            </Link>
                        </button>
                        <button>
                            <Link to="/Pallavi_Addala_Resume.pdf" target="_blank" download className='mt-10 border-blue-600 border-2 text-indigo-800 font-bold py-3 px-4 rounded-lg'>
                                Download Resume
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact