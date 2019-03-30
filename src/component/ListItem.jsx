import React from "react";
import Product from "./product";
import { connect } from "react-redux";
import * as actionCreator from "./store/action/action"
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.query = `query products {
            products {
              id
              name
              description
              rating
              price
              images {
                url
                alt
              }
            }
          }`;
    }

    componentDidMount() {
        this.props.onfetchData('https://graph-api-shopingcart.herokuapp.com/',this.query)

    }
    render() {

        const arData = this.props.products;
        const arrayCart = this.props.productQuality
        let thisQuality;
        const onCheckQuality = (id,quality) => {
            this.props.onCheckQuality(id,quality)
        }
        return (
            <div>
                <div className="listProduct" >
           
                    {Object.keys(arData).map(function (key, index) { 
                        return (
                            <Product
                                type="productlist"
                                key={arData[index].id}
                                productID={arData[index].id}
                                productName={arData[index].name}
                                productImage={arData[index].images[0].url}
                                productPrice={arData[index].price}
                                btnAddToCart={(id,quality) => onCheckQuality(id,quality)}
                                producQuality={thisQuality}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return {
        products: state.productRD.products,
        productQuality: state.cartRD.cartList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onfetchData: (url,query) => dispatch(actionCreator.fetchData(url,query)),
        onCheckQuality: (idProduct,quality) => dispatch(actionCreator.checkQuality(idProduct,quality))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListItem);