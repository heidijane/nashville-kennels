import React from "react"

export default ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <p className="animal__breed">{animal.breed}</p>
    </section>
)