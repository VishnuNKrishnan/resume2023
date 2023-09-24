import { useState } from 'react';
import './App.css';
import UserContext from './UserContext';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Intro from './components/Intro/Intro';
import MessengerInput from './components/MessengerInput/MessengerInput';
import PrintBtn from './components/PrintBtn/PrintBtn';
import SkillsRibbon from './components/SkillsRibbon/SkillsRibbon';
import WhatsappQR from './components/WhatsappQR/WhatsappQR';
import ZoomBtnSet from './components/ZoomBtnSet/ZoomBtnSet';

function App() {

  const [zoom, setZoom] = useState(100)

  const doZoom = type => {
    const maxZoom = 150
    const minZoom = 100

    if (type == 'in' && zoom < maxZoom) {
      setZoom(zoom + 10)
    } else if (type == 'out' && zoom > minZoom) {
      setZoom(zoom - 10)
    } else if (type == 'default') {
      setZoom(100)
    }
  }

  const contextValues = {
    zoom,
    setZoom,
    doZoom
  }

  return (
    <UserContext.Provider value={contextValues}>
      <div className="app">
        <div className="zoomable" style={{ "zoom": `${zoom}%` }}>
          <Intro />
          <SkillsRibbon />
          <MessengerInput />
          <CardsContainer />
          <MessengerInput />
          <WhatsappQR />
        </div>
        <PrintBtn />
        <ZoomBtnSet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
