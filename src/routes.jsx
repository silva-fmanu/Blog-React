import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import DetalhesPost from './pages/DetalhesPost';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './pages/Posts';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/Blog-React" element={<Posts/>}/>
                <Route path="/Blog-React/Postagem/:id" element={<DetalhesPost/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default RoutesApp;