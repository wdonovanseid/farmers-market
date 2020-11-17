import React from "react";
import PropTypes from "prop-types";

function SeasonalInfo(props){
  return (
    <React.Fragment>
      <h3>{props.month} Produce:</h3>
      <ul>
        {props.selection.map((x,i) => <li key={i}>{x}</li>)}
      </ul>
    </React.Fragment>
  )
}

SeasonalInfo.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default SeasonalInfo;