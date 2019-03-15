import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Header extends React.Component {
    render() {

        return (
            <header>
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
        arrayCart: state.arrayCart,
        numCart:state.numCart
    }
}

export default connect(mapStateToProps)(Header);