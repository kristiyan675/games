import Header from "./components/header";
import WelcomeWorld from "./components/welcomeWorld";
import Login from "./components/login";
import Register from "./components/register";
import Create from "./components/create";
import Edit from "./components/edit";
import Details from "./components/details";
import Catalog from "./components/catalog";

function App() {
  return (
      <div id="box">
        <Header/>

        <main id="main-content">
        </main>


        <WelcomeWorld/>

        <Login/>


        <Register/>


        <Create/>


        <Edit/>


        <Details/>


        <Catalog/>
      </div>
  );
}

export default App;
