import React from "react"
import { Card, CardHeader, CardBody, CardText } from "reactstrap"

export default ({ location }) => (
    <section className="location cardItem">
        <Card>
            <CardHeader>
                <h3>{location.name}</h3>
            </CardHeader>
            <CardBody>
                <CardText>{location.address}</CardText>
            </CardBody>
        </Card>
    </section>
)