import './App.css';
import AuthDetails from './components/auth/AuthDetails';

function App() {
  return (
    <div className="App">
      <AuthDetails />
      <a href='/login'>
        <button>Log In</button>
      </a>
    </div>
  );
}

export default App;
