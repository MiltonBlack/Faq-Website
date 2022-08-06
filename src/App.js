import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import PricePage from './routes/PricePage';
import FaqPage from './routes/FaqPage';
import ContactPage from './routes/ContactPage';

function App() {
  return (
    <>   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pricing' element={<PricePage/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
    </>
  );
}

export default App;
