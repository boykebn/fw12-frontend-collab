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
                    htmlFor='perusahaan'
                    className='text-[#9EA0A5] text-xs'>
                    Nama Perusahaan
                </label>
                <input
                    type="text"
                    name='perusahaan'
                    className='dataDiri-InputClass'
                    id='perusahaan'
                    placeholder='Masukan nama perusahan' />
            </div>
            <div
                className='parents-DataDiriInputClassName'>
                <label
                    htmlFor='bidang'
                    className='text-[#9EA0A5] text-xs'>
                    Bidang
                </label>
                <input
                    type="text"
                    name='bidang'
                    className='dataDiri-InputClass'
                    id='bidang'
                    placeholder='Masukan bidang perusahaan ex : Financial' />
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
