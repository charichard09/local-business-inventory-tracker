import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const EditEquipmentForm = (props) => {
  const { equipment } = props;

  function handleEditEquipmentFormSubmission(event) {
    event.preventDefault();
    props.onEditEquipment({
      name: event.target.name.value || equipment.name,
      imgUrl: event.target.imgUrl.value || equipment.imgUrl,
      description: event.target.description.value || equipment.description,
      price: event.target.price.value || equipment.price,
      quantity: event.target.quantity.value || equipment.quantity,
      id: equipment.id,
    });
  }

    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleEditEquipmentFormSubmission}
          buttonText="Update Equipment" />
      </React.Fragment>
    );
}

EditEquipmentForm.propTypes = {
  equipment: PropTypes.object,
  onEditEquipment: PropTypes.func
}; 

export default EditEquipmentForm;