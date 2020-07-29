import React, {Fragment} from "react"
import {withRouter} from "react-router-dom"
import "./MenuItem.scss"

const MenuItem = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div className={`${props.size} menu-item`}
                 onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
                <div style={{backgroundImage: `url(${props.imageUrl})`}} className="background-image">
                    <div className="content">
                        <h1 className="title">{props.title}</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(MenuItem)