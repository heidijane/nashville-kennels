import React from "react"
import { Card, CardHeader, CardBody } from "reactstrap"

export default ({ employee, location }) => (
    <section className="employee cardItem">
        <Card>
            <CardHeader>
                <h3>{employee.name}</h3>
            </CardHeader>
            <CardBody>
                {location.name}
            </CardBody>
        </Card>
    </section>
)