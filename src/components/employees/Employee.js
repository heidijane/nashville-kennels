import React from "react"

export default ({ employee, location }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <p className="employee__location">{location.name}</p>
    </section>
)