import React from 'react'
import product_card from "../data/product_data";
import '../product.css';
import { Col, Row } from 'react-bootstrap';
import "animate.css"
import TrackVisibility from "react-on-screen"
const Product = () => {
    console.log(product_card);
    
    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>     
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    );
    return (
     <>
     <TrackVisibility>
     {({ isVisible }) =>
        <h2 className={isVisible?"animate__animated animate__heartBeat my-5":"my-5"} style={{textAlign:"center"}}>The Sustainable kit</h2>}
        </TrackVisibility>
        <TrackVisibility>
        {({ isVisible }) =>
        <div className={isVisible?"animate__animated animate__flipInX main_content":"main_content"}id='#kit'>
            {listItems}
        </div>}
        </TrackVisibility>
     </>
    )
}
export default Product;
