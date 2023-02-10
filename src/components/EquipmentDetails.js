import React from "react";
import PropTypes from "prop-types";

const EquipmentDetails = (props) => {
  const { equipment } = props;
  
  return (
    <React.Fragment>
      <h1>Equipment Details</h1>
      <hr />
      <img src={equipment.imgUrl} alt="equipment"/>
      <h3>{equipment.name}</h3>
      <p>{equipment.description}</p>
      <p>Price: {equipment.price}</p>
      <p>Quantity: {equipment.quantity}</p>
    </React.Fragment>
  );
}

EquipmentDetails.propTypes = {
  equipment: PropTypes.object
}

export default EquipmentDetails;