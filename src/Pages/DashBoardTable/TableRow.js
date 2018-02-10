import React, { Component } from "react";

class TableRow extends Component {


    render() {

        var status=""


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
                                                           
                                
							
                            </tr>


        )





    }


}

export default TableRow;