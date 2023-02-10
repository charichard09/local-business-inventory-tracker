import React from "react";
import PropTypes from "prop-types";

const EquipmentDisplay = (props) => {
  return (
    <div onClick={() => props.whenEquipmentClicked(props.id)}>
      <img src={props.imgUrl} alt="equipment"/>
      <p>{props.name}</p>
    </div>
  );
}

EquipmentDisplay.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string
}

export default EquipmentDisplay;