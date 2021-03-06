import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <header>
                <div className="logo">
                    NORDIC
                    <span>SHOP</span>    
                </div>
                <div className="searchBox">
                    <input className="searchBox-input" type="text" placeholder="Search" onChange={this.getNameSearch}/>
                    {/* <Link to={this.pathSearch}><i className="fas fa-search" onClick={() => this.props.searchByName(this.state.valueInput)}></i></Link> */}
                </div>
                <ul>
                    <Link to="/"><div className="list-menu">Home</div></Link>
                    <div className="list-menu">Shop</div>
                    <div className="list-menu">Promotion</div>
                    <div className="list-menu">Blog</div>
                    <div className="list-menu">Contact</div>
                    <Link to="/cart">
                        <div className="list-menu" onClick={this.displayCart}>
                            <i className="fas fa-shopping-cart"></i>
                            <div className="cart-num">{this.props.numCart}</div>
                        </div>
                    </Link>
                </ul>
            </header>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        numCart:state.cartRD.numCart,
        cartList:state.cartRD.cartList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);