import React from "react"
import { Button, Card, CardHeader, CardBody, CardFooter } from "reactstrap"

export default ({ employee, location, toggle }) => (
    <section className="employee cardItem">
        <Card>
            <CardHeader>
                <h3>{employee.name}</h3>
            </CardHeader>
            <CardBody>
                {location.name}
            </CardBody>
            <CardFooter>
                <Button color="info" onClick={
                    toggle
                }>Edit Info</Button>
            </CardFooter>
        </Card>
    </section>
)