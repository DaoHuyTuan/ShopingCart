import React from "react";
import { connect } from "react-redux"
class Product extends React.Component {
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
            <div className="listItem" key={this.id} >
                <div className="listItem-content" >
                        <div className="item_area" onClick={ e => this.props.openDetail.bind(this,e,this.id)}>
                            <img className="listItem-img" src={this.image}></img>
                            <span>{this.name}</span>
                            <span className="price-txt">Price: ${this.price}</span>
                        </div>
                </div>
                <div className="buyGroup">
                    {button}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        detailPageID:state.detailPageID
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        openDetail: (e,id) => {
            dispatch
                ({type:"VIEW_DETAIL",
                    detailPageID:id,
                    events:e
                })
    }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);