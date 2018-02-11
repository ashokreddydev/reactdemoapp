import React, { Component } from 'react';
import HeaderBar from '../HeaderBar';
import Table from '../DashBoardTable/Table';
import { connect } from 'react-redux';
import {UserLoginFetchData} from '../../Actions/actions'
import * as Constants from '../../utils/Constants';


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : {}
        }



    }

    componentWillMount() {
  
            let Url =Constants.ApiCallUrl + 'user/getUserList';
           // console.log(Constants.ApiCallUrl)
           var payload={
               id:this.props.location.state.data.index
         }
            this.props.dispatch(UserLoginFetchData(Url, payload));

    }



    componentWillReceiveProps(nextProps) {
        this.state.data={};

        if(nextProps.userList == undefined)
        {
            this.setState({ data: [] });

        }
        else
        {

          
        this.state.data=nextProps.userList;
       
        }

    }


    render() {
       // console.log(this.props.location.state.data.index)

        

        

        return (<HeaderBar user={this.props.location.state.LoginUser}>
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            <span className="glyphicon glyphicon-bookmark"></span>{this.state.data.name} </h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                 
                            <div className="col-xs-6 col-md-12">
                            <div class="card hovercard">
                <div class="cardheader">

                </div>
                <div class="avatar">
                    <img alt="" src="http://lorempixel.com/100/100/people/9/" />
                </div>
                <div class="info">
                    <div class="title">
                       {this.state.data.fullname}
                    </div>
                    <div class="desc">{this.state.data.email}</div>
                    <div class="desc">{this.state.data.index}</div>
                  
                </div>
      
            </div>
                             </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    </HeaderBar>)

}
}

function mapStateToProps(state, actions) {

         if (state.fetchLogin && state.fetchLogin.status == "200") {
            
             return { userList: state.fetchLogin.Data}
     
         }
       else {
                 return{}
             
         }
         
         // console.log("User Login", state.fetchLogin)
     
     }

export default connect (mapStateToProps) (User);