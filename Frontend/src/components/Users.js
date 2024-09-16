import React, { Component } from 'react'

// function Users({Location}) {
//   return (
//     <div className='user-container'>
//         <h3>Name:Vijay</h3>
//         <h3>Age:24</h3>
//         <h3>Role:Developer</h3>
//         <h3>Location:{Location}</h3>


//     </div>

//   )
// }

// export default Users

// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// export default class Users extends Component {
//   static propTypes = {second: third}

//   render() {
//     return (
//       <div>Users</div>
//     )
//   }
// }

class Users extends Component{
  constructor(props){
    console.log("parent construtor");
    super(props);
    this.state ={
      count:1
    }
  }

ChangeColor =()=>{
  this.setState({
    count:this.state.count+1
  })
}

componentDidMount(){
  console.log("Parent ComponentDidMount");
}
  render(){
    console.log("parent Render");

    return(
      <div>
        <h1>About as Class compoenent</h1>
        <h2>Color:{this.state.count}</h2>
        <button onClick={this.ChangeColor}>change</button>
      </div>
    )
  }
}
export default Users;

