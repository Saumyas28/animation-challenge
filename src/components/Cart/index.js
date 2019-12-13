import React from 'react'
import { Icon } from 'antd'
import Card from '../Card/index'
import './style.scss'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0
        }
    }
    onAddToCart = () => {
        this.setState({
            cartCount: this.state.cartCount + 1
        })
    }
    render() {
        return (
            <div>
                <div className="nav-bar">
                    <Icon className="icon"
                        type={this.props.iconType}
                        style={{ fontSize: '40px', color: 'black' }}
                    />
                    <span className='cart-count'>{this.state.cartCount}</span>
                </div>
                <div className="gallery">
                    {this.props.images.map((key, index) => (
                        <Card key={index} index={index} image={key} onAddToCart={this.onAddToCart} />
                    ))}
                </div>
            </div >
        )
    }
}

export default Cart