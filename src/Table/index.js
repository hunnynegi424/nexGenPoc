import React from 'react';
import columnSettings from '../ColumnSettings';
import './table.css';
import useTableData from './useTableData';

export default function EmployeeTable(props) {

  const { state, onFilterChangeHandler } = useTableData(props);

  return (<div className="tableContainer">
    <table>
      <thead>
        {}
        <th>Employee Name</th>
        <th>Employee Salary</th>
        <th>Employee Age</th>
        <th>Profile Image</th>
      </thead>
      <tbody>
        {columnSettings.map(n => (<>
          <td>
            <tr><input type="text" onChange={e => onFilterChangeHandler(e, n.key)}/></tr>
          </td>
        </>))}
      </tbody>
      <tbody>
        {columnSettings.map(f => (<>
          <td>
            {state.map(m => (<>
              <tr>{m[f.key]}</tr>
            </>))}
          </td>
        </>))}
      </tbody>
    </table>
    <button className="refreshBtn" onClick={() => props.setRefreshTable(true)}>Refresh Table</button>
  </div>);
}