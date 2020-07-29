import React, {useState, useEffect} from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./directory.scss"

const Directory = () => {
    const [section, setSection] = useState([
        {
            title: "hats",
            imageUrl: "https://rukminim1.flixcart.com/image/332/398/jx0prbk0/hat/h/c/p/free-bucket-fon-1-ny-bucket-hat-fon-57-zacharias-original-imafhk89zgenedg6.jpeg?q=50",
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: "jackets",
            imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality[79],source[/33/47/3347fe1a69a719b14eb9d3219793e260e1cc9bb9.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/main]",
            id: 2,
            linkUrl: ''

        },
        {
            title: "sneakers",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/611TWd7sDIL._UL1500_.jpg",
            id: 3,
            linkUrl: ''

        },
        {
            title: "womens",
            imageUrl: "https://cdn11.bigcommerce.com/s-ecd5c/images/stencil/1280x1280/products/555/2402/B005W-nvysd2__89883.1465241584.jpg?c=2?imbypass=on",
            id: 4,
            size: "large",
            linkUrl: ''

        },
        {
            title: "mens",
            imageUrl: "https://cdn11.bigcommerce.com/s-ecd5c/images/stencil/728x728/products/556/2361/B005-ns__42581.1465228680.jpg?c=2",
            id: 5,
            size: "large",
            linkUrl: ''

        },
        ])

    const renderMenuItem = () => {
        return section && section.map(item => {
            return (
                <MenuItem
                    id={item.id}
                    {...item}
                />
            )
        })
    }

    return (
        <React.Fragment>
            <div className="directory-menu">
                {renderMenuItem()}
            </div>
        </React.Fragment>

    )
}

export default Directory