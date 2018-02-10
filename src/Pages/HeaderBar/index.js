import React, { Component } from 'react';


class HeaderBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}


    }

    render() {

        return (<div>

<div className="col-sm-12">

<div className="container-fluid">
  <div className="row">
    <div className="span12">
      <div className="head">
        <div className="row-fluid">
            <div className="span12">
                <div className="span6">
                    <h1 className="muted">Company Name</h1>
                </div>

              
            </div>
        </div>

        <div className="navbar">
            <div className="navbar-inner">
                <div className="">
                    <ul className="nav">
                        <li>
                            <a href="#">Users</a>
                        </li>

                        <li>
                            <a href="#">Search</a>
                        </li>

                        <li>
                            <a href="#">Features</a>
                        </li>

                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div className="col-sm-12">


{this.props.children}
</div>

        </div>)

    }




}

export default HeaderBar;