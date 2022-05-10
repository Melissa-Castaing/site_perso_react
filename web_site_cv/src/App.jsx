import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import CareerPage from './page/CareerPage';
import { TypewriterProvider } from './contexts/typewriterContext';
// import Nav from '../components/Nav';
// import Header from '../components/Header';
import './App.scss';

function App() {
  return (
    <TypewriterProvider>
      <div className="App">
        {/* <Nav />
        <Header /> */}
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/career"
            element={<CareerPage />}
          />
        </Routes>
      </div>
    </TypewriterProvider>
  );
}

export default App;
