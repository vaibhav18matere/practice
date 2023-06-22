import { useState, useEffect } from "react";
import Axios from 'axios';
const ServerSidePagination = () => {


  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const apiUrl = `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`;

  const getProducts = async () => {
    const res = await Axios.get(apiUrl);
    if (res && res.data.products) {
      setProducts(res.data.products);
      setTotalPages(res.data.total / 10)
    }
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page)
      setPage(selectedPage)
  }

  return <>
    <a href="client"><button>Client Side Pagination</button></a>
    <a href="server"><button>Server Side Pagination</button></a>
    {products.length > 0 && (
      <div className="products">
        {products.map((prod) => {
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
          {[...Array(totalPages)].map((_, index) => {
            return <span className={page === index + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(index + 1)} key={index} > {index + 1} </span>
          })}
          <span className={page < totalPages ? "" : "pagination__disable"} onClick={() => selectPageHandler(page + 1)} >next</span>
        </div>
      )
    }
  </>;
};

export default ServerSidePagination;
