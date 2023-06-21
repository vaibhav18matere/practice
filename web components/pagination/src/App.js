import './App.css';
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const apiUrl = "https://dummyjson.com/products?limit=100";

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getProducts = async () => {
    const res = await Axios.get(apiUrl);
    if (res && res.data.products) {
      setProducts(res.data.products);
      // console.log(res.data.products);
    }
  };

  // console.log(products);

  useEffect(() => {
    getProducts();
  }, []);


  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page)
      setPage(selectedPage)
  }

  return (
    <div className="App">
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10
          ).map((prod) => {
            return (
              <div className="products__single" key={prod.id}>
                <span>{prod.id}</span>
                <div>{prod.title}</div>
                <img src={prod.thumbnail} alt={prod.title} />
              </div>
            );
          })}
        </div>
      )}
      {
        products.length > 0 && (
          <div className='pagination'>
            <span className={page <= 1 ? "pagination__disable" : ""} onClick={() => selectPageHandler(page - 1)} >previous</span>
            {[...Array(products.length / 10)].map((_, index) => {
              return <span className={page === index + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(index + 1)} key={index} > {index + 1} </span>
            })}
            <span className={page < products.length / 10 ? "" : "pagination__disable"} onClick={() => selectPageHandler(page + 1)} >next</span>
          </div>
        )
      }
    </div>
  );
}

export default App; 
