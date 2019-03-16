import React from "react";
import { connect } from "react-redux";
import Product from "../product";
class SearchPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrayDataSearch:[]
        }
    }
    componentDidMount() {
        const productName = this.props.match.params.name;
        console.log(productName)
        const query = 'query AllproductsByName {products(productName:' +'"' + productName + '"'+ ') { id name description rating price images { url alt } } }';

        fetch('https://graph-api-shopingcart.herokuapp.com/', {
            credentials: 'omit',
            headers: {
                accept: '*/*',
                'accept-language': 'en-US,en;q=0.9',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                variables: {},
                query: query,
            }),
            method: 'POST',
            mode: 'cors',
        })
        .then((res) => res.json())
        .then((arrDataSearch) =>
            this.setState({
                arrayDataSearch: arrDataSearch.data.products
            }),
        )
    }
    render() {
        const arData = this.state.arrayDataSearch;
        let datas;
        datas = Object.keys(arData).map(function (key, index) {
            return (
                <Product
                    type="productlist"
                    key={arData[index].id}
                    productID={arData[index].id}
                    productName={arData[index].name}
                    productImage={arData[index].images[0].url}
                    productPrice={arData[index].price}
                    btnAddToCart={this.props.addToCart}
                />
            )

        }.bind(this))
        return (
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
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id,name,image,price) => dispatch
        ({type:"ADD_TO_CART",
                ProductID:id,
                ProductName:name,
                ProductImage:image,
                ProductPrice:price
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);