import React, { Component } from 'react';
//import axios from 'axios';
//import './App.css';
import Form from './Form';
import PlanetList from './PlanetList';
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets:[],
      error:'' 
    };
  }
 

  /*getplanets = async(e)=>{
    const planetName=e.target.elements.planetName.value;
    console.log(planetName);
    e.preventDefault();
    //append heroku cors url at the beigning to prevent CORS error.
    const api_call= await fetch(`https://swapi.co/api/planets/`);

    const data=await api_call.json();
    this.setState({planets:data});
    console.log(this.state.planets.data);

      //  fetch('https://swapi.co/api/planets/')
    //   .then(response => response.json())
    //   .then(data => this.setState({ planets:data }))
    //   .catch(error => this.setState({ error }));

  }*/
  fetchData(){

    this.setState({
        planets:[]
    })
    //append heroku cors url at the beigning to prevent CORS error.
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
        {
            name: `${user.name} `,
            population: `${user.population}`,
            climate: `${user.climate}`,
            diameter: `${user.diameter}`
        }
    )))
    .then(planets => this.setState({
      planets
    }))
    .catch(error => console.log('parsing failed', error))

    console.log(this.state.planets.data);
}
   componentDidMount  (){
     this.fetchData();   

  }
 


  render() {
    const { planets} = this.state;
   
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Planet Search</h1>
        </header>
        
        <nav className="navbar navbar-default">
        <div className="container-fluid">
        <div className="col-md-10"></div>
        <div className="col-md-2"> 
          <button type="button" className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-log-out"></span>  <Link to={{
           pathname:`/`}}
         > Log out</Link>
          </button>

          
        </div>
          
        </div>
      </nav>

       <Form getplanets={this.getplanets}/>

        {/* <PlanetList data={this.state.planets.data}/>   */}

       <div className="panel-group">
                        {
                             planets.length > 0 ? planets.map(planet => {
                                const {name, population, climate, diameter} = planet;
                                return <PlanetList key={name} name={name} population= { population} climate={climate} diameter={diameter}>
                               
                                </PlanetList>
                            }) : null
                        }
      </div>

      <div>
        {this.state.error}
      </div>
      </div>
    );
  }
}

export default Home;
