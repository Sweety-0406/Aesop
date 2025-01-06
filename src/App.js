import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import TravelArea from "./components/TravelArea";
import GiftArea from "./components/GiftArea";
import GiftKitArea from "./components/GiftKitArea";
import Gesture from "./components/Gesture";
import Corporate from "./components/Corporate";
import Store from "./components/Store";
import Guidance from "./components/Guidance";
import Footer from "./components/Footer";


function App() {
  return (
    <div style={{backgroundColor:"#fffef0"}} className="min-h-screen ">
      <div className="text-white py-2 px-1  justify-center text-center bg-neutral-800">
        Enjoy complimentary shipping on orders over $400. Click and Collect is now available in Hong Kong. <span className="ml-8">+</span> 
      </div>
      <Navbar />
      <Slideshow />
      <GiftArea />
      <TravelArea />
      <GiftKitArea />
      <Gesture />
      <Corporate />
      <Store />
      <Guidance />
      <Footer />
    </div>
  );
}

export default App;
