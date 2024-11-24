import { Fragment } from 'react';
import { addSpacesAmongLetters } from '../../utils/stringUtils'
import { useState } from 'react';


const FormReusable = ({ isUpdatingForm, dataToPlaceInTheUpdatingForm, isAddingForm, headersToCreateTheAddingForm, className, updatingFormMethodForTheTable, onPutMethod, IsUpdateFormVisible = false, isAddFormVisible = false}) => {

    const [addFormData, setAddFormData] = useState([{}]);

    var updateObject = {};
    var updateObject2 = [];

    const inputListenerForUPdate = (event) => {
        Object.entries(dataToPlaceInTheUpdatingForm).map(([key, value]) =>{
            if(key === event.target.name){  
                updateObject[key] = event.target.value
            }else{
                updateObject[key] = value;
            }
        })
        updatingFormMethodForTheTable(updateObject);
    }

    const inputListenerForAdd = (event) => {
        Object.entries(updateObject2).map(([key, value]) =>{
            if (key === event.target.name) {
                updateObject2[key] = event.target.value
            }
        })
        if(updateObject2.length === 0){
            updateObject2[event.target.name] = event.target.value
        }
    }

    const sendPutToAPI = (event) => {
        event.preventDefault();
        onPutMethod(className, dataToPlaceInTheUpdatingForm, 'Update')
    }

    const sendPostToAPI = (event) => {
        event.preventDefault();
        onPutMethod(className, {...updateObject2}, 'Create')
    }

    return (
        <>
            {isUpdatingForm && IsUpdateFormVisible && (
                <>
                    <h1>Teste Updating Form</h1>
                    <form onSubmit={sendPutToAPI}>
                        {
                            Object.entries(dataToPlaceInTheUpdatingForm).slice(1).map(([key, value]) =>
                                <Fragment key={key}>
                                    <label htmlFor={key}>{addSpacesAmongLetters(key)}</label>
                                    <input 
                                        type='text'
                                        id={key}
                                        name={key}
                                        placeholder={addSpacesAmongLetters(key)}
                                        value={value} 
                                        onChange={inputListenerForUPdate}
                                    /><br />
                                </Fragment>
                            )
                        }
                        <input type='submit' value='Submit' />
                    </form>
                </>
            )}
            {isAddingForm && isAddFormVisible && (
                <>
                    <h1>Teste Adding Form</h1>
                    <form onSubmit={sendPostToAPI}>
                        {
                            headersToCreateTheAddingForm.slice(1).map(headerData =>
                                <Fragment key={headerData}>
                                    <label htmlFor={headerData}>{addSpacesAmongLetters(headerData)}</label>
                                    <input 
                                        type='text' 
                                        id={headerData}
                                        name={headerData}
                                        value={addFormData.headerData}
                                        onChange={inputListenerForAdd}
                                        placeholder={addSpacesAmongLetters(headerData)} 
                                    /><br />
                                </Fragment>
                            )
                        }
                        <input type='submit' value='Submit' />
                    </form>
                </>
            )}
        </>
    )
}

export default FormReusable;