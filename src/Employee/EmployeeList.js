import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function EmployeeList({ employeeList }) {
  useEffect(() => {
    console.log(employeeList);
  }, []);
  return (
    <>
      {employeeList.user.map((employee) => {
        console.log('The employee', employee);
        return (
          <div className="empList" key={employee.id} style={{'border':'solid 1px black'}}>
            <p>{employee.id}</p>
            <p>{employee.name}</p>
            <p>{employee.age}</p>
            <p>{employee.gender}</p>
            <p>{employee.email}</p>
            <p>{employee.phoneNo}</p>
          </div>
        );
      })}
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    employeeList: state.employeeList,
  };
};
export default connect(mapStateToProps)(EmployeeList);
