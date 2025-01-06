import { GoArrowUpRight } from "react-icons/go";

const Footer = ()=>{
    return(
        <div>
            <div className="bg-[#f7f5e7] py-20 lg:py-30 px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-3">
                <div>
                    <h1 className="font-semibold">Certified B Corp</h1>
                    <p className="text-sm text-zinc-500">We meet the highest verified standards of social and environmental performance, transparency and accountability.</p>
                </div>
                <div>
                    <h1 className="font-semibold">Leaping Bunny approved</h1>
                    <p className="text-sm text-zinc-500">Our formulations are approved as cruelty free under the Cruelty Free International Leaping Bunny programme.</p>
                </div>
                <div>
                    <h1 className="font-semibold">PETA recognition</h1>
                    <p className="text-sm text-zinc-500">We appear on PETA's internationally recognised vegan and cruelty-free lists.</p>
                </div>
            </div>
            <footer className="bg-[#252525] sm:block hidden text-white py-10 px-6">
                <div className=" mx-auto">
                    <div className="grid grid-cols-3 lg:grid-cols-5 gap-8">
                    <div className="col-span-5 lg:col-span-2 ">
                        <h3 className=" font-semibold mb-6">Subscribe to Aesop communications</h3>
                        <hr />
                        <hr />
                        <form className="mt-4">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full px-4 py-2 mb-4  text-white border bg-transparent border-gray-500 focus:outline-none focus:ring focus:ring-gray-500"
                        />
                        <label className="flex items-start space-x-2 text-sm">
                            <input
                            type="checkbox"
                            />
                            <span>
                            Subscribe to receive communications from Aesop. By subscribing,
                            you confirm that you have read and understand our privacy policy.
                            </span>
                        </label>
                        </form>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="font-semibold mb-6">Orders and support</h4>
                        <hr />
                        <hr />
                        <ul className="space-y-2 mt-4">
                        <li><a href="#" className="hover:cursor-pointer flex ">Contact us <GoArrowUpRight className="mt-1 ml-1" /> </a></li>
                        <li><a href="#" className="hover:cursor-pointer flex">FAQs <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                        <li><a href="#" className="hover:cursor-pointer flex">Shipping <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                        <li><a href="#" className="hover:cursor-pointer flex">Returns <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                        <li><a href="#" className="hover:cursor-pointer flex">Order history <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                        <li><a href="#" className="hover:cursor-pointer flex">Check gift card balance <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                        <li><a href="#" className="hover:cursor-pointer flex">Terms and conditions <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="font-semibold mb-6">Services</h4>
                        <hr />
                        <hr />
                        <ul className="space-y-2 mt-4">
                        <li><a href="#" className="hover:cursor-pointer">Live assistance</a></li>
                        <li><a href="#" className="hover:cursor-pointer">Corporate gifts</a></li>
                        <li><a href="#" className="hover:cursor-pointer">Book appointments</a></li>
                        <li><a href="#" className="hover:cursor-pointer">Click and Collect</a></li>
                        <li><a href="#" className="hover:cursor-pointer">Video consultation</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h4 className="font-semibold mb-6">Location preferences</h4>
                        <hr />
                        <hr />
                        <ul className="space-y-2 mt-4">
                        <li className="font-semibold">Shipping:</li>
                        <li><a href="#" className="underline">Hong Kong, SAR</a></li>
                        <li className="font-semibold">Language:</li>
                        <li><a href="#" className="underline">English</a></li>
                        <li><a href="#" className="cursor-pointer">繁體中文</a></li>

                        </ul>
                    </div>
                    </div>

                    <div className="mt-10 grid grid-cols-3 lg:grid-cols-5 gap-8  pt-8">

                        <div className="lg:col-span-2 ">
                            <h4 className=" font-semibold mb-6">Sustainability</h4>
                            <hr />
                            <hr />
                            <p className="text-sm mt-4">
                            All Aesop products are vegan, and we do not test our formulations on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
                            </p>
                        </div>

                        <div>
                            <h4 className=" font-semibold mb-6">About</h4>
                            <hr />
                            <hr />
                            <ul className="space-y-2 mt-4">
                            <li><a href="#" className="hover:cursor-pointer">Our story</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Foundation</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Careers</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Privacy policy</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Accessibility</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className=" font-semibold mb-6">Social media</h4>
                            <hr />
                            <hr />
                            <ul className="space-y-2 mt-4">
                            <li><a href="#" className="hover:cursor-pointer">Instagram</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Twitter</a></li>
                            <li><a href="#" className="hover:cursor-pointer">LinkedIn</a></li>
                            <li><a href="#" className="hover:cursor-pointer">WeChat</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Weibo</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </footer>


            <footer className="bg-[#252525] block sm:hidden text-white py-10 px-6">
                <div className=" mx-auto">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="col-span-2  ">
                            <h3 className=" font-semibold mb-6">Subscribe to Aesop communications</h3>
                            <hr />
                            <hr />
                            <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-2 mb-4  text-white border bg-transparent border-gray-500 focus:outline-none focus:ring focus:ring-gray-500"
                            />
                            <label className="flex items-start space-x-2 text-sm">
                                <input
                                type="checkbox"
                                />
                                <span>
                                Subscribe to receive communications from Aesop. By subscribing,
                                you confirm that you have read and understand our privacy policy.
                                </span>
                            </label>
                            </form>
                        </div>

                        <div className="">
                            <h4 className="font-semibold mb-6">Orders and support</h4>
                            <hr />
                            <hr />
                            <ul className="space-y-2 mt-4">
                            <li><a href="#" className="hover:cursor-pointer flex ">Contact us <GoArrowUpRight className="mt-1 ml-1" /> </a></li>
                            <li><a href="#" className="hover:cursor-pointer flex">FAQs <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                            <li><a href="#" className="hover:cursor-pointer flex">Shipping <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                            <li><a href="#" className="hover:cursor-pointer flex">Returns <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                            <li><a href="#" className="hover:cursor-pointer flex">Order history <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                            <li><a href="#" className="hover:cursor-pointer flex">Check gift card balance <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                            <li><a href="#" className="hover:cursor-pointer flex">Terms and conditions <GoArrowUpRight className="mt-1 ml-1" /></a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h4 className="font-semibold mb-6">Services</h4>
                            <hr />
                            <hr />
                            <ul className="space-y-2 mt-4">
                            <li><a href="#" className="hover:cursor-pointer">Live assistance</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Corporate gifts</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Book appointments</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Click and Collect</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Video consultation</a></li>
                            </ul>
                        </div>

                        <div className="">
                            <h4 className="font-semibold mb-6">Location preferences</h4>
                            <hr />
                            <hr />
                            <ul className="space-y-2 mt-4">
                            <li className="font-semibold">Shipping:</li>
                            <li><a href="#" className="underline">Hong Kong, SAR</a></li>
                            <li className="font-semibold">Language:</li>
                            <li><a href="#" className="underline">English</a></li>
                            <li><a href="#" className="cursor-pointer">繁體中文</a></li>

                            </ul>
                        </div>
                        <div className="lg:col-span-2 ">
                            <h4 className=" font-semibold mb-6">Sustainability</h4>
                            <hr />
                            <hr />
                            <p className="text-sm mt-4">
                            All Aesop products are vegan, and we do not test our formulations on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more
                            </p>
                        </div>
                        <div>
                            <h4 className=" font-semibold mb-6">About</h4>
                            <hr />
                            <hr />
                            <ul className="space-y-2 mt-4">
                            <li><a href="#" className="hover:cursor-pointer">Our story</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Foundation</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Careers</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Privacy policy</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Accessibility</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className=" font-semibold mb-6">Social media</h4>
                            <hr />
                            <hr />
                            <ul className="space-y-2 mt-4">
                            <li><a href="#" className="hover:cursor-pointer">Instagram</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Twitter</a></li>
                            <li><a href="#" className="hover:cursor-pointer">LinkedIn</a></li>
                            <li><a href="#" className="hover:cursor-pointer">WeChat</a></li>
                            <li><a href="#" className="hover:cursor-pointer">Weibo</a></li>
                            </ul>
                        </div>
                    </div>


                </div>
            </footer>

            <div className="bg-[#252525] text-white ">
                <hr />
                <hr />
                <hr />
                <hr />
                <p className="py-4 pl-4">
                © Aesop
                </p>
            </div>


        </div>
    )
}

export default Footer