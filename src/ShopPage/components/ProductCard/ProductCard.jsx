import React, {Fragment} from "react";
import {connect} from "react-redux"
import * as actions from "../../../Cart/action"
import "./ProductCard.scss"
import CustomButton from "../../../CommonUtils/CustomButton/CustomButton";

const ProductCard = (props) => {
    const { imageUrl, name, price } = props.item
    return (
        <Fragment>
            <div className="collection-item">
                <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
                </div>
                <CustomButton inverted onClick={() => props.addItem(props.item) }>Add to cart</CustomButton>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: item => dispatch(actions.addCartItem(item))
    }
}
export default connect(null,mapDispatchToProps)(ProductCard)