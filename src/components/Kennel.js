import React from "react"
import "./Kennel.css"
import "./animal/Animals.css"
import "./employees/Employee.css"
import "./locations/Location.css"
import "./customers/Customer.css"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import AnimalList from "./animal/AnimalList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import { CustomerProvider } from "./customers/CustomerProvider"
import CustomerList from "./customers/CustomerList"

export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
            <AnimalProvider>
                <CustomerProvider>
                    <LocationProvider>
                        <AnimalList />
                    </LocationProvider>
                </CustomerProvider>
                
            </AnimalProvider>

        <h2>Employees</h2>
            <EmployeeProvider>
                <LocationProvider>
                    <EmployeeList />
                </LocationProvider>                
            </EmployeeProvider>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>



        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>
    </>
)