import * as React from "react";

const ProductList = () => {
	interface produto {
		nome: string;
		valor: number;
		valorVista: number;
	}
	const s = ["BK1", "BK2", "BK3", "BK4", "BK4"];
	const values = [1234, 1234, 1234, 1234, 1234];
	// Depois fazer
	const products = fetch(`https://urldaAPI.com`)
		.then((response) => response.json())
		.then((data) => console.log(data.name));
	return (
		<ul>
			{products.map((product) => (
				<li>{product}</li>
			))}
			{values.map((value) => (
				<li>{value}</li>
			))}
		</ul>
	);
};
export default ProductList;
