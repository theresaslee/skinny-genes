import React, {Component} from 'react';
import {connect} from 'react-redux';

class Traits extends Component {
    render() {
        if (!this.props.user) {
            return (<div></div>);
        }
        let listInfo = this.props.user[this.props.type];
        return (
            <h2 id="traits" className="container">
                <div className="row">
                    <div className="title col-sm-12 col-xs-12"> {listInfo.title} </div>
                    <ul className="values col-sm-12 col-xs-12">
                        {listInfo.list.map(function(listValue){
                            return <li key={listValue}>{listValue}</li>;
                        })}
                    </ul>
                </div>
            </h2>
        )
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Traits);