import React from "react"
import { Card, CardHeader, CardBody, CardText } from "reactstrap"

export default ({ animal, customer, location }) => (
    <section className="animal cardItem">
        <Card>
            <CardHeader><h3>{animal.name}</h3></CardHeader>
            <CardBody>
                <CardText>{animal.breed}</CardText>
                <CardText>Owner: {customer.name}</CardText>
                <CardText>Branch: {location.name}</CardText>
                <CardText></CardText>
                </CardBody>
        </Card>
    </section>
)