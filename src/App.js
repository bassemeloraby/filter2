
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./components/Category";
import Colors from "./components/Colors";
import Price from "./components/Price";
import Navigation from "./components/Navigation";
import Recommended from "./components/Recommended";
import Products from "./components/Products";
import { useState } from "react";
import products from "./db/data"
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

   // ----------- Radio Filtering -----------
   const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(selectedCategory);
  };

 // ------------ Button Filtering -----------
 const handleClick = (event) => {
  setSelectedCategory(event.target.value);
};

function filteredData(products, selected, query) {
  let filteredProducts = products;

  // Filtering Input Items
  if (query) {
    filteredProducts = filteredItems;
  }

  // Applying selected filter
  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selected ||
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected
    );
  }

  return filteredProducts.map(
    ({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    )
  );
}

const result = filteredData(products, selectedCategory, query);

  return (
    <div className="d-flex">
    <div className='col-2 border-end m-2 border-secondary'>
    <Category handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>
    <Price handleChange={handleChange}/>
    </div>
    <div >
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
    </div>
    </div>
  );
}

export default App;
