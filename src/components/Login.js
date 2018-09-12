import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import { Redirect,Link } from 'react-router-dom';


class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            redirect:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        
        // console.log(value);
        this.setState({
          [name]: value
        });
    }
            setRedirect = (e) => {
                this.setState({
                  redirect: true
                })
                console.log(this.state.redirect);
                
                this.renderRedirect()
              }
              renderRedirect = () => {
                        // if (this.state.redirect) {
                        //   return <Redirect to='/Planets' />
                        //}
                        this.props.history.push(`/Planets`);
                      }

            handleSubmit(e) {
             try {
            
            if(this.state.username==='Luke' && this.state.password==='1988')
            {
                console.log('loggedin');
                
                this.setRedirect(e);
                //e.preventDefault();
            }
            else{
                alert("invalid login");
                e.preventDefault();
            }
            
            } catch (e) {
            alert(e.message);
            }
         console.log(this.state);
    }

    render() {
        return (
        <div className="container">
                <div className="Login">
                <form >
                <FormGroup controlid="username" bsSize="large">
                <ControlLabel>UserName</ControlLabel>
                <FormControl type="text" id="username" controlid="username" name="username"   onChange={this.handleChange}  />
                </FormGroup>

                <FormGroup controlid="password" type="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl controlid="password"  id="password" name="password" type="password"  onChange={this.handleChange} />
            </FormGroup>
            <Button
                block
                bsSize="large" bsStyle="success"
                type="submit" onClick={this.handleSubmit}>Login </Button>
            </form>
                </div>
            
          </div>
          );
    }
}

export default Login;