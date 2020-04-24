import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animals.css"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import AnimalForm from "./AnimalForm"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return <>
    <h2>Animals</h2>
    <Button onClick={
        () => {
                const userId = localStorage.getItem("kennel_customer")
                if(userId){
                    // If the user is authenticated, show the animal form
                    toggle()
                }
            }
        }
        >Make Appointment</Button>
    <div className="animals cardGroup">{
        animals.map(animal => {
        const owner = customers.find(cust => cust.id === animal.customerId)
        const location = locations.find(loc => loc.id === animal.locationId)
    
        return <Animal key={animal.id}
                    location={location}
                    customer={owner}
                    animal={animal} />
    })
    }</div>

    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
            Admit an Animal
        </ModalHeader>
        <ModalBody>
            <AnimalForm toggler={toggle} />
        </ModalBody>
    </Modal>

    </>
}