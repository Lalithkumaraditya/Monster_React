import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/searchbox/searchbox.component'

 export class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    monsters :[],
    searchField:''
  };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response =>response.json())
  //.then(users=> console.log(users))
  .then(users => this.setState({monsters :users}))
}
 handleChange=(e)=>
{this.setState({searchField:e.target.value},()=>console.log(this.state))}
 

render(){
  const {monsters,searchField }=this.state;
  const filterMonster=monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
  )
return(
    <div className='App'>
    <h1>Monsters</h1>
   <SearchBox placeholder='search monster' handleChange={this.handleChange}/>
    <CardList monsters={filterMonster} />
  

    </div>
    );
}


}
export default App;
