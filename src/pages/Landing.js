import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="App bg-[#E5E5E5]">
      <nav className="bg-white">
        <div className="px-10 flex md:px-[150px] pt-[45px]">
          <div className="flex-1">
            <img className="" src={require("../assets/images/navlogo.png")} alt="navlogo" />
          </div>
          <div>
            <button className="border-2 border-[#5E50A1] px-[20px] py-[10px] rounded text-[#5E50A1] font-bold mr-[16px]">Masuk</button>
            <button className="border-1 bg-[#5E50A1] px-[22px] py-[12px] rounded text-white font-bold">Daftar</button>
          </div>
          <div></div>
        </div>
      </nav>
      <div className="bg-white">
        <div className="block pl-10 justify-items-stretch md:flex md:pl-[150px] pr-[115px] pt-[85px] md:mb-[100px]">
          <div className="w-[500px] pt-[110px] mr-[69px]">
            <div className="mb-[20px]">
              <span className="text-[#1F2A36] text-4xl  md:text-[44px] leading-[70px]">Talenta terbaik negeri untuk perubahan revolusi 4.0</span>
            </div>
            <div className="mb-[55px]">
              <span className="text-[#46505C] text-lg md:text-[18px] leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</span>
            </div>
            <div className="mb-4">
              <button className="border-1 bg-[#5E50A1] py-[21px] px-[24px] rounded text-[16px] text-white font-bold leading-[20px]">Mulai Dari Sekarang</button>
            </div>
          </div>
          <div>
            <img className="" src={require("../assets/images/pic1.png")} alt="pic1" />
          </div>
        </div>
        <div className="block px-10 md:pl-[150px] pr-[115px] pt-[85px] md:flex md:mb-[100px]">
          <div className="mr-[23px]">
            <img className="" src={require("../assets/images/pic2.png")} alt="pic2" />
          </div>
          <div className="pt-[25px]">
            <div className="w-[460px] mb-[34px]">
              <span className="text-[#1F2A36] text-3xl md:text-[36px]">Kenapa harus mencari tallent di peworld</span>
            </div>
            <div>
              <div className="flex mb-[28px]">
                <div className="mr-[28px]">
                  <img className="" src={require("../assets/images/tick1.png")} alt="tick1" />
                </div>
                <div>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
              <div className="flex mb-[28px]">
                <div className="mr-[28px]">
                  <img className="" src={require("../assets/images/tick1.png")} alt="tick1" />
                </div>
                <div>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
              <div className="flex mb-[28px]">
                <div className="mr-[28px]">
                  <img className="" src={require("../assets/images/tick1.png")} alt="tick1" />
                </div>
                <div>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
              <div className="flex mb-[28px]">
                <div className="mr-[28px]">
                  <img className="" src={require("../assets/images/tick1.png")} alt="tick1" />
                </div>
                <div>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block px-10 md:pl-[274px] pr-[109px] md:flex mb-[76px]">
          <div className="pt-[50px]">
            <div className="text-[#1F2A36] text-3xl md:text-[36px] leading-[56px] font-semibold mb-[12px]">Skill Tallent</div>
            <div className="text-lg md:text-[18px] text-[#46505C] leading-[28px] w-[460px] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</div>
            <div className="text-[16px] flex">
              <div className="mr-[105px]">
                <div className="">
                  <div className="flex text-[#46505C] text-[16px]  mb-[28px]">
                    <div className="mr-[28px]">
                      <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                    </div>
                    <div className="">
                      <span>Java</span>
                    </div>
                  </div>
                  <div className="flex text-[#46505C] text-[16px] mb-[28px]">
                    <div className="mr-[28px]">
                      <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                    </div>
                    <div className="">
                      <span>Kotlin</span>
                    </div>
                  </div>
                </div>
                <div className="flex text-[#46505C] text-[16px] mb-[28px]">
                  <div className="mr-[28px]">
                    <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                  </div>
                  <div className="">
                    <span>PHP</span>
                  </div>
                </div>
                <div className="flex text-[#46505C] text-[16px]">
                  <div className="mr-[28px]">
                    <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                  </div>
                  <div className="">
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="flex text-[#46505C] text-[16px]  mb-[28px]">
                    <div className="mr-[28px]">
                      <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                    </div>
                    <div className="">
                      <span>Golang</span>
                    </div>
                  </div>
                  <div className="flex text-[#46505C] text-[16px] mb-[28px]">
                    <div className="mr-[28px]">
                      <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                    </div>
                    <div className="">
                      <span>C++</span>
                    </div>
                  </div>
                </div>
                <div className="flex text-[#46505C] text-[16px] mb-[28px]">
                  <div className="mr-[28px]">
                    <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                  </div>
                  <div className="">
                    <span>Ruby</span>
                  </div>
                </div>
                <div className="flex text-[#46505C] text-[16px]">
                  <div className="mr-[28px]">
                    <img className="" src={require("../assets/images/tick2.png")} alt="tick2" />
                  </div>
                  <div className="">
                    <span>10+ Bahasa lainnya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img className="" src={require("../assets/images/pic3.png")} alt="pic3" />
            </div>
          </div>
        </div>
        <div className="bg-[#E5E5E5] pb-[103px]">
          <div className="text-center pt-[80px] pb-[52px]">
            <span className="text-[#1F2A36] text-3xl md:text-[36px] leading-[56px] font-semibold">Their opinion about peworld</span>
          </div>
          <div className="block md:flex justify-center">
            <div className="mr-[28px]">
              <div className=" bg-white mb-3 ml-5 shadow-lg py-[36px] md:px-[76px] h-full">
                <div className="flex justify-center items-center">
                  <img src={require("../assets/images/Ellipse.png")} alt="ellipse" />
                  <img className="absolute" src={require("../assets/images/testi1.png")} alt="testi1" />
                </div>
                <div className="text-center">
                  <div className=" text-[#1F2A36] text-[30px] leading-[56px]">Harry Styles</div>
                  <div className="text-[#9EA0A5] text-[18px] leading-[28px]">Web Developer</div>
                </div>
                <div className="w-[200px] text-center pt-[11px]">
                  <span className="text-[#46505C] text-[18px] leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</span>
                </div>
              </div>
            </div>
            <div className="mr-[28px]">
              <div className="bg-white mb-3 ml-5 shadow-lg py-[36px] px-[76px] h-full">
                <div className="flex justify-center items-center">
                  <img src={require("../assets/images/Ellipse.png")} alt="ellipse" />
                  <img className="absolute" src={require("../assets/images/testi2.png")} alt="testi2" />
                </div>
                <div className="text-center">
                  <div className=" text-[#1F2A36] text-[30px] leading-[56px]">Niall Horan</div>
                  <div className="text-[#9EA0A5] text-[18px] leading-[28px]">Web Developer</div>
                </div>
                <div className="w-[200px] text-center pt-[11px]">
                  <span className="text-[#46505C] text-[18px] leading-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                </div>
              </div>
            </div>
            <div className="mr-[28px]">
              <div className="bg-white ml-5 shadow-lg py-[36px] px-[76px] h-full">
                <div className="flex justify-center items-center">
                  <img src={require("../assets/images/Ellipse.png")} alt="ellipse" />
                  <img className="absolute" src={require("../assets/images/test3.png")} alt="testi3" />
                </div>
                <div className="text-center">
                  <div className=" text-[#1F2A36] text-[30px] leading-[56px]">Louis Tomlinson</div>
                  <div className="text-[#9EA0A5] text-[18px] leading-[28px]">Web Developer</div>
                </div>
                <div className="w-[200px] text-center pt-[11px]">
                  <span className="text-[#46505C] text-[18px] leading-[28px]">Lorem ipsum dolor sit amet, consectetur </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="px-[150px] py-[129px]">
            <div className="border-1 bg-[#5E50A1] rounded-tl-[50px] rounded-br-[50px] md:w-full">
              <div className="py-[58px] px-[70px] md:flex">
                <div className="flex-1">
                  <div className="text-lg md:text-[36px] text-white w-[230px]">Lorem ipsum dolor sit amet</div>
                </div>
                <div className="flex items-center">
                  <button className="border-1 bg-white py-[10px] px-[15px] rounded text-[#796EAF] text-[16px] font-bold">Mulai Dari Sekarang</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
