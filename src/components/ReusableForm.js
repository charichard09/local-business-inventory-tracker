import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of equipment' />
        <input
          type='text'
          name='imgUrl'
          placeholder='(optional) Image URL' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='quantity'
          placeholder='Quantity out of 130' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;