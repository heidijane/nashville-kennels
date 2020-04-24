import React, { useState, useEffect } from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"
import { SearchBar } from "./search/SearchBar"
import { SearchResults } from "./search/SearchResults"
import "./Layout.css"
import "./Kennel.css"
import { ListGroup, ListGroupItem } from "reactstrap"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    const [activeList, setActiveList] = useState("locations")
    const [components, setComponents] = useState()

    const showAnimals = () => (
            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <AnimalList />
                    </LocationProvider>
                </CustomerProvider>
                
            </AnimalProvider>
    )

    const showLocations = () => (
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    )

    const showCustomers = () => (
        <CustomerProvider>
            <AnimalProvider>
                <CustomerList />
            </AnimalProvider>
        </CustomerProvider>
    )

    const showEmployees = () => (
        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>
    )

    /*
        This effect hook determines which list is shown
        based on the state of the `activeList` variable.
    */
    useEffect(() => {
        if (activeList === "customers") {
            setComponents(showCustomers)
        }
        else if (activeList === "locations") {
            setComponents(showLocations)
        }
        else if (activeList === "employees") {
            setComponents(showEmployees)
        } else if (activeList === "animals") {
            setComponents(showAnimals)
        }
    }, [activeList])

    return (
        <div className="mainContainer">
            <div className="searchContainer">
                <AnimalProvider>
                    <CustomerProvider>
                        <LocationProvider>
                            <SearchBar setTerms={setTerms} />
                            <SearchResults searchTerms={searchTerms} />
                        </LocationProvider>
                    </CustomerProvider>
                </AnimalProvider>
            </div>
            <div className="dataContainer">
                <h1>Nashville Kennels</h1>
                <small>Loving care when you're not there.</small>
                <ListGroup horizontal>
                        <ListGroupItem tag="a" href="#" action onClick={() => setActiveList("locations")}><h3>Locations</h3></ListGroupItem>
                        <ListGroupItem tag="a" href="#" action onClick={() => setActiveList("customers")}><h3>Customers</h3></ListGroupItem>
                        <ListGroupItem tag="a" href="#" action onClick={() => setActiveList("employees")}><h3>Employees</h3></ListGroupItem>
                        <ListGroupItem tag="a" href="#" action onClick={() => setActiveList("animals")}><h3>Animals</h3></ListGroupItem>
                    </ListGroup>
                    <div className="listDisplay">
                        {components}
                    </div>
                

            </div>
        </div>
    )
}