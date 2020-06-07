import React, { Component } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import dataAnalytic from './dataAnalytic'
import entity from './entity'

class NavSide extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div id="navside" className="bg-dark">
                        <div className="nav-pills text-uppercase">
                            <div className="Header text-center"><u>admin data</u></div>
                            <li className="nav-pill">
                                <NavLink id="sidelink" className="nav-link" to={'/dataAnalytic'} activeClassName="active">data analytics</NavLink>
                            </li>
                            <li className="nav-pill">
                                <NavLink id="sidelink" className="nav-link" to={'/entity'} activeClassName="active">entities</NavLink>
                            </li>
                        </div>
                    </div>
                    <div id="navdetail" className="col bg-white">
                        <Switch>
                            <Route exact path='/dataAnalytic' component={dataAnalytic} />
                            <Route exact path='/entity' component={entity} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }

}

export default NavSide