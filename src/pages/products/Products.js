import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/card/Card'
import { products } from '../../data'
function Products() {
    const { category } = useParams()

    const filteredProducts = products.filter((product) => product.category === category)
    
    return (
        <div className="row">
            {filteredProducts.map((p, i) => <Card key={i} product={p} />)}
        </div>
    )
}

export default Products;