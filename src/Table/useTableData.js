import { useEffect, useState } from "react";

export default function(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    console.log('here');
    if(props.refreshTable) {
      try {
        const employeeData = localStorage.getItem('employee_data');
        const parsedData = employeeData && JSON.parse(employeeData)
        parsedData && setState(parsedData);
      } catch {
        console.log("Something Went Wrong")
      } finally {
        props.setRefreshTable(false);
      }
    }
  }, [props.refreshTable]);

  function onFilterChangeHandler(event, col) {
    const filtervalue = event?.target?.value;
    const filterKey = col;
    const employeeData = localStorage.getItem('employee_data');
    const parsedData = employeeData && JSON.parse(employeeData)
    const searchFiltered = parsedData.filter(m => m[filterKey]?.toLowerCase() === filtervalue?.toLowerCase());
    setState(searchFiltered);
    if (filtervalue === '') {
      setState(parsedData);
    }
  }

  return {
    state, onFilterChangeHandler,
  }
}