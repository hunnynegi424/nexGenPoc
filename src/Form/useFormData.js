import { useState, useEffect } from 'react';

export default function(props) {
  const [empState, setEmpState] = useState({
    employee_name: '',
    employee_salary: '',
    employee_age: '',
    profile_image: '',
  });

  useEffect(() => {
    localStorage.setItem('employee_data', JSON.stringify([]));
  }, [])

  function onSubmitHandler(event) {
    event.preventDefault();
    const storedEmpData = localStorage.getItem('employee_data');
    const parsedStoredEmpData = storedEmpData && JSON.parse(storedEmpData);
    parsedStoredEmpData.push(empState);
    localStorage.setItem('employee_data', JSON.stringify(parsedStoredEmpData));
    props.setRefreshTable(true);
    document.employeeForm.reset();
  }

  function onInputChangeHandler(event, field) {
    event?.target?.value && setEmpState(prev => ({ ...prev, [field]: event?.target?.value}));
  }

  return {
    onSubmitHandler, onInputChangeHandler,
  }
}