import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import "./components/DetalhesPost"
import DetalhesPost from './components/DetalhesPost';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Posts/>}/>
                <Route path="/Postagem/:id" element={<DetalhesPost/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;