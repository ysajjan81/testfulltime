import React, { Component } from 'react';
import { connect } from "react-redux";
import { DataGrid } from '@material-ui/data-grid';

const col1 = { field: 'weekEnding', headerName: 'WEEK ENDING', width: 300};
const col2 = { field: 'retailSales', headerName: 'RETAIL SALES', width: 300, valueGetter: (params) =>
  "$ "+ `${params.getValue('retailSales').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` }
const col3 =    { field: 'wholesaleSales', headerName: 'WHOLE SALES', width: 300, valueGetter: (params) =>
  "$ "+`${params.getValue('wholesaleSales').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` };
const col4 = { field: 'unitsSold', headerName: 'UNIT', width: 200 };
const col5 = { field: 'retailerMargin', headerName: 'RETAILER MARGIN', width: 250, valueGetter: (params) =>
  "$ "+ `${params.getValue('retailerMargin').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }` };

const columns = [
col1, col2, col3, col4, col5
];
class SalesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render(){
    const {products} =  this.props;
    return (
      <div style={{ height: 400, padding:'10px'}}>
        {products?<DataGrid rows={products} columns={columns} pageSize={10}  /> :''}
      </div>
    );
  }
}


function mappingStateAndProps(currentState) {
  var len = currentState.products.products.length;
  if(len)
  {
    return{
      products: currentState.products.products[0]['sales']
     }
  }else
  {
    return{
      products: null
     }
  }

}

export default connect(mappingStateAndProps)(SalesTable);