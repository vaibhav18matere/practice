import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
     return (
          <>
               <Link to="client"><button>Client Side Pagination</button></Link>
               <Link to="server"><button>Server Side Pagination</button></Link>
          </>
     );
};

export default Home;
