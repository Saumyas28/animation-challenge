import React from 'react';
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
            <div className="wrap">
                <div className="cube" onClick={() => this.onImageClick()}>
                    <div style={{ backgroundImage: `url(${this.props.image})` }} className="front"></div>
                    <div style={{ backgroundImage: `url(${this.props.image})` }} className="back"></div>
                    <div style={{ backgroundImage: `url(${this.props.image})` }} className="top"></div>
                    <div style={{ backgroundImage: `url(${this.props.image})` }} className="bottom"></div>
                    <div style={{ backgroundImage: `url(${this.props.image})` }} className="left"></div>
                    <div style={{ backgroundImage: `url(${this.props.image})` }} className="right"></div>
                </div>
                <img
                    className={this.state.clickedButton === this.props.index ? 'selected-img' : 'item-img'}
                    src={this.props.image} alt="item1" />
                <button disabled={this.state.selectedItems.indexOf(this.props.index) === (-1) ? false : true}
                    className="add-button"
                    onClick={() => this.onClick(this.props.index)}>
                    Add To Cart
                </button>
                <span className="price-tag">Price</span>
            </div>
        )
    }
}

export default Card;