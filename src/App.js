import React from 'react'
import './App.css';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      count:0
    }
  }
  add = () => {
    this.setState(st => {
      return{
        count:st.count + 1
      }
    })
  }

  remove = () => {
    this.setState(st => {
      return{
        count:st.count - 1
      }
    })
  };

  render(){
      
    return (
      <div className="App">
          <div className="container">
        <div className="card text-center mt-5">
          <div className="card-header">
            <b>Product Counter Application</b>
          </div>
          <div className="card-header">
            <h5 className="text-right">Product Count: {this.state.count}</h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <button className="btn btn-primary" type="button" onClick={this.add} disabled={this.state.count===10?true:false}>+</button>
            </h5>
            <h1><p className="card-text">{this.state.count}</p></h1>
            <h5 className="card-title"><button className="btn btn-danger" onClick={this.remove} disabled={this.state.count===0?true:false}>-</button></h5>
          </div>
          <div className="card-footer text-muted">
              <ul>
                <p className="text-danger">{this.state.count === 0 ? "You Have Zero Products in Cart":""}{this.state.count === 10 ? "You Cannot Add More Than 10 Products":""}</p>  
              </ul>
          </div>
        </div>
        </div>
    
      </div>
    );
  }
}

export default App;
