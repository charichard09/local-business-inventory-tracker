import React from "react";
import PropTypes from "prop-types";

const EquipmentDetails = (props) => {
  const { equipment, onClickingDelete, onClickingUnitSold,  onClickingEdit } = props;
  
  return (
    <React.Fragment>
      <h1>Equipment Details</h1>
      <hr />
      <img src={equipment.imgUrl} alt="equipment"/>
      <h3>{equipment.name}</h3>
      <p>{equipment.description}</p>
      <p>Price: {equipment.price}$</p>
      <p>Quantity: {equipment.quantity} / 130</p>
      <hr />
      <button onClick={onClickingUnitSold}>Mark a single unit sold</button>
      <button onClick={() => onClickingDelete(equipment.id)}>Delete Equipment</button>
      <button onClick={onClickingEdit}>Update Equipment</button>
    </React.Fragment>
  );
}

EquipmentDetails.propTypes = {
  equipment: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default EquipmentDetails;