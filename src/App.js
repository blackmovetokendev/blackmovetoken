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
import pink from './assets/img/pinksale.png'
import Fab from '@mui/material/Fab';
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'

const bg = {
  background:`url(${bgImage})`
}

function App() {
  return (
    <div className="w-full h-full md:bg-cover bg-auto" style={bg}>
      <Fab size="small" className='fixed bottom-5 right-5'>
       <a href='https://twitter.com/biackmove1?s=21&t=OOMp86bwwB2FvsgIrU-cfA'>
        <AiOutlineTwitter className='text-2xl'/>
       </a>
      </Fab>
      <Fab size="small" className='fixed bottom-20 right-5'>
       <a href='https://t.me/BlackMove'>
        <FaTelegramPlane className='text-2xl'/>
       </a>
      </Fab>
      <Navbar/>
      <Banner/>
      <About/>
      <Options/>
        <Tokenomic/>
        <Roadmap/>
        <section className='w-full lg:flex lg:justify-around items-center'>
            <img src={cmc} alt='' className='w-64 m-auto mt-3'/>
            <img src={binance} alt='' className='w-64 m-auto mt-3'/>
            <img src={pnck} alt='' className='w-64 m-auto mt-3'/>
            <img src={pink} alt='' className='w-24 m-auto mt-3 h-24'/>
        </section>
            <a href='https://github.com/ContractChecker/audits/blob/main/BlackMove_Token_0x3D8198565e857B190A61B478755B969F1805227c_Smart_Contract_Security_Audit_By_ContractChecker.pdf' className='font-extrabold w-1/4 block m-auto'>
              <h1 className='uppercase cursor-pointer text-3xl font-black text-center mt-5'>audit</h1>
            </a>
        <Footer/>
    </div>
  );
}

export default App;
