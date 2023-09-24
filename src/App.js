import { useState } from 'react';
import './App.css';
import UserContext from './UserContext';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Intro from './components/Intro/Intro';
import MessengerInput from './components/MessengerInput/MessengerInput';
import PrintBtn from './components/PrintBtn/PrintBtn';
import SkillsRibbon from './components/SkillsRibbon/SkillsRibbon';
import WhatsappQR from './components/QRCode/QRCode';
import ZoomBtnSet from './components/ZoomBtnSet/ZoomBtnSet';
import ShareBtn from './components/ShareBtn/ShareBtn';
import QrCodesRibbon from './components/QrCodesRibbon/QrCodesRibbon';
import DownloadBtn from './components/DownloadBtn/DownloadBtn';

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
          <CardsContainer />
          {/* <WhatsappQR /> */}
          <QrCodesRibbon />
        </div>
        <PrintBtn />
        <DownloadBtn />
        <ZoomBtnSet />
        <ShareBtn />
        <div className="spacer"></div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
