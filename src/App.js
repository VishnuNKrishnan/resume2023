import './App.css';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Intro from './components/Intro/Intro';
import MessengerInput from './components/MessengerInput/MessengerInput';
import SkillsRibbon from './components/SkillsRibbon/SkillsRibbon';

function App() {
  return (
    <div className="app">
      <Intro />
      <SkillsRibbon />
      <MessengerInput />
      <CardsContainer />
      <MessengerInput />
    </div>
  );
}

export default App;
