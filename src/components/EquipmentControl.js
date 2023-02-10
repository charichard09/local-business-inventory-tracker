import React from 'react';
import EquipmentList from './EquipmentList';

class EquipmentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainEquipmentList: [ 
        {
          name: "name", 
          description: "description", 
          price: "price", 
          quantity: 130, 
          imgUrl: "https://www.pngkey.com/png/detail/243-2434212_shipping-box-png-banner-transparent-download-shipping-boxes.png"
        } 
      ]
    };
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    currentlyVisibleState = <EquipmentList equipmentList={this.state.mainEquipmentList} />;
    buttonText = "Add Equipment";

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  };
}

export default EquipmentControl;