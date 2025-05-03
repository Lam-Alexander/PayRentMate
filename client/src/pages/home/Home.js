import './Home.css';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/Home/hero/HeroSection';
import PricingSection from '../../components/Home/price/PriceSection';

const Home = () => {
    return (
        <Layout>
            <main>
                <HeroSection/>
                {/* <PricingSection/> */}
                {/* <div className='block3'>Content 3</div> */}
            </main>
        </Layout>
    )
};
export default Home;