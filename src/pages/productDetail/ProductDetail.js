import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data'

function ProductDetail() {
    let { slug } = useParams();
    //console.log(slug)
    const p = products.find((prod) => prod.slug === slug)
    return (
        <div>
            <h1>{p.title}</h1>
            <p>{p.description}</p>
            <p>Price: <strong>PKR. {p.price}</strong></p>
            <p>Stock: {p.stock}</p>
        </div>
    )
}
export default ProductDetail