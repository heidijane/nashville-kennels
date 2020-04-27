import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from "reactstrap"
import Animal from "../animal/Animal"
import { CustomerContext } from "../customers/CustomerProvider"
import { LocationContext } from "../locations/LocationProvider"
import { EditAnimalForm } from "../animal/EditAnimalForm"

export const SearchResults = ({ searchTerms }) => {
    const { animals, releaseAnimal } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)

    const [filteredAnimals, setFiltered] = useState([])
    const [selectedAnimal, setAnimal] = useState({animal: {id:0}, location: null, customer: null})

    //Toggle the animal details modal
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    //Toggle the edit animal details modal
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    useEffect(() => {
        if (searchTerms !== null && searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, animals])

    return (
        <div className="searchResults">
            <h3>Search Results</h3>
            <ListGroup>
                {
                    filteredAnimals.map(animal => <ListGroupItem tag="a" href="#" action
                        key={ animal.id }
                        onClick={() => {
                            const location = locations.find(l => l.id === animal.locationId)
                            const customer = customers.find(c => c.id === animal.customerId)

                            setAnimal({ animal, location, customer })
                            toggle()
                        }}
                    >{animal.name}</ListGroupItem>)
                }
                </ListGroup>

            <Modal isOpen={editModal} toggle={toggleEdit}>
                <ModalHeader toggle={toggleEdit}>
                    { selectedAnimal.animal.name }
                </ModalHeader>
                <ModalBody>
                    <EditAnimalForm key={selectedAnimal.animal.id} toggleEdit={toggleEdit} {...selectedAnimal} />
                </ModalBody>
            </Modal>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    Animal Details
                </ModalHeader>
                <ModalBody>
                    <Animal key={selectedAnimal.animal.id} {...selectedAnimal} />
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={() => {
                            toggle()
                            toggleEdit()
                    }}>Edit Info</Button>
                    <Button color="danger" onClick={() => {
                        releaseAnimal(selectedAnimal.animal.id)
                        toggle()
                    }}>Release to Owner</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}