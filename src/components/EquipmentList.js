import React from "react";
import PropTypes from "prop-types";
import EquipmentDisplay from "./EquipmentDisplay";

const EquipmentList = (props) => {
  return (
    <React.Fragment>
      <hr />
      {props.equipmentList.map((equipment) =>
        <EquipmentDisplay
          // whenEquipmentClicked={props.onEquipmentSelection}
          name={equipment.name}
          imgUrl={equipment.imgUrl}
          id={equipment.id}
          key={equipment.id}
        />
      )}
    </React.Fragment>
  );
}

EquipmentList.propTypes = {
  equipmentList: PropTypes.array,
  // onEquipmentSelection: PropTypes.func
};

export default EquipmentList;