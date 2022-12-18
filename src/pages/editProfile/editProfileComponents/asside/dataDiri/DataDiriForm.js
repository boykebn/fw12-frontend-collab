import React from 'react';
import AssideNav from '../AssideNav';



export default function DataDiriForm() {
    return (
        <div className='box-border pt-1'>
            <AssideNav navClassName="font-openSans text-xl text-[#1F2A36]" nav1="Data diri"/>
            <hr className='w-full' />
            <div
                className='parents-DataDiriInputClassName'>
                <label
                    htmlFor='namaLengkap'
                    className='text-[#9EA0A5] text-xs'>
                    Nama lengkap
                </label>
                <input
                    type="text"
                    name='namaLengkap'
                    className='dataDiri-InputClass'
                    id='namaLengkap'
                    placeholder='Masukan nama lengkap' />
            </div>
            <div
                className='parents-DataDiriInputClassName'>
                <label
                    htmlFor='jobdesk'
                    className='text-[#9EA0A5] text-xs'>
                    Job desk
                </label>
                <input
                    type="text"
                    name='jobdesk'
                    className='dataDiri-InputClass'
                    id='jobdesk'
                    placeholder='Masukan nama Job desk' />
            </div>
            <div
                className='parents-DataDiriInputClassName'>
                <label
                    htmlFor='domisili'
                    className='text-[#9EA0A5] text-xs'>
                    Domisili
                </label>
                <input
                    type="text"
                    name='domisili'
                    className='dataDiri-InputClass'
                    id='domisili'
                    placeholder='Masukan Domosili' />
            </div>
        </div>
    )
}
