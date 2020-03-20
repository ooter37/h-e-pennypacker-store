import React from 'react';
import axios from 'axios'
import './App.css';
import './reset.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      cart: [],
      total: 0
    }
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount(){
    axios.get('/api/getInventory').then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  addToCart(id, price) {
    let newCart = [...this.state.cart,id]
    this.setState({cart: newCart})
    this.setState({total: this.state.total + price})
  }

  render(){
    console.log(this.state.cart)
      const mappedInventory = this.state.inventory.map( item => {
        return <div className='items' key={item.id}>
          <h1>{item.name}</h1>
          
          <span>{item.price}</span>
          <img className='product-img' alt='product-img' src={item.imgUrl}/>
          <br></br>
          <button onClick={() => this.addToCart(item.id, item.price)}    >Add to Cart</button>
        </div>
      })

      const mappedCart = this.state.cart.map(cartItem => {
        let index = this.state.inventory.findIndex(product => product.id === cartItem)
        return(
        <div className='cart-item'>
          <div>{this.state.inventory[index].name}</div>
        </div>
        )
      })

  return (
    <div className="App">
      <div className='inventory'>
      {mappedInventory}
      </div>
      <div className='cart'>
      <h1 className='cart-header'>END OF THE WORLD CART</h1>
        {mappedCart}
        <div className='total'>TOTAL: ${Number.parseFloat(this.state.total).toFixed(2)}</div>
      </div>
      
    </div>
    );
  }
}
export default App;
