import React from "react";
export default class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return(
            <div className="listItem" key={this.props.productID}>
                <div className="listItem-content">
                    <img className="listItem-img" src={this.props.productImage}></img>
                    <span>{this.props.productName}</span>
                    <span className="price-txt">Price: ${this.props.productPrice}</span>
                    <div className="buyGroup">
                        <button className="btn-addProduct" onClick={this.props.btnAddToCart.bind(this,this.props.productID)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}