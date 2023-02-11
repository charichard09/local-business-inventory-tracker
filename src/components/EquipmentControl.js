import React from 'react';
import EquipmentList from './EquipmentList';
import NewEquipmentForm from './NewEquipmentForm';
import EquipmentDetails from './EquipmentDetails';
import EditEquipmentForm from './EditEquipmentForm';
import { v4 } from 'uuid';

class EquipmentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainEquipmentList: [
        {
          name: "Bench Press", 
          description: "Rich Fitness Bench Press with 45lb barbell, 2x 25lb plates, 2x 10lb plates, 2x 5lb plates, 2x 2.5lb plates", 
          price: 45, 
          quantity: 3, 
          imgUrl: "https://media.istockphoto.com/id/1309046408/photo/home-fitness-bench-with-barbell.jpg?b=1&s=170667a&w=0&k=20&c=mqf1JuwblYs8YGYbkjaeUWYN0w4q4AXlY9F-njvgaXM=",
          id: v4()
        }
      ],
      selectedEquipment: null,
      editing: false
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

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditEquipmentInList = (equipmentToEdit) => {
    const editedMainEquipmentList = this.state.mainEquipmentList.filter(equipment => equipment.id !== this.state.selectedEquipment.id)
      .concat(equipmentToEdit);
    this.setState({mainEquipmentList: editedMainEquipmentList, editing: false, selectedEquipment: null});
  }

  handleUnitSold = () => {
    if (this.state.selectedEquipment.quantity <= 0) {
      return;
    } else {
      const newSelectedEquipment = {...this.state.selectedEquipment, quantity: this.state.selectedEquipment.quantity - 1};
      this.setState({selectedEquipment: newSelectedEquipment});
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditEquipmentForm 
        equipment={this.state.selectedEquipment} 
        onEditEquipment={this.handleEditEquipmentInList} />
      buttonText = "Return to Equipment List";
    } else if (this.state.selectedEquipment != null) {
      currentlyVisibleState = <EquipmentDetails 
        equipment={this.state.selectedEquipment} 
        onClickingDelete={this.handleDeletingEquipment}
        onClickingEdit={this.handleEditClick}
        onClickingUnitSold={this.handleUnitSold}/>
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