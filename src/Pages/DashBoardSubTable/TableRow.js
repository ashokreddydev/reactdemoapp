import React, { Component } from "react";
import  { Link } from 'react-router-dom';

class TableRow extends Component {


    render() {

        var status=""
        const {currentUser} =this.props;


        if(this.props.data.bool)
        {
            status="Active"

        }
        else
      {
        status="Deactive"

      }
       // console.log("Table Row data",this.props.data.Number_of_Units)
  

        return (
           



         <tr>

             {}
                                <td>{this.props.data.MemberId}</td>
                                <td>{this.props.data.RelationshipCode}</td>
                                <td>{this.props.data.ClientCode}</td> 
                                {/* <td>{status}</td> */}
                          
                                                           
                                
							
                            </tr>


        )





    }


}

export default TableRow;