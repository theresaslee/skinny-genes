import React from 'react';
import {connect} from 'react-redux';

const Traits = (props) => {
    console.log('props')
    console.log(props)
    return (
      <h2 className="container traits">
          <div className="row">
              <div className="title col-sm-12 col-xs-12"> {props.traits.title} </div>
              <ul className="values col-sm-12 col-xs-12">
                  {props.traits.list.map(function(listValue){
                      return <li key={listValue}>{listValue}</li>;
                  })}
              </ul>
          </div>
      </h2>
      )
}

export default Traits
