import React, { useState } from "react"
import { Button, Card, CardHeader, CardBody, CardFooter, Modal, ModalHeader, ModalBody } from "reactstrap"
import { EditEmployeeForm } from "./EditEmployeeForm"

export default ({ employee, location }) => {
    const [editModal, setEditModal] = useState(false)
    const toggle = () => setEditModal(!editModal)

    return (
    <>
        <section className="employee cardItem">
            <Card>
                <CardHeader>
                    <h3>{employee.name}</h3>
                </CardHeader>
                <CardBody>
                    {location.name}
                </CardBody>
                <CardFooter>
                    <Button color="info" onClick={
                        toggle
                    }>Edit Info</Button>
                </CardFooter>
            </Card>
        </section>

        <Modal isOpen={editModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
            Edit Employee Info
        </ModalHeader>
        <ModalBody>
            <EditEmployeeForm toggle={toggle} employee={employee} />
        </ModalBody>
        </Modal>
    </>
    )
}