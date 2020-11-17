import React from "react";
import PropTypes from "prop-types";

function MarketInfo(props){
  return (
    <React.Fragment>
      <h3>{props.location} - {props.day}</h3>
      <p><em>{props.hours}</em></p>
      <p><em>{props.booth}</em></p>
    </React.Fragment>
  )
}

MarketInfo.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default MarketInfo;