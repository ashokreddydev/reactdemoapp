    import React, { Component } from 'react';
    import HeaderBar from '../HeaderBar';
    import Table from '../DashBoardTable/Table';
    import SubTable from '../DashBoardSubTable/Table'
    import { connect } from 'react-redux';
    import {UserLoginFetchData} from '../../Actions/actions'
    import * as Constants from '../../utils/Constants';
    
    
    class Dashboard extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data : [],
                userDatails:{}
            }

        
    

    
        }


        componentWillMount() {
      
               // let Url =Constants.ApiCallUrl + 'user/userList';
               // console.log(Constants.ApiCallUrl)
            //    var payload={
            //        user:"user"
            //  }

                 let Url =Constants.API_OTHER_URL + 'Account/get';
                             let payload =  {
                    "RecordID":this.props.location.state.LoginUser.RecordId
                }

                this.props.dispatch(UserLoginFetchData(Url, payload));

        }



        componentWillReceiveProps(nextProps) {

            console.log("RecordId",nextProps.userList)
        this.state.userDatails=nextProps.userList;

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

            console.log("loginUser",this.props.location.state.LoginUser)
         
    
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

                                
        {/* <Table  data = {this.state.data}
        user={this.props.location.state.LoginUser}
       />  */}

       <SubTable data = {this.state.userDatails.Dependents}
        />

<div className="container">
	<div className="row">
		<div className="col-sm-4 col-md-4 user-details">
 
            <div className="user-info-block">
                <div className="user-heading">
                    <h3>{this.state.userDatails.FirstName}</h3>
                    <span className="help-block">Chandigarh, IN</span>
                </div>
                <ul className="navigation">
                    <li className="active">
                        <a data-toggle="tab" href="#information">
                            <span className="glyphicon glyphicon-user"></span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#settings">
                            <span className="glyphicon glyphicon-cog"></span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#email">
                            <span className="glyphicon glyphicon-envelope"></span>
                        </a>
                    </li>
                    <li>
                        <a data-toggle="tab" href="#events">
                            <span className="glyphicon glyphicon-calendar"></span>
                        </a>
                    </li>
                </ul>
                <div className="user-body">
                    <div className="tab-content">
                        <div id="information" className="tab-pane active">
                            <h4>Account Information</h4>
                        </div>
                        <div id="settings" className="tab-pane">
                            <h4>Settings</h4>
                        </div>
                        <div id="email" className="tab-pane">
                            <h4>Send Message</h4>
                        </div>
                        <div id="events" className="tab-pane">
                            <h4>Events</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

          
                 return { userList: state.fetchLogin}
         
             
       
             
             // console.log("User Login", state.fetchLogin)
         
         }

    export default connect (mapStateToProps) (Dashboard);