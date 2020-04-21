import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"
import { LocationContext } from "../locations/LocationProvider"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    return (
        <div className="employees">
        {
            employees.map(employee => {
            const matchingLocation = locations.find(loc => loc.id === employee.locationId)
            return <Employee key={employee.id}
                        employee={employee}
                        location={matchingLocation} />
        })
        }
        </div>
    )
}