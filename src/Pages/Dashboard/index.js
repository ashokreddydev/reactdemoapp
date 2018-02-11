    import React, { Component } from 'react';
    import HeaderBar from '../HeaderBar';
    import Table from '../DashBoardTable/Table';
    import { connect } from 'react-redux';
    import {UserLoginFetchData} from '../../Actions/actions'
    import * as Constants from '../../utils/Constants';
    
    
    class Dashboard extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data : []
            }

        
    

    
        }


        componentWillMount() {
      
                let Url =Constants.ApiCallUrl + 'user/userList';
               // console.log(Constants.ApiCallUrl)
               var payload={
                   user:"user"
             }
                this.props.dispatch(UserLoginFetchData(Url, payload));

        }



        componentWillReceiveProps(nextProps) {

            if(nextProps.userList == undefined)
            {
                this.setState({ data: [] });

            }
            else
            {

                this.setState({ data: nextProps.userList});
            }

        }
    
    
        render() {

            console.log(this.props.location.state.LoginUser
            )

            
    
            return (<HeaderBar user={this.props.location.state.LoginUser}>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <span className="glyphicon glyphicon-bookmark"></span>Users </h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                     
                                <div className="col-xs-6 col-md-12">
        <Table  data = {this.state.data}
        user={this.props.location.state.LoginUser}
       /> 
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

    export default connect (mapStateToProps) (Dashboard);