
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./components/Category";
import Colors from "./components/Colors";
import Price from "./components/Price";
import Navigation from "./components/Navigation";
import Recommended from "./components/Recommended";
import Products from "./components/Products";

function App() {
  return (
    <div className="d-flex">
    <div className='col-2'>
    <Category/>
    <Colors/>
    <Price/>
    </div>
    <div >
    <Navigation/>
    <Recommended/>
    <Products/>
    </div>
    </div>
  );
}

export default App;
