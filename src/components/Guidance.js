import { GoArrowUpRight } from "react-icons/go";

const Guidance = ()=>{
    return(
        <div>
            <div className="grid grid-cols-5  mt-40  ">
                <div className="col-span-5 lg:col-span-3">
                    <img 
                        src="/guidance.jpg" 
                        alt="gift"
                        className="w-full pr-16 md:pr-24 aspect-video object-cover"
                    />
                </div>
                <div className="col-span-5 lg:col-span-2 pl-24 lg:pr-20">
                    <div style={{color:"#333"}} className='mt-20 lg:mt-0 col-span-2 '>
                        <h1 className="text-3xl  my-2">Virtual guidance from home's comfort</h1>
                        <p className="mb-4 pr-4 mt-8">For advice on our range of formulations, we welcome you to book a complimentary live consultation. Following your appointment, you will receive a bespoke product sample when you place an order. </p>
                        <button className="flex font-semibold justify-between sm:w-80 py-4 items-center px-4  border  hover:bg-zinc-700 hover:text-white">
                            Discover live consultations
                            <span className="ml-2"><GoArrowUpRight size={20} /></span>
                        </button>
                    </div>
                </div>
            </div>   
            <div className="py-40 items-center text-center">
                <h1 className="text-3xl px-[25%] font-serif text-[#333]">‘The manner of giving is worth more than the gift.’</h1>
                <p>Pierre Corneille</p>
            </div>         
        </div>
    )
}


export default Guidance