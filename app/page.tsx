import { Import } from "lucide-react";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import CounterComponent from "./components/CounterComponent";
import  DailyDeals  from "./components/DailyDeals";
import FeaturedBrand from "./components/FeaturedBrand";
import Feedback from "./components/Feedback";
import HealthProduct from "./components/HealthProduct";
import PopularCategories from "./components/PopularCategories";
import ProductCards from "./components/ProductCards";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import TrendingProduct from "./components/TrendingProduct";
import Footer from "./components/Footer"
import Translator from './components/Translator';
export default function Home() {
  return (
    <>
     <Translator />
      <Banner />

      <DailyDeals />
      <HealthProduct />
      <ProductCards />

      <FeaturedBrand />

      <PopularCategories />
      <TrendingProduct />
      <Blog />
      <CounterComponent />
      <Feedback />
      <SignUp />
      <Footer/>
    </>
  );
}
