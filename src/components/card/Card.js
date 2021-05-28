import React from 'react'
import cardimg from '../../assets/card1.jpg'
import { Link } from 'react-router-dom'
function Card(props) {
    const product = props.product
    return (
        <div className="col-md-4 mb-4">
            <div class="card">
                <img src={cardimg} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <Link to={`/product/${product.slug}`} class="btn btn-primary">Add to Bucket</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
