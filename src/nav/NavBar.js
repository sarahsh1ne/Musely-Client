import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Container,
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Image,
    Menu,
    Dimmer,
    Loader
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom"

let NavContainer = styled.div `
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100vw;
  margin-bottom: 1rem;

  /* ${({ fixed }) => fixed && `
    left: 0;
    position: fixed;
    top: 0;
    z-index: 2;
  `} */
`


class NavBar extends Component {
    render() {
        return(
            <div>
                <NavContainer>
                    <h1 style={{color: "white", paddingTop: "1rem", paddingLeft: "2rem"}}>Musely</h1>
                        <Button style={{marginLeft: "auto"}}> 
                            <Link to="/songs" style={{color: "black", textDecoration: "none"}}> 
                                Notes 
                                </Link> 
                            </Button>
                        <Button> 
                            <Link to="/quiz" style={{textDecoration: "none", color: "black"}}> 
                                Quiz 
                                </Link> 
                        </Button>
                </NavContainer>
            </div>
        );
    }
}

export default NavBar;
