import MainPage from './Main';
import Footer from './include/Footer';
import Header from './include/Header';
import ProductView from './detailView';
import UploadPage from './upload';
import Promotion from './sub03_pro';
import './App.css';
import { Route, Routes } from "react-router-dom";
import IntroCompany from './sub06_intro';
import BestSeller from './sub02_best';

function App() {
  return (
    <div className="App" id="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/products/:id" element={<ProductView />}/>
        <Route path="/upload" element={<UploadPage />}/>
        <Route path="/bestseller" element={<BestSeller />}/>
        <Route path="/promotion" element={<Promotion/>}/>
        <Route path="/introduce" element={<IntroCompany/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;