import React from "react";

const Hire = () => {
    return (
        <div>
            <div className="lg:flex lg:items-center lg:py-5 hidden lg:px-28">
                <div className="flex-1">
                    <img className="w-32" src={require('../assets/images/navlogo.png')} alt='logo' />
                </div>
                <div className="mr-14">
                    <img src={require('../assets/images/bell.png')} alt='bell' />
                </div>
                <div className="mr-14">
                    <img src={require('../assets/images/mail.png')} alt='mail' />
                </div>
                <div>
                    <img className='w-12' src={require('../assets/images/profile.png')} alt='profile' />
                </div>
            </div>

            <div className="flex bg-slate-100 gap-5 px-10 md-px-20 lg:px-28 py-10 font-sans flex-col lg:flex-row">
                <div className="flex-[35%]">
                    <div className="bg-white p-5 rounded-lg">
                        <div className="flex justify-center items-center mb-5">
                            <img src={require('../assets/images/test3.png')} alt='profile' />
                        </div>
                        <div>
                            <h3 className="font-medium text-xl md:text-2xl mb-2">
                                Louis Tomlinson
                            </h3>
                            <p className="font-medium mb-2">
                                Web Developer
                            </p>
                            <p className="text-[#9EA0A5] mb-3">
                                Freelancer
                            </p>
                            <div className="flex items-center gap-3 mb-2">
                                <img className="inline" src={require('../assets/images/map.png')} alt='map' />
                                <p className="text-[#9EA0A5]">
                                    Purwokerto, Jawa Tengah
                                </p>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <img className="inline" src={require('../assets/images/phone.png')} alt='map' />
                                <p className="text-[#9EA0A5]">
                                    0812-3456-789
                                </p>
                            </div>
                            <p className="text-[#9EA0A5] mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed,
                                ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                            </p>
                        </div>
                        <h4 className="font-medium text-xl md:text-2xl mb-5">Skill</h4>
                        <div className="flex flex-wrap gap-3 mb-10">
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">Python</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">Laravel</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">Golang</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">Javascript</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">PHP</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">HTML</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">C++</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">Kotlin</div>
                            <div className="py-1 px-5 w-fit border-2 border-amber-500 rounded bg-amber-300 text-white">Swift</div>
                        </div>
                    </div>
                </div>

                <div className="px-10 max-[768px]:px-0">
                    <h1 className="font-semibold text-2xl leading-10 mb-6">
                        Hubungi Lous Tomlinson
                    </h1>
                    <p className="leading-6	text-lg mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        euismod ipsum et dui rhoncus auctor.
                    </p>
                    <form className="flex flex-col">
                        <label className="text-xs leading-4	mb-2.5">
                            Tujuan tentang pesan ini
                        </label>
                        <select className="leading-5 text-sm rounded-md mb-6 p-2.5">
                            <option>Project</option>
                            <option></option>
                        </select>
                        <div className="relative w-full flex flex-col">
                            <label className="text-xs leading-4	mb-2.5">Pesan</label>
                            <textarea
                                className="leading-5 text-sm t-0 r-0 rounded-md	h-[30vh] mb-12 p-2.5"
                                placeholder="Deskripsikan/jelaskan lebih detail"></textarea>
                            <div className="absolute w-8 h-8 rounded-md bg-[#C4C4C4] p-2 top-[65%] left-[90%] max-[768px]:top-2/3 max-[768px]:left-[93%]">
                                <img src={require('../assets/images/attachment.png')} alt="Attachment" />
                            </div>
                        </div>
                        <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-400 py-2 px-4 text-sm font-medium text-white hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Kirim
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-[#5E50A1] hidden md:block px-10 md:px-20 lg:px-28 py-10 font-sans">
                <div className="w-2/6 mb-16">
                    <img className="mb-8 w-28" src={require('../assets/images/footerlogo.png')} alt='logo' />
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
                <div>
                    <hr />
                    <div className="flex mt-5 gap-20">
                        <p className="flex-1 text-white">2022 Peworld. All right reserved</p>
                        <p className="text-white">Telepon</p>
                        <p className="text-white">Email</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-100 md:hidden">
                <div className="flex px-10 py-5 bg-white border-[1px] rounded-t-3xl">
                    <div className="flex-1 flex justify-center items-center cursor-pointer">
                        <img src={require('../assets/images/grid.png')} alt='grid' />
                    </div>
                    <div className="flex-1 flex justify-center items-center cursor-pointer">
                        <img src={require('../assets/images/search.png')} alt='search' />
                    </div>
                    <div className="flex-1 flex justify-center items-center cursor-pointer">
                        <img src={require('../assets/images/message.png')} alt='message' />
                    </div>
                    <div className="flex-1 flex justify-center items-center cursor-pointer">
                        <img src={require('../assets/images/profile2.png')} alt='profile' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hire;