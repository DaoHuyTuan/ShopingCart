import React from "react";
import {Link} from "react-router-dom";
export default class Header extends React.Component {
    render() {
        return(
            <header>
                <ul>
                <li><Link to="/"><div className="list-menu">Home</div></Link></li>
                    <li><div className="list-menu">Shop</div></li>
                    <li><div className="list-menu">Promotion</div></li>
                    <li><div className="list-menu">Blog</div></li>
                    <li><div className="list-menu">Contact</div></li>
                    
                        <li>
                            <Link to="/cart">
                            <div className="list-menu" onClick={this.displayCart}>
                                <i className="fas fa-shopping-cart"></i>
                                <div className="cart-num">{this.props.numCart}</div>
                            </div>
                            </Link>
                        </li>
                    
                </ul>
            </header>
        )
    }
}