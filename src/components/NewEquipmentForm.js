import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewEquipmentForm(props) {

  function handleAddingNewEquipmentFormSubmission(event) {
    event.preventDefault();
    props.onNewEquipmentCreation({
      name: event.target.name.value,
      imgUrl: event.target.imgUrl.value || "https://www.pngkey.com/png/detail/243-2434212_shipping-box-png-banner-transparent-download-shipping-boxes.png",
      description: event.target.description.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleAddingNewEquipmentFormSubmission}
        buttonText="Add Equipment" />
    </React.Fragment>
  );
}

NewEquipmentForm.propTypes = {
  onNewEquipmentCreation: PropTypes.func
};

export default NewEquipmentForm;