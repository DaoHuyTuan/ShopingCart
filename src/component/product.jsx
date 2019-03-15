import React from "react";
export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.id = this.props.productID;
        this.name = this.props.productName
        this.image = this.props.productImage
        this.price = this.props.productPrice
    }
    render() {
        let type = this.props.type;
        let button;
        if(type == "cart") {
            button = null;
        }
        if(type == "productlist") {
            button = (
                <button className="btn-addProduct" onClick={this.props.btnAddToCart.bind(this,
                    this.id,
                    this.name,
                    this.image,
                    this.price,
                    )}>Add To Cart
                </button>
            );
        }
        
        return(
            <div className="listItem" key={this.id}>
                <div className="listItem-content">
                    <img className="listItem-img" src={this.image}></img>
                    <span>{this.name}</span>
                    <span className="price-txt">Price: ${this.price}</span>
                    <div className="buyGroup">
                        {button}
                    </div>
                </div>
            </div>
        )
    }
}