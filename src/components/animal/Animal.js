import React from "react"

export default ({ animal, customer, location }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <p className="animal__breed">{animal.breed}</p>
        <p className="animal__customer">Owner: {customer.name}</p>
        <p className="animal__location">Branch: {location.name}</p>
    </section>
)