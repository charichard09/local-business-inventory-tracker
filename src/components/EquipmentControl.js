import React from 'react';
import EquipmentList from './EquipmentList';
import NewEquipmentForm from './NewEquipmentForm';
import EquipmentDetails from './EquipmentDetails';

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
      ],
      selectedEquipment: null
    };
  }

  handleClick = () => {
    if (this.state.selectedEquipment != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedEquipment: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewEquipmentToList = (newEquipment) => {
    const newMainEquipmentList = this.state.mainEquipmentList.concat(newEquipment);
    this.setState({mainEquipmentList: newMainEquipmentList, formVisibleOnPage: false});
  }

  handleChangingSelectedEquipment = (id) => {
    const newSelectedEquipment = this.state.mainEquipmentList.filter(equipment => equipment.id === id)[0];
    this.setState({ selectedEquipment: newSelectedEquipment });
  }

  handleDeletingEquipment = (id) => {
    const newMainEquipmentList = this.state.mainEquipmentList.filter(equipment => equipment.id !== id);
    this.setState({mainEquipmentList: newMainEquipmentList, selectedEquipment: null});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedEquipment != null) {
      currentlyVisibleState = <EquipmentDetails equipment={this.state.selectedEquipment} onClickingDelete={this.handleDeletingEquipment}/>
      buttonText = "Return to Equipment List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewEquipmentForm onNewEquipmentCreation={this.handleAddingNewEquipmentToList}/>;
      buttonText = "Return to Equipment List";
    } else {
      currentlyVisibleState = <EquipmentList equipmentList={this.state.mainEquipmentList} onEquipmentSelection={this.handleChangingSelectedEquipment}/>;
      buttonText = "Add Equipment";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  };
}

export default EquipmentControl;