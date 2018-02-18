import React, {Component} from "react";
import TableRow from "./TableRow"

class Table extends Component{
    
    
        constructor(){
        
        super();
 
        
        
    }
    
    
    render()
    {
           

           const { data,user }= this.props;
        //  console.log("Table Row ----",this.props.data);
        if (!this.props.data) return null
        return(
        
     
        
        <div>
             <table className="table table-bordered">
             <thead>
             <tr>
                 <th>Name</th>
                 <th>Full Name</th>
                 <th>Email</th>
                 {/* <th>Status</th> */}
                 
             </tr>
         </thead>
               <tbody>
                    {/* <TableRow data = {data} />  */}
          

                    
                     {data.map((person, i) => <TableRow key = {i} data = {person} currentUser={user} />)}  
               </tbody>
            </table>
        </div>    
        
        
        )
        
        
        
        
        
    }
    
    
}  

export default Table