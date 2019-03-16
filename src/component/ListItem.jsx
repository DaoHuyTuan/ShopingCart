import React from "react";
import Product from "./product";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData: '',
            arrayCart: [],
            numCart:0,
        }
    }
    componentDidMount() {
        const query = `query products {
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

        fetch('https://nordic-shop-api.herokuapp.com/', {
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
        .then((arrData) =>
            this.setState({
                arrayData: arrData.data.products
            }),
        )
    }

    render() {
   
        const arData = this.state.arrayData;
        let datas = Object.keys(arData).map(function (key, index) {
            const pathRoute = "/product/" + arData[index].id;
            return (
                <Link to={pathRoute}  key={arData[index].id}>
                <Product
                    type="productlist"
                    key={arData[index].id}
                    productID={arData[index].id}
                    productName={arData[index].name}
                    productImage={arData[index].images[0].url}
                    productPrice={arData[index].price}
                    btnAddToCart={this.props.addToCart}
                /></Link>
            )
        }.bind(this))
        return (
            <div>
                <div className="listProduct" >
                    {datas}
                </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(ListItem);