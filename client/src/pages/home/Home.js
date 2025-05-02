import './Home.css';
import Layout from '../../components/layout/Layout';
import HeroSection from '../../components/Home/HeroSection';

const Home = () => {
    return (
        <Layout>
            <main>
                <HeroSection/>
                <div className='block2'>Content 2</div>
                <div className='block3'>Content 3</div>
            </main>
        </Layout>
    )
};
export default Home;