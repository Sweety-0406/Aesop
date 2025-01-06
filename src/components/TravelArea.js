const TravelArea = ()=>{
    return(
        <div className="mt-28 min-h-screen">
            <div className="grid lg:grid-cols-2 gap-4 mt-24 px-8">
                <div>
                    <img 
                        src="/travel.jpg" 
                        alt="gift"
                        className="w-full cursor-pointer aspect-video object-cover"
                    />
                    <div>
                        <h2 className="text-lg my-4 lg:my-7 hover:underline hover:underline-offset-4">For their travel bag</h2>
                        <p className="text-sm">Explore a range of travel-size formulations for seasoned excursionists, including preselected kits, sun care and in-flight essentials.</p>
                    </div>
                </div>
                <div>
                    <video
                        src="/travel.mp4"
                        autoPlay
                        muted
                        loop
                        className="w-full cursor-pointer aspect-video  object-cover"
                    />
                    <div>
                        <h2 className="text-lg my-4 lg:my-7 hover:underline hover:underline-offset-4">Noteworthy gifts</h2>
                        <p className="text-sm">From time-honoured body care to standout skin care—explore a range of formulations that remain dependably crowd-pleasing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelArea