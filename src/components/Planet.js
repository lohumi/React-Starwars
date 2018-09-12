import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class planet extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          planets:[]
         
        };
      }

    componentDidMount=async ()=>{
    this.fetchPlanetData();   
   
    // const req= await fetch(`https://swapi.co/api/planets/`); 

    // const res=await req.json();
    // this.setState({ planets:res.results });
    // console.log(this.state.planets[0]);
    }

    fetchPlanetData(){

        this.setState({
            planets:[]
        })
      
        fetch('https://swapi.co/api/planets/')
        .then(response => response.json())
        .then(p=>console.log(p.results[0]))
        .then(parsedJSON => parsedJSON.results.map(user => (
            {
                name: `${user.name} `,
                population: `${user.population}`,
                climate: `${user.climate}`,
                diameter: `${user.diameter}`
            }
        )))
        .then(planets => this.setState({ planets:planets
        }))
        
        .catch(error => console.log('parsing failed', error))
    
        console.log(this.state.planets);
    }

    render(){
       const PlanetInfo=this.state.planets;
       //const {name, population, climate, diameter}
        return (
            <div className="container  ">
            {/* { this.state.PlanetData.length!==0 &&
            <div >
                 <h3 >{ PlanetData.name }</h3>
                 <h4 >
                  population: <span>{ PlanetData.population }</span>
                </h4>
               <button >
                  <Link to="/">Go Home</Link>
                </button>
    
            </div>
            } */}
            <div className="panel-group">
                        {
                             PlanetInfo.length > 0 ? PlanetInfo.map(planet => {
                                const {name, population, climate, diameter} = planet;
                              return
                                <div >
                                   Name:  <h3 >{ name }</h3>
                                   population:  <h3 >{ population }</h3>
                                   climate:  <h3 >{ climate }</h3>
                                   Diameter:  <h3 >{ diameter }</h3>
                                  
                                </div>
                               
                            }) : <div>
                                <h1>No Data available</h1><br/>
                                <button >
                                <Link to="/Planets">Go Home</Link>
                                </button>
                            </div>
                        }
                    </div>
            </div>
        )
    }
}

export default planet;