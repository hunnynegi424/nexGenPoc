import React from 'react';
import columnSettings from '../ColumnSettings';
import useFormData from './useFormData';
import './form.css';

export default function EmployeeForm(props) {

  const { onSubmitHandler, onInputChangeHandler } = useFormData(props);

  return (<div className="formContainer">
    <h3>Employee Form</h3>
    <form onSubmit={(e) => onSubmitHandler(e)} autocomplete="off">
      {columnSettings.map(f => (<>
        <label for={f.key}>{f.name}: </label>
        <input
          id={f.key}
          type="text"
          onChange={(e) => onInputChangeHandler(e, f.key)}
        />
        <br/>
      </>))}
      <input className="submitBtn" type="submit" value="Submit" />
    </form>
  </div>);
}
