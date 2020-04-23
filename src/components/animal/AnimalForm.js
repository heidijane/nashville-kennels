import React, { useContext, useRef } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { AnimalContext } from "./AnimalProvider"



export default props => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const breed = useRef()

    const constructNewAnimal = () => {
        const userId = parseInt(localStorage.getItem("kennel_customer"))
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addAnimal({
                name: name.current.value,
                breed: breed.current.value,
                customerId: userId,
                locationId: locationId
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="animalForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Pet Name: </label>
                    <input
                        type="text"
                        id="animalName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Breed: </label>
                    <input
                        type="text"
                        id="animalBreed"
                        ref={breed}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Animal's Breed or Species"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Check-In Location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="animalLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewAnimal()
                    }
                }
                className="btn btn-primary">
                Save Animal
            </button>
        </form>
    )
}