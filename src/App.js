import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import IntegrationDownshift from './members'
import Button from '@material-ui/core/Button';
class App extends React.Component {
	 constructor(props) {
      super(props);
		debugger
      this.state = {
         Name: "Name from state...",
         Description: "Description from state...",
		 Members:[],
		 EmailConfig:'',
		 Data:[],
		 resetFlag: false,
		 MemData:[
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' },
]
      }
   }
 handleChange(event){debugger
	 
	 this.setState({Name:  event.target.value}) 
 }
 
setReset = () => {
   this.setState(prevState => ({ resetFlag: !prevState.resetFlag }));
};

// this.IntegrationDownshift.ClearRecord(); you can't call children's function directly

  Clear = (newItem) => {
	  if(!this.state.resetFlag) {
		this.setReset();
		}
	  alert();
	   this.setState({
      Name: ''
    });
	this.setState({
      Description: ''
    });
  }
  
   addNewSelectedItem = (newItem) => {
	   alert(newItem.length)
    // you can add new Item from a child.
    this.setState(prevState => ({ Data: [...prevState.Data, newItem] }));
  }
 handleChangeDesc(event){
	 
	 this.setState({Description:  event.target.value}) 
 }
  render() {
	  
     return (
        <div>
         
		    <TextField
        id="standard-name"
        label="Name"
		value={this.state.Name}
       fullWidth
        onChange={this.handleChange.bind(this)}
        margin="normal"
      /><br/>
	   <TextField
       fullWidth
        label="Description"
        multiline
        rows="4"
		value={this.state.Description}
       onChange={this.handleChangeDesc.bind(this)}
        margin="normal"
      />
        memeber
 <IntegrationDownshift Members={this.state.MemData} nen="asdf" addNewSelectedItemValue={this.addNewSelectedItem} resetFlag={this.state.resetFlag} setReset={this.setReset}/>

  <Button variant="contained" color="secondary"  onClick={this.Clear.bind(this)} >
        clear
      </Button>

        </div>
     );
  }
}

export default App;

