import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';

var labels = [];
var options= [];
var arrayForSales = [];
var arrayForMargin = [];

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    labels = []
    options= []
    arrayForSales = []
    arrayForMargin = []

    labels= [{
      name: 'Retail Sales',
      data: arrayForSales
     }, {
      name: 'Retail Margin',
      data: arrayForMargin
    }]

    options= {
      xaxis: {
        categories: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
      },
      chart: {
        type: 'line',
        height: 450,
      },
      stroke: {
        curve: 'smooth' 
      },
    }
    const {products} =  this.props;

    if(products)
    {
      var salesMonthly = 0;
      var marginMonthly = 0;
      var monthOb = {0:1};
      var RsalesNumber=1;

      products.map(current => {
        var currDate = new Date(current.weekEnding)
        
        if(currDate.getMonth() in monthOb)
        {
          marginMonthly += current.retailerMargin
          RsalesNumber += 1
          salesMonthly += current.retailSales
        }else
        {
          var dat = currDate.getMonth() ; 
          monthOb[dat] = 1
          var temp = Math.floor(salesMonthly/RsalesNumber);
          arrayForSales.push(temp)
          var temp2 = Math.floor(marginMonthly/RsalesNumber)
          arrayForMargin.push(temp2)
          marginMonthly = current.retailerMargin
          salesMonthly = current.retailSales
        }
      })
    }
    return (
        <div>
        <h3>Retail Sales</h3>
        <Chart options={options} height={500} series={labels}   />
        </div>
    );
  }
}

function mappingStateAndProps(currentState) 
  {
    var len = currentState.products.products.length;
    if(len)
    {
      return{
        products: currentState.products.products[0]['sales']
       }
    }else{
      return{products: null}
    }
  }
  export default connect(mappingStateAndProps)(Charts)
