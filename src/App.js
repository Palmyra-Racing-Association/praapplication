import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from "react-jsonschema-form";
import schema from './schemas/FormSchema';
import axios from 'axios';
import Env from './Env'

let minLegalAge = new Date();
minLegalAge.setFullYear(minLegalAge.getFullYear() - 18);
let realisticMaxAge = new Date();
realisticMaxAge.setFullYear(realisticMaxAge.getFullYear()-72);
const uischema = {
  "firstName": {
    "ui:autofocus": true,
  },
  "birthday": {
    "ui:widget": "alt-date",
    "ui:options": {
      "yearsRange": [
        realisticMaxAge.getFullYear(),
        minLegalAge.getFullYear()
      ]
    }
  },
  "familyMembers": {
    "ui:widget": "textarea"
  }
};
const apiUrl = Env.api_url;

const onSubmit = ({formData}) => {
  console.log("Data submitted: ",  formData);
  document.getElementById("submitBtn").disabled = true;
  document.getElementById("submitted").style.visibility= "visible" ;
    
  axios.post(apiUrl+'/members/apply/', formData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
}

function validate(formData, errors) {
  let invalidNameChars = ['/', ' '];
  let nameFields = ['firstName', 'lastName'];

  for (let invalidChar of invalidNameChars) {
    for (let nameField of nameFields) {
      if (formData[nameField] && formData[nameField].includes(invalidChar)) {
        errors[nameField].addError(
          `Are you trying to add a family member?  Please add one name to first name/last name, 
            and the rest in the family members section, and remove all slashes and spaces from ` + nameField
        );
      }
    }
  }
  return errors;
}

export default class App extends React.Component {
 
  async componentWillMount() {
  }

  render() { 
    const log = (type) => console.log.bind(console, type);

    return (
      <div className='formdiv'>
      <Form schema={schema} uiSchema={uischema} liveValidate={true}
          onSubmit={onSubmit}
          onError={log("errors")}
          validate={validate}>
        <div>
          Please <a target="new" href="http://www.palmyramx.com/wordpress/wp-content/uploads/2017/02/PRA-Rules-And-Sound.pdf">click here to read the rules </a> 
          before submitting your application if you have any questions on the rules.  Note that all rules are subject to change.
          <p/>
          If you prefer to use a paper form, you can find that <a href="http://www.palmyramx.com/wordpress/wp-content/uploads/2012/01/PRA-Membership-Application-2013-V1.pdf">here</a>.
          <p/>
          By submitting this application, you agree to recieve emails and text messages from Palmyra Racing Association.
        </div>
        <div>
          <button id="submitBtn" type="submit" className="btn btn-info">Submit</button>
        </div>
        <div id="submitted">
          Thanks for submitting your application!  We will be in touch soon!
        </div>
      </Form>
      </div>
    );
  }
}