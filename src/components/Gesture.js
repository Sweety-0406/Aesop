import { FaArrowRightLong } from "react-icons/fa6"

const Gesture = ()=>{
    return (
        <div>
            <div className="grid grid-cols-5 mt-28 ">
                <div className="col-span-5 lg:col-span-2 pl-24 pb-10 pr-20">
                    <div style={{color:"#333"}} className=' col-span-2 '>
                        <div className="text-sm font-semibold ">Festive giving</div>
                        <h1 className="text-3xl  my-2">A complimentary sleeve for your gifts</h1>
                        <p className="mb-4 pr-4 mt-8">Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply.</p>
                        <button className="flex font-semibold justify-between sm:w-80 py-4 items-center px-4  border  hover:bg-zinc-700 hover:text-white">
                            Explore gifts
                            <span className="ml-2"><FaArrowRightLong /></span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 lg:col-span-3">
                    <video 
                        src="/gesture.mp4" 
                        alt="gift"
                        autoPlay
                        className="w-full pl-16 md:pl-24 aspect-video object-cover"
                    />
                </div>
            </div>
        </div>
    )
}


export default Gesture