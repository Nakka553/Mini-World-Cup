import React from 'react';
import './App.css';
import HeaderArea from './components/HeaderArea';
import Hero from './components/Hero';
import Floating from './components/Floating'
import Teambg from './components/Teambg';
import GamePreview from './components/GamePreview';
import NFTCollectors from './components/NFTCollector';
import FansNFT from './components/FansNFT';
import PlayersNFT from './components/PlayersNFT';
import StadiumNFT from './components/StadiumNFT';
import FootballStadium from './components/FootballStadium';
import Tokenomics from './components/Tokenomics';
import WFNTokenDist from './components/WFNTokenDist';
import Fireball from './components/Fireball';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <HeaderArea/>
     <Hero/>
     <Floating/>
     <Teambg/>
     <GamePreview/>
     <NFTCollectors/>
     <FansNFT/>
     <PlayersNFT/>
     <StadiumNFT/>
     <FootballStadium/>
     <Tokenomics/>
     <WFNTokenDist/>
     <Fireball/>
     <Footer/> 
    </div>
  );
}

export default App;
