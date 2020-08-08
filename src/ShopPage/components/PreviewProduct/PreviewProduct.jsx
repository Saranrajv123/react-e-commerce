import React, {Fragment} from "react";
import "./PreviewProduct.scss"
import ProductCard from "../ProductCard/ProductCard";

const PreviewProduct = (props) => {
    console.log(props, "propssss")
    const renderItems = () => {
        return props.items.filter((data, index) => index < 4).map((item) => {
            return (
                <Fragment>
                    <ProductCard
                        key={item.id}
                        item={item}
                    />
                </Fragment>
            )
        })
    }

    return (
        <Fragment>
            <div className="collection-preview">
                <h1 className="title">{props.title}</h1>
                <div className="preview">
                    {renderItems()}
                </div>
            </div>
        </Fragment>

    )
}

export default PreviewProduct