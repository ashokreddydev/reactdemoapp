import React, { Component } from 'react';
import { connect } from 'react-redux';
import {UserLoginFetchData} from '../../Actions/actions'
import * as Constants from '../../utils/Constants';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errors:[],
            LoginPageRedirect:false,
            Message:""


        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
    
        let username = event.target.username.value;
        let password = event.target.password.value;
        // console.log(username)
        // console.log(password)
        var condtionCheck = true 
        let errors = [];
		if (username.length === 0) {
			condtionCheck = false;
			errors[0] = "UserName can't be empty"
		}
		if (password.length === 0) {
			condtionCheck = false;
			errors[1] = "Password can't be empty"
        }
        this.setState({ errors: errors });
        if(condtionCheck)
        {

           var userLogin = {
            "username":username,
            "password":password
            }
            let Url =Constants.ApiCallUrl + 'user/login';
           // console.log(Constants.ApiCallUrl)
			this.props.dispatch(UserLoginFetchData(Url, userLogin));
        }


    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.UserLoginData)
        this.setState({ LoginPageRedirect:false})

        if(nextProps.UserLoginData.status == "200")
        {
            this.setState({ LoginPageRedirect:true})
            this.setState({ Message:""})

        }
        if(nextProps.UserLoginData.status == "400")
        {
            this.setState({ Message:nextProps.UserLoginData.message})


        }
    }

    render() {
        const {LoginPageRedirect} = this.state
        const {UserLoginData} = this.props

        if(LoginPageRedirect)
        {

            return   <Redirect to={{
        pathname: '/Dashboard' 
        
      }}/>
        }

        return (
            <div>
                <div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
          {/*  <h1 className="text-center login-title">Sign in to continue to Bootsnipp</h1> */}
            <div className="account-wall">
                <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt="" />
                   

                <form className="form-signin" onSubmit={this.handleSubmit} >
                <span className="errMsg">{this.state.Message}</span>
                <input type="text" className="form-control inpt-stl" name="username" placeholder="UserName" autoFocus/>
                <span className="errMsg">{this.state.errors[0]}</span>
                <input type="password" className="form-control inpt-stl" name="password" placeholder="Password" />
                <span className="errMsg">{this.state.errors[1]}</span>
                <button className="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in</button>
              {/*   <label className="checkbox pull-left">
                    <input type="checkbox" value="remember-me" />
                    Remember me
        </label> */}
              {/*  <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span> */}
                </form>
            </div>
            {/*<a href="#" className="text-center new-account">Create an account </a> */}
        </div>
    </div>
</div>
            </div>


        )

    }





}


function mapStateToProps(state, actions) {
   
        if (state.fetchLogin ) {
            console.log("User Login 1", state.fetchLogin)
            return { UserLoginData: state.fetchLogin}
    
        }
      else {
                return{}
            
        }
        
        // console.log("User Login", state.fetchLogin)
    
    }

export default  connect (mapStateToProps) (Login);