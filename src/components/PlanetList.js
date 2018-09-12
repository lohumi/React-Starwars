import React,{Component} from 'react';
import {Link} from 'react-router-dom';

  class PlanetList extends Component{
  constructor(props) {
    super(props)

    this.state = {
      isShow: true,
      heightSet: 10
    };
  }
 
  render(){
    const {name, population, climate, diameter}  = this.props;
    //set dynamic size of div
    
    const divStyle = {
      height: population/100 + 'px',
    };
       return(
      <div className="container">
          
           
          <div className="planet__box"  >
        
          <div className="planet__text">
            <h5 > 
            Name: <span>{name}</span> 
            </h5>
            <p >
            Population: <span>{population}</span> 
            </p>
            <p >
            Climate: <span>{climate}</span> 
            </p>
            <p >
            Diameter: <span>{diameter}</span> 
            </p>
          </div>
          <button className="planet_buttons">
         <Link to={{
           pathname:`/Planet/${name}`}}
         > View planet</Link>

          </button>
         </div>

       </div>
        )
    }
}

export default PlanetList;
