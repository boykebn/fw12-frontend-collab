const Left = () => {
    return (
        <div className="hidden md:basis-1/2 md:block bg-[url('../images/auth/bg-auth.png')] bg-cover">
            <div className="bg-[#5E50A1]/80 h-screen relative">
                <div className="absolute">
                    <img className="h-[690px]" src={require('../../assets/images/auth/ornamen-left.png')} alt="" />
                </div>
                <div className="absolute right-0">
                    <img src={require('../../assets/images/auth/ornamen-right.png')} alt="" />
                </div>
                <img className="ml-10 pt-10" src={require('../../assets/images/auth/logo-small-white.png')} alt="logo" />
                <h1 className="text-white text-4xl font-bold ml-14 mt-40 w-[340px] leading-normal">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
            </div>
        </div>
    )
}

export default Left