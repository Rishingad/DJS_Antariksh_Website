import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Achievement from './components/Achievement/Achievement'
import Department from './components/Department/Department'
import Team from './components/Team/Team'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Achievement />
      <Department />
      <Team />
    </div>
  );
}

export default App;
