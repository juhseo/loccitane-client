import MainPage from './Main';
import Footer from './include/Footer';
import Header from './include/Header';
import ProductView from './detailView';
import UploadPage from './upload';
import UpdatePage from './update';
import Promotion from './sub03_pro';
import './App.css';
import { Route, Routes } from "react-router-dom";
import IntroCompany from './sub06_intro';
import BestSeller from './sub02_best';
import Recommend from './sub04_recomm';
import Managermode from './manager';
import Notice from './notice';
import Write from './notice/write';

function App() {
  return (
    <div className="App" id="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/products/:id" element={<ProductView />}/>
        <Route path="/manager" element={<Managermode/>}/>
        <Route path="/upload" element={<UploadPage />}/>
        <Route path="/update" element={<UpdatePage />}/>
        <Route path="/bestseller" element={<BestSeller />}/>
        <Route path="/promotion" element={<Promotion/>}/>
        <Route path="/recommend" element={<Recommend/>}/>
        <Route path="/introduce" element={<IntroCompany/>}/>
        <Route path="/notice" element={<Notice/>}/>
        <Route path="/write" element={<Write/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;