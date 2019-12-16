import React from 'react'
import { Icon } from 'antd'
import Card from '../Card/index'
import { BrowserRouter, Route } from 'react-router-dom'
import './style.scss'
import Details from '../Details'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0,
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
                    <img className='logo' src='https://image.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1025-695.jpg' alt='logo' />
                    <Icon className="icon"
                        type={this.props.iconType}
                        style={{ fontSize: '35px', color: 'white' }}
                    />
                    <span className='cart-count'>{this.state.cartCount}</span>
                </div>
                <div className="gallery">
                    <BrowserRouter>
                        {this.props.images.map((key, index) => (
                            <Route exact path="/"
                                render={props => {
                                    return (<Card {...props} key={index} index={index} image={key} onAddToCart={this.onAddToCart} />)
                                }} />
                        ))}
                        <Route exact path="/Details"
                            render={props => {
                                return (<Details props={{ ...props }} />)
                            }} />
                    </BrowserRouter>
                </div>
            </div >
        )
    }
}

export default Cart