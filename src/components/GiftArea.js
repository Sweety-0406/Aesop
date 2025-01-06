import { FaArrowRightLong } from "react-icons/fa6"
import CarouselProducts from "./CarouselProducts"

const GiftArea = ()=>{
    return(
        <div className="mt-28 ">
            <div className="grid grid-cols-5  ">
                <div className="col-span-5 lg:col-span-3">
                    <img 
                        src="/gift.jpg" 
                        alt="gift"
                        className="w-full pr-16 md:24:pr-7 aspect-video object-cover"
                    />
                </div>
                <div className="col-span-5 lg:col-span-2 pl-24 pr-20">
                    <div style={{color:"#333"}} className='mt-10 lg:mt-0 col-span-2 '>
                        <div className="text-sm font-semibold ">Festive giving</div>
                        <h1 className="text-3xl  my-2">A complimentary sleeve for your gifts</h1>
                        <p className="mb-4 pr-4 mt-8">Inspired by the verve of the season, a specially designed gift sleeve will swaddle your purchases when you select the ‘gift packaging’ option at checkout. Exclusions apply.</p>
                        <button className="flex font-semibold justify-between sm:w-80  py-4 items-center px-4  border  hover:bg-zinc-700 hover:text-white">
                            Explore gifts
                            <span className="ml-2"><FaArrowRightLong /></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-24 px-8">
                <div>
                    <img 
                        src="/fragrence.jpg" 
                        alt="gift"
                        className="w-full cursor-pointer aspect-video object-cover"
                    />
                    <div>
                        <h2 className="text-lg my-4 lg:my-7 hover:underline hover:underline-offset-4">Six aromatic encounters</h2>
                        <p className="text-sm">Fragrance Anthology Volume I invites curious noses to explore and experience our range of unorthodox aromas, from the fresh to the floral, the woody and the opulent.</p>
                    </div>
                </div>
                <div>
                    <video
                        src="/fragrence.mp4"
                        autoPlay
                        muted
                        loop
                        className="w-full cursor-pointer aspect-video  object-cover"
                    />
                    <div>
                        <h2 className="text-lg my-4 lg:my-7 hover:underline hover:underline-offset-4">Home gifts</h2>
                        <p className="text-sm">From hand care to home fragrances, explore a curation of products that are ideal for hospitable hosts, the house-proud or the recently moved in.</p>
                    </div>
                </div>
            </div>
            <div>
                <CarouselProducts />
            </div>
        </div>
    )
}

export default GiftArea