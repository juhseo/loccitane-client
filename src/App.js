import MainPage from './Main';
import Footer from './include/Footer';
import Header from './include/Header';
import ProductView from './detailView';
import UploadPage from './upload';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" id="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/products/:id" element={<ProductView />}/>
        <Route path="/upload" element={<UploadPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;