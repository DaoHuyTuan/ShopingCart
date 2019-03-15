import React from "react";
import { connect } from "react-redux";
import Product from "./product";
class Cart extends React.Component {
    render() {
        const arData = this.props.arrayCart;
        let datas = Object.keys(arData).map(function (key, index) {
            console.log(arData[index])
            return (
                <Product
                    type="cart"
                    key={arData[index].id}
                    productID={arData[index].id}
                    productName={arData[index].name}
                    productImage={arData[index].image}
                    productPrice={arData[index].price}
                />
            )
        })
        return(
        <div className="listProduct" >
            {datas}
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        arrayCart: state.arrayCart,
        numCart:state.numCart
    }
}
export default connect(mapStateToProps)(Cart)