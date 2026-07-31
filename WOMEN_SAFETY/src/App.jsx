import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import LoginUI from './components/LoginUI';
import LiquidEther from './components/LiquidEther'


function App() {
  return (

    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b ">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <LiquidEther
          autoDemo={false}
          autoSpeed={0.2}
          autoIntensity={1.0}
          isViscous={false}
          BFECC={false}
          resolution={0.25}
          iterationsViscous={4}
          iterationsPoisson={4}
          colors={['#f0bd6a', '#f8d9a6', '#ffffff']}
          style={{ width: '100%', height: '100%' }}
          className="h-full w-full"
        /> */}
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="about" element={<About />} />
            <Route path="loginUI" element={<LoginUI />} />
          </Route>
        </Routes>
      </Router>
    </section>

  );
}

export default App;
