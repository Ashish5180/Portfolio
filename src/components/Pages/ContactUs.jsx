import React from 'react'
// formspree use to create a form
const ContactUs = () => {
  return (
    
    <div name='contact' className='w-screen h-screen bg-[#040404] flex justify-center items-center p-4 '>
        <form method='POST' action="https://formspree.io/f/mdoqwpqk" className='flex flex-col max-w-[800px] w-full border-solid border-2 border-gray-700 p-3' id='contact'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 text-lg font-semibold'>// Submit the form below or shoot me an email - theashish.y@gmail.com</p>
            </div>
            <input className='bg-[#58585b] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#58585b]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#58585b] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 rounded-lg px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default ContactUs