import './App.css';
import ChatWidget from './components/ChatWidget/ChatWidget';

function App({ children }) {
  return (
    <div className="App">
      {children}
      <ChatWidget />
    </div>
  );
}

export default App;
