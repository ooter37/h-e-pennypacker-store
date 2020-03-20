import React from 'react';
import axios from 'axios'
import './App.css';
import './reset.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      cart: []
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

  addToCart(id) {
    let newCart = [...this.state.cart,id]
    this.setState({cart: newCart})
  }

  render(){
    console.log(this.state.cart)
      const mappedInventory = this.state.inventory.map( item => {
        return <div className='items' key={item.id}>
          <h1>{item.name}</h1>
          
          <span>{item.price}</span>
          <img className='product-img' alt='product-img' src={item.imgUrl}/>
          <br></br>
          <button onClick={() => this.addToCart(item.id)}>Add to Cart</button>
        </div>
      })

      const mappedCart = this.state.cart.map(cartItem => {
        return(
        <div className='cart-item'>
          <h1>{this.state.inventory[cartItem -1].name}</h1>
        </div>
        )
      })

  return (
    <div className="App">
      <div className='inventory'>
      {mappedInventory}
      </div>
      <div className='cart'>
        {mappedCart}

      </div>
    </div>
    );
  }
}
export default App;
