import Header from "./components/header";
import WelcomeWorld from "./components/welcomeWorld";
import {Route, Switch, Link, Routes} from "react-router-dom";
import Create from "./components/create";
import Catalog from "./components/catalog";
import Login from "./components/login";
import Register from "./components/register";


function App() {
    return (
        <div id="box">
            <Header/>
            <main id="main-content">
                <Routes>
                    <Route path='/' element={< WelcomeWorld />} />
                    <Route path='/games' element={< Catalog />} />
                    <Route path='/create' element={< Create />} />
                    {/*<Route path='/logout' element={< Log />} />*/}
                    <Route path='/login' element={< Login />} />
                    <Route path='/register' element={< Register />} />

                </Routes>
            </main>

        </div>
    );
}

export default App;
