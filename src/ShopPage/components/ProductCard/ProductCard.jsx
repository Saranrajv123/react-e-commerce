import React, {Fragment} from "react";
import "./ProductCard.scss"

const ProductCard = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div className="collection-item">
                <div className="image" style={{backgroundImage: `url(${props.imageUrl})`}}/>
                <div className="collection-footer">
                    <span className="name">{props.name}</span>
                    <span className="price">${props.price}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCard