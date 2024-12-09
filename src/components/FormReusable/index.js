import { Fragment } from 'react';
import { addSpacesAmongLetters } from '../../utils/stringUtils'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const FormReusable = ({ isUpdatingForm, dataToPlaceInTheUpdatingForm, isAddingForm, headersToCreateTheAddingForm, className, updatingFormMethodForTheTable, onPutMethod, IsUpdateFormVisible = false, isAddFormVisible = false, closeUpdateFormForTheForm, closeAddFormForTheForm }) => {

    const [addFormData, setAddFormData] = useState([{}]);

    var updateObject = {};
    var updateObject2 = [];

    const inputListenerForUPdate = (event) => {
        Object.entries(dataToPlaceInTheUpdatingForm).map(([key, value]) => {
            if (key === event.target.name) {
                updateObject[key] = event.target.value
            } else {
                updateObject[key] = value;
            }
        })
        updatingFormMethodForTheTable(updateObject);
    }

    const inputListenerForAdd = (event) => {
        Object.entries(updateObject2).map(([key, value]) => {
            if (key === event.target.name) {
                updateObject2[key] = event.target.value
            }
        })
        if (updateObject2.length === 0) {
            updateObject2[event.target.name] = event.target.value
        }
    }

    const sendPutToAPI = (event) => {
        event.preventDefault();
        onPutMethod(className, dataToPlaceInTheUpdatingForm, 'Update')
        handleUpdatingClose();
    }

    const sendPostToAPI = (event) => {
        event.preventDefault();
        onPutMethod(className, { ...updateObject2 }, 'Create')
    }
    const handleUpdatingClose = () => closeUpdateFormForTheForm()

    const handleAddingClose = () => closeAddFormForTheForm()

    return (
        <>
            {isUpdatingForm && IsUpdateFormVisible && (
                <>
                    <Modal show={IsUpdateFormVisible} onHide={handleUpdatingClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{className} Updating Form</Modal.Title>
                        </Modal.Header>
                        <Form>
                            <Modal.Body>

                                {
                                    Object.entries(dataToPlaceInTheUpdatingForm).slice(1).map(([key, value]) =>
                                        <FloatingLabel
                                            label={addSpacesAmongLetters(key)}
                                            htmlFor={key}
                                            className='mb-3'
                                            controlId={addSpacesAmongLetters(key)}
                                            key={key}
                                        >
                                            <Form.Control size="sm"
                                                type='text'
                                                id={key}
                                                name={key}
                                                placeholder={addSpacesAmongLetters(key)}
                                                value={value}
                                                onChange={inputListenerForUPdate}
                                            />
                                        </FloatingLabel >
                                    )
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleUpdatingClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={sendPutToAPI}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </>
            )}
            {isAddingForm && isAddFormVisible && (
                <>
                    <Modal show={isAddFormVisible} onHide={handleAddingClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{className} Adding Form</Modal.Title>
                        </Modal.Header>
                        <form>
                            <Modal.Body>
                                {
                                    headersToCreateTheAddingForm.slice(1).map(headerData =>
                                        <FloatingLabel
                                            label={addSpacesAmongLetters(headerData)}
                                            htmlFor={headerData}
                                            className='mb-3'
                                            controlId={addSpacesAmongLetters(headerData)}
                                            key={headerData}
                                        >
                                            <Form.Control size="sm"
                                                type='text'
                                                id={headerData}
                                                name={headerData}
                                                placeholder={addSpacesAmongLetters(headerData)}
                                                value={addFormData.headerData}
                                                onChange={inputListenerForAdd}
                                            />

                                        </FloatingLabel>
                                    )
                                }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleAddingClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={sendPostToAPI}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </>
            )}
        </>
    )
}

export default FormReusable;