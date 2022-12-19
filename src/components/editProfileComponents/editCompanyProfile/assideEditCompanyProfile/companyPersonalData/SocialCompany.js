import React from 'react'


export default function Social() {
    return (
        <div className='flex flex-col md:flex md:flex-col gap-6 lg:flex lg:flex-col px-7 mt-10'>
            <div
                className='flex flex-col gap-2'>
                <label
                    htmlFor='ig'
                    className='text-[#9EA0A5] text-xs'>
                    Email
                </label>
                <input
                    type="email"
                    name='email'
                    className='dataDiri-InputClass lg:w-full'
                    id='email'
                    placeholder='Masukan Email' />
            </div>
            <div
                className='flex flex-col gap-2'>
                <label
                    htmlFor='ig'
                    className='text-[#9EA0A5] text-xs'>
                    Instagram
                </label>
                <input
                    type="text"
                    name='ig'
                    className='dataDiri-InputClass lg:w-full'
                    id='ig'
                    placeholder='Masukan Username IG' />
            </div>
            <div
                className='flex flex-col gap-2'>
                <label
                    htmlFor='tel'
                    className='text-[#9EA0A5] text-xs'>
                    Nomor Telepon
                </label>
                <input
                    type="tel"
                    name='tel'
                    className='dataDiri-InputClass lg:w-full'
                    id='tel'
                    placeholder='Masukan nomor telepon' />
            </div>
            <div
                className='flex flex-col gap-2'>
                <label
                    htmlFor='linkedin'
                    className='text-[#9EA0A5] text-xs'>
                    Linkedin
                </label>
                <input
                    type="text"
                    name='linkedin'
                    className='dataDiri-InputClass lg:w-full'
                    id='linkedin'
                    placeholder='Masukan nama Linkedin' />
            </div>
        </div>
    )
}
