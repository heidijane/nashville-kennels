import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    return <div className="animals">{
        animals.map(animal => {
        const owner = customers.find(cust => cust.id === animal.customerId)
        const location = locations.find(loc => loc.id === animal.locationId)
    
        return <Animal key={animal.id}
                    location={location}
                    customer={owner}
                    animal={animal} />
    })
    }</div>
}