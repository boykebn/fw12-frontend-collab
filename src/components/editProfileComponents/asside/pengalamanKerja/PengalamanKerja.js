import React, { Component } from 'react'
import AssideNav from '../AssideNav';




export default class PengalamanKerja extends Component {
    constructor(props) {
        super(props)
        
    
        this.state = {
            type: 'text'
        }

    }

        date = (event) => {
        if (this.state.type === 'text') {
            this.setState({
                type:'date'
            })
        } 
        event.preventDefault()
    }


    render() {

        return (
            <div className='font-openSans bg-white py-1 rounded-[8px]'>
                <AssideNav navClassName="font-openSans text-xl text-[#1F2A36]" nav1="Pengalaman Kerja" />
                <hr className='w-full' />
                <form className='px-7'>
                    <div className='lg:grid lg:grid-cols-2 lg:gap-2 my-7'>
                        <div
                            className="pengalamanKerja-InputParentClassName">
                            <label htmlFor='perusahaan' className="text-[#9EA0A5] text-xs" >
                                Nama Perusahaan
                            </label>
                            <input
                                type="text"
                                name='perusahaan'
                                className="dataDiri-InputClass"
                                id='perusahaan'
                                placeholder='Masukkan Perusahaan' />
                        </div>
                        <div className="pengalamanKerja-InputParentClassName">
                            <label
                                htmlFor='perusahaan'
                                className="text-[#9EA0A5] text-xs" >
                                Nama Perusahaan
                            </label>
                            <input
                                type="text"
                                name='posisi'
                                className="dataDiri-InputClass"
                                id='posisi'
                                placeholder='Masukkan Posisi' />
                        </div>
                        <div className='pengalamanKerja-InputParentClassName'>
                            <label
                                htmlFor='masuk'
                                className="text-[#9EA0A5] text-xs">
                                Tahun Masuk
                            </label>
                            <input
                                onFocus={this.date}
                                type={this.state.type} //ubah type tanggal
                                name="masuk"
                                className='dataDiri-InputClass'
                                id="masuk"
                                placeholder="MM-DD-YY" />
                        </div>
                        <div className='pengalamanKerja-InputParentClassName'>
                            <label
                                htmlFor='keluar'
                                className="text-[#9EA0A5] text-xs">
                                Tahun Keluar
                            </label>
                            <input
                                onFocus={this.date}
                                type={this.state.type} //ubah type tanggal
                                name="keluar"
                                className='dataDiri-InputClass'
                                id="keluar"
                                placeholder="MM-DD-YY" />
                        </div>
                    </div>
                    <div className='pengalamanKerja-InputParentClassName'>
                        <label
                            htmlFor="decryption"
                            className='text-[#9EA0A5] text-xs'>
                                Deskripsi singkat
                            </label>
                            <textarea
                                name="decryption"
                                id="decryption"
                                className='deskripsi-singkatClassName'
                                placeholder='Tuliskan deskripsi singkat'>
                            </textarea>
                    </div>
                    <hr className='w-full'/>
                    <button type='submit'
                        className='btn-portfolioClassName hover:scale-[1.05]'>
                        Tambah pengalaman kerja
                    </button>
                    <hr className='w-full mb-20'/>
                </form>
            </div>
        
        )
    
    }
}
