import React from "react";
import SlideImage from "../SlideImage";
class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData:''
        }
    }
    componentDidMount() {
        const detailID = this.props.match.params.id;
        const query = 'query productsByID {product(productId:' + '"' + detailID + '"' + ') { id name description rating price images { url alt } } }';
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
            .then((response) => response.json())
            .then((arData) => 
                this.setState({
                    arrayData: arData.data.product
                })
            );    
    }
    render() {
        return (
            <div className="detailPage">
                <div className="col-6">
                    <SlideImage bundleImage={this.state.arrayData.images}/>                 
                </div>
                <div className="col-6 detailPage-content">
                    <span className="detailPage-name">{this.state.arrayData.name}</span>
                    <span className="detailPage-des">{this.state.arrayData.description} Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</span>
                    <div className="benefit">
                        <i className="fas fa-truck-moving"></i>
                        FREE DELIVERY
                    </div>
                    <span className="detailPage-price">Price: ${this.state.arrayData.price}</span>
                    <button>Add To Cart</button>
                </div>
            </div>
        )
    }
}
export default ProductDetail;