import * as React from 'react';


    const ProductList = () => {
        const products = ["BK1", "BK2", "BK3", "BK4", "BK4"];
        const values = [1234,1234,1234,1234,1234]
        // Depois fazer
        fetch('https://api.github.com/users/manishmshiva', {
            method: "GET",
            headers: {"Content-type": "application/json;charset=UTF-8"}
          })
        return (
          <ul>
            { products.map( (product) => <li>{ product }</li>) }
            { values.map( (value) => <li>{ value }</li>) }
          </ul>
        );
      }
      export default ProductList;