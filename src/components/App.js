import React, { Component } from 'react';
import Header from './Header'
import Card from '@material-ui/core/Card';
import Charts from './Charts'
import SideBar from './ProductInfo'
import SalesTable from './SalesTable'

class App extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div style={{  backgroundColor: "#daeaf4",
      display: "flex",
      flexDirection: "column"}}>
        <Header />
        <div>
        <Card style={{float: 'left', position:'absolute', width: '20%', height:'115%', padding:'10px', marginTop:'60px', marginLeft:'20px'}} >
            <SideBar  />
        </Card >
        <Card style={{float: 'right', width: '73.5%', padding:'10px', marginTop:'60px', marginLeft:'10px', marginRight:'20px'}}>
          <Charts /> 
        </Card>
        <Card style={{float: 'right', width: '73.5%', padding:'10px', marginTop:'60px', marginLeft:'10px', marginRight:'20px'}}>
          <SalesTable />
        </Card>

        </div>
      </div>
    );
  }
}

export default App;