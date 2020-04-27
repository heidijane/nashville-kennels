import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export const EditEmployeeForm = ({employee, toggle}) => {
    const { updateEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    
    // Separate state variable to track the animal as it is edited
    const [ updatedEmployee, setEmployee ] = useState(employee)

    const handleControlledInputChange = (event) => {
        const newEmployee = Object.assign({}, updatedEmployee)
        newEmployee[event.target.name] = event.target.value
        setEmployee(newEmployee)
    }

    const editEmployee = () => {
        const locationId = parseInt(updatedEmployee.locationId)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            updateEmployee({
                id: updatedEmployee.id,
                name: updatedEmployee.name,
                address: updatedEmployee.address,
                locationId: locationId
            })
                .then(toggle)
        }
    }

    return (
        <form className="employeeForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        name="name"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                        defaultValue={employee.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeAddress">Address: </label>
                    <input
                        type="text"
                        id="employeeAddress"
                        name="address"
                        required
                        className="form-control"
                        placeholder="Street address"
                        defaultValue={employee.address}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        name="locationId"
                        id="employeeLocation"
                        className="form-control"
                        defaultValue={employee.locationId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        editEmployee()
                    }
                }
                className="btn btn-primary">
                Edit Employee Info
            </button>
        </form>
    )
}