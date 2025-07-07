import './App.css'

import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';

function App() {
  // This is the main entry point of the application
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App
