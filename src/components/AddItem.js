import React, { Component } from 'react'

class AddItem extends Component {
  state = {
    quantity: 0,
    productId: 40
  }

  onSubmit = (e)=> {
    e.preventDefault()
    this.props.addItemToState(this.state.quantity, this.state.productId)
  }

  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <div className="form-group">

          <label htmlFor="product">Which Product</label>
          <select id="product" className="form-control" value={this.state.productId} onChange={(e) => this.setState({productId: e.target.value})}>
            <option>Choose...</option>
            {this.props.products.map(product => <option key={product.id} value={product.id}>{product.name}</option>)}
          </select>

          <label htmlFor="quantity">How Many</label>
          <input type="number" className="form-control" id="quantity" value={this.state.quantity} onChange={(e)=> this.setState({quantity: e.target.value})}/>


          <div className="row">
            <div className="col-10">
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-danger my-3">Submit</button>
            </div>
          </div>

        </div>
      </form>
    )
  }
}

export default AddItem
