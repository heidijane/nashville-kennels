import React, { useContext } from "react"
import { Card, CardHeader, CardBody, CardText } from "reactstrap"
import { AnimalContext } from "../animal/AnimalProvider"

export default ({ customer }) => {
    const { animals } = useContext(AnimalContext)
    const filteredAnimals = animals.filter(animal => animal.customerId === customer.id)

    return (
    <section className="customer cardItem">
        <Card>
            <CardHeader><h3>{customer.name}</h3></CardHeader>
            <CardBody>
                {customer.address ? <CardText>{customer.address}</CardText> : ""}
                {filteredAnimals.length !== 0 ? <CardText>Pets in our care: {filteredAnimals.map(animal => animal.name).join(", ")}</CardText> : ""}
            </CardBody>
        </Card>
    </section>
    )
}