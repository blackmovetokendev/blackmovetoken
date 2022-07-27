import Navbar from './components/Navbar'
import Banner from "./components/Banner"
import About from "./components/About"
import bgImage from './assets/img/878.jpg'
import Options from "./components/Options"
import Tokenomic from "./components/Tokenomic"
import Roadmap from "./components/Roadmap"
import Footer from './components/Footer'
import binance from './assets/img/binance.png'
import cmc from './assets/img/coinmarket.png'
import pnck from './assets/img/pancakeswap.png'

const bg = {
  background:`url(${bgImage})`
}

function App() {
  return (
    <div className="w-full h-full md:bg-cover bg-auto" style={bg}>
      <Navbar/>
      <Banner/>
      <About/>
      <Options/>
        <Tokenomic/>
        <Roadmap/>
        <section className='w-full lg:flex lg:justify-around items-center'>
            <img src={cmc} alt='' className='w-64 m-auto'/>
            <img src={binance} alt='' className='w-64 m-auto'/>
            <img src={pnck} alt='' className='w-64 m-auto'/>
        </section>
        <Footer/>
    </div>
  );
}

export default App;
