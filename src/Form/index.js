import React from 'react';
import columnSettings from '../ColumnSettings';
import useFormData from './useFormData';

export default function EmployeeForm(props) {

  const { onSubmitHandler, onInputChangeHandler } = useFormData(props);

  return (<div>
    <form onSubmit={(e) => onSubmitHandler(e)}>
      {columnSettings.map(f => (<>
        <label for={f.key}>{f.name}: </label>
        <input
          id={f.key}
          type="text"
          onChange={(e) => onInputChangeHandler(e, f.key)}
        />
        <br/>
      </>))}
      <input type="submit" value="Submit" />
    </form>
  </div>);
}
