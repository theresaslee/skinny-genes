import React, {Component} from 'react';
import {connect} from 'react-redux';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Patient extends Component {
    render() {
        if (!this.props.user) {
            return (<div></div>);
        }
        return (
            <div id="profile" className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="row">
                            <div className="name col-md-12 col-sm-12 col-xs-12" > {this.props.user.first} {this.props.user.last} </div>
                        </div>
                        <div className="row">
                            <div className="attr col-md-6 col-sm-6 col-xs-6"> D.O.B. </div>
                            <div className="value col-md-6 col-sm-6 col-xs-6"> {this.props.user.dob || "11.03.1989"} </div>
                        </div>
                        <div className="row">
                            <div className="attr col-md-6 col-sm-6 col-xs-6"> Age </div>
                            <div className="value col-md-6 col-sm-6 col-xs-6"> {this.props.user.age || "28"} </div>
                        </div>
                        <div className="row">
                            <div className="attr col-md-6 col-sm-6 col-xs-6" > Sex </div>
                            <div className="value col-md-6 col-sm-6 col-xs-6" > {this.props.user.gender || "M"} </div>
                        </div>
                        <div className="row">
                        <div className="attr col-md-6 col-sm-6 col-xs-6" > Height </div>
                            <div className="value col-md-6 col-sm-6 col-xs-6"> {this.props.user.height || "6'-0\""} </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <img src={this.props.user.thumbnail} />
                    </div>
                </div>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Patient);
