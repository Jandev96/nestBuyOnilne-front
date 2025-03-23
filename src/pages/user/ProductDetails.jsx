import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const { id } = useParams();
    console.log("Product ID from URL:", id);

    const [productdetails, isLoading, error] = useFetch(`/product/products/${id}`);
    console.log("Fetched Product Details:", productdetails);

    // Ensure `displaySingleProduct` exists before accessing its properties
    const product = productdetails?.displaySingleProduct;

    if (isLoading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error.message}</h2>;
    if (!product) return <h2>Product not found</h2>;

    return (
        <>
            {/* <h1>Product Details</h1>
            <h2>{product.name}</h2>
            {product.images && product.images.length > 0 ? (
                <img src={product.images[0]} alt={product.name} width="300" />
            ) : (
                <p>No Image Available</p>
            )}
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category?.[0] || "No category"}</p>
            <p>Stock: {product.stock}</p> */}




            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
  {product.images && product.images.length > 0 ? (
    <img
      src={product.images[0]}
      className="max-w-sm rounded-lg shadow-2xl" />
    ) : (
        <p>No Image Available</p>
    )}
    <div>
      <h1 className="text-5xl font-bold">{product.name}</h1>
      <p className="py-6">
      {product.description}
      </p>
      <p>Price: ${product.price}</p>
      <button className="btn btn-primary">AddtoCart</button>
    </div>
  </div>
</div>
        </>
    );
}

export default ProductDetails;
