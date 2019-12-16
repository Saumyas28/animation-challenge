import React from 'react';
//import { Icon } from 'antd'
import './style.scss'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedButton: -1,
            selectedItems: [],
            cartCount: 0,
        }
    }
    onClick = (index) => {
        console.log('in add to cart')
        this.props.onAddToCart();
        this.setState({
            clickedButton: index,
            cartCount: this.state.cartCount + 1,
            selectedItems: [...this.state.selectedItems, index]
        })
    }
    onImageClick = () => {
        this.props.history.push('../Details')
    }
    render() {
        return (
            <div className="card">
                <button disabled={this.state.selectedItems.indexOf(this.props.index) === (-1) ? false : true}
                    className="add-button"
                    onClick={() => this.onClick(this.props.index)}>
                    <b>Add To Cart</b>
                </button>
                <div className="wrap">
                    <div className="cube" onClick={() => this.onImageClick()}>
                        <div style={{ backgroundImage: `url(${this.props.image.frontView})` }} className="front"></div>
                        <div style={{ backgroundImage: `url(${this.props.image.backView})` }} className="back"></div>
                        <div style={{ backgroundImage: `url(${this.props.image.topView})` }} className="top"></div>
                        <div style={{ backgroundImage: `url(${this.props.image.bottomView})` }} className="bottom"></div>
                        <div style={{ backgroundImage: `url(${this.props.image.leftView})` }} className="left"></div>
                        <div style={{ backgroundImage: `url(${this.props.image.rightView})` }} className="right"></div>
                    </div>
                    <img
                        className={this.state.clickedButton === this.props.index ? 'selected-img' : 'item-img'}
                        src={this.props.image.frontView} alt="item1" />

                    <span className="price-tag">Price: 100$</span>
                </div>
            </div>
        )
    }
}

export default Card;