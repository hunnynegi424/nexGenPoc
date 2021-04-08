import { useState } from 'react';
import './App.css';
import EmployeeForm from './Form';
import EmployeeTable from './Table';

export default function App() {
  const [refreshTable, setRefreshTable] = useState(true);
  return (
    <div className="App">
      <EmployeeForm setRefreshTable={setRefreshTable}/>
      <EmployeeTable refreshTable={refreshTable} setRefreshTable={setRefreshTable} />
    </div>
  );
}
