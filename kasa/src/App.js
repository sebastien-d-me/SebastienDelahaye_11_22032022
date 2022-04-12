import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/layouts/Layout";
import Accueil from "./pages/Accueil/Accueil";
import Fiche from './pages/Fiche-logement/Fiche';
import APropos from "./pages/A-propos/APropos";
import Erreur404 from "./pages/404/404";

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Accueil />}/>
                        <Route path="/logement/:id" element={<Fiche />}/>
                        <Route path="/a-propos" element={<APropos />}/>
                        <Route path="*" element={<Erreur404 />}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
