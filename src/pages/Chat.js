import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Chat = () => {
    return (
        <div>
            <Navbar />
            <div className="h-screen pt-32 md:px-20 px-5 md:flex md:flex-row flex flex-col gap-5 pb-10 bg-[#E5E5E5]">
                <div className="bg-white rounded md:basis-[30%]">
                    <h1 className="text-lg px-4 py-5 font-bold border-b">Chat</h1>
                    <div className="flex px-4 py-5 flex items-center gap-2">
                        <div>
                            <img className="rounded-full" src={require('../assets/images/chat/profile-picture.png')} alt="profile" />
                        </div>
                        <div className="">
                            <h2 className="font-bold">Jonas adam</h2>
                            <p className="text-sm text-gray-400">Permisi kak, mau tanya...</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded md:basis-[70%] relative h-screen md:h-full">
                    <div className="px-4 py-3 flex items-center gap-3 border-b">
                        <div>
                            <img className="rounded-full" src={require('../assets/images/chat/profile-picture.png')} alt="profile" />
                        </div>
                        <h2 className="font-bold">Jonas adam</h2>
                    </div>
                    <div className="absolute bottom-0 flex py-6 px-4 gap-3 w-full">
                        <div className="grow">
                            <input className="border rounded-full px-5 py-2 w-full" type="text" name="chat" placeholder="type message..." />
                        </div>
                        <div>
                            <button className="bg-[#5E50A1] rounded-full w-10 h-10 flex justify-center items-center"><img src={require('../assets/images/chat/send.png')} alt="send icon" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Chat