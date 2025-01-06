import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa6";

const Navbar = ()=>{
    return(
        <div  className="hidden sm:block bg-[#fffef0] px-[3%] py-7 text-neutral-700">
            <div className="flex justify-between00 font-semibold">
                <div className="xl:flex hidden  gap-4">
                    <div className="cursor-pointer">New & Notable</div>
                    <div  className="cursor-pointer">Gifts</div>
                    <div  className="cursor-pointer">Skin Care</div>
                    <div  className="cursor-pointer">Hand & Body</div>
                    <div  className="cursor-pointer">Home</div>
                    <div  className="cursor-pointer">Hair</div>
                    <div  className="cursor-pointer">Fragrance</div>
                    <div  className="cursor-pointer">Kits & Travel</div>
                    <div  className="cursor-pointer">Read</div>
                    <div  className="cursor-pointer">Stores</div>
                    <div  className="cursor-pointer">Facial Appointments</div>
                    <div  className="mt-1 cursor-pointer">
                        <IoSearch className="size-5"/>
                    </div>
                </div>
                <div className=" hidden sm:flex xl:hidden gap-4">
                    <div  className="cursor-pointer">Shop</div>
                    <div  className="cursor-pointer">Read</div>
                    <div  className="cursor-pointer">Stores</div>
                    <div  className="mt-1 cursor-pointer">
                        <IoSearch className="size-5"/>
                    </div>
                </div>
                <div className=" hidden sm:flex gap-4">
                    <div className="cursor-pointer">Login</div>
                    <div className="cursor-pointer">Cabinet</div>
                    <div className="cursor-pointer">Cart</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar