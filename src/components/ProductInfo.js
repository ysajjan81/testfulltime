import React, { Component } from 'react';
import Chart from '@material-ui/icons/BarChart';
import Home from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: false,
     }
  }
  componentDidMount = () => 
  {
    this.setState({loading: true});
    this.props.dispatch(fetchProducts());
  }
  
  render()
   {
    const products = this.props.products ;    
    return (
    <card style={{ height:'450vw'}}>
      {
      products?products.map(temp => (
        <div>
          <div>
            <img src = {temp.image} style={{height:300 , background:'contains'}}></img>
          </div>
          <div>
            <h2 style={{textAlign:'center', fontSize: "22px", fontWeight: "500", padding: "10px"}}>{temp.title}</h2>
            <p style={{textAlign:'center' , fontSize: "15px", fontWeight: "450", width: "90%", color: "#808080"}}>{temp.subtitle}</p>
          </div>
          <Divider/>
        {
        temp.tags.map((buttonName,index) => (
          <Button style = {{backgroundColor: 'white', margin:'8px', color:'gray',borderBlock:'black', border:'solid'}}>{buttonName}</Button>
          ))}
      </div>
      )):<div></div>
      }
      <Divider/>
          <List >
            {["Overview", "Sales"].map((word, index) => (
              <ListItem button key={word} style={{ marginTop:'30px'}}>
                <ListItemIcon >
                  {word === "Overview" ? (
                    word = "OVERVIEW",
                    <Home style={{ color: "skyblue" }}/>
                  ) : (
                    word = "SALES",
                    <Chart style={{ color: "skyblue"}} />
                  )}
                </ListItemIcon>
                <ListItemText  primary={word} />
              </ListItem>
            ))}
          </List>
      </card>);
  }
}
  const mappingForStateAndProps = data => ({products: data.products.products});
  export default connect(mappingForStateAndProps)(SideBar);

