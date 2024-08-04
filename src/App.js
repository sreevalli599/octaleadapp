import './App.css';
import Header from './Header.jsx';
import Header2 from './Header2.jsx';
import capitaLead from './capitalleadlogo.jpeg';
import './Header.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header/>
       <Header2/>
       <div className="logo-container">
        <img className="companyImage" src={capitaLead} alt="logo" />
      </div>
      </header>
    </div>
  );
}

export default App;
