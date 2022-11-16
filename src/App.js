import './App.css';
import Container from './Components/Container';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>
      <div className='Card'>
        <Container />

      </div>
    </div>
  );
}

export default App;



