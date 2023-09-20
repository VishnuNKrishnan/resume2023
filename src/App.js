import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Intro from './components/Intro/Intro';
import MessengerInput from './components/MessengerInput/MessengerInput';
import PrintBtn from './components/PrintBtn/PrintBtn';
import SkillsRibbon from './components/SkillsRibbon/SkillsRibbon';
import WhatsappQR from './components/WhatsappQR/WhatsappQR';

function App() {
  return (
    <div className="app">
      <Intro />
      <SkillsRibbon />
      <MessengerInput />
      <CardsContainer />
      <MessengerInput />
      <WhatsappQR />
      <PrintBtn />
    </div>
  );
}

export default App;
