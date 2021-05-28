import React, { useState } from 'react'
import Card from '../../components/card/Card'
import Slider from '../../components/slider/Slider'

function Home(props) {

    const [products, setProducts] = useState(props.products)

    return (
        <div>
            <Slider />
            <div className="home-wrapper" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                <div className="row">
                    {products.map((p, i) => <Card key={i} product={p} />)}
                </div>
            </div>
        </div>
    )
}


export default Home
