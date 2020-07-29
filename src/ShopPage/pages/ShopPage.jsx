import React, {Fragment, useState} from "react";
import SHOP_DATA from "../ShopData";
import PreviewProduct from "../components/PreviewProduct/PreviewProduct";

const ShopPage = () => {

    const [shopData, setShopData] = useState(SHOP_DATA)

    const renderShopPage = () => {
        return shopData.map(shopPageData => {
            return (
                <PreviewProduct
                    {...shopPageData}
                />
            )
        })
    }


    return (
        <Fragment>
            <div className="shop-page">
                {renderShopPage()}
            </div>
        </Fragment>
    )
}

export default ShopPage