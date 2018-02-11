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
                                <td>{this.props.data.name}</td>
                                <td>{this.props.data.fullname}</td>
                                <td>{this.props.data.email}</td> 
                                <td>{status}</td>
                                <td> <Link to={{pathname: '/UserPage', state:{LoginUser:currentUser,data:this.props.data}}}  >Click</Link>
                                     </td>
                                                           
                                
							
                            </tr>


        )





    }


}

export default TableRow;