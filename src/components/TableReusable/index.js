import { addSpacesAmongLetters } from '../../utils/stringUtils'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TableReusable = ({ dataToPlaceInTheTable, updatingFormMethodForTheTable, className, onPutMethod, setAddFormVisibleForTheTable}) => {

    const tableRowClick = (clickedItem) => {
        updatingFormMethodForTheTable(clickedItem);
    }

    const openAddFormClick = (clickedItem) => {
        setAddFormVisibleForTheTable(true);
    }

    const deleteClick = (clickedItem) => {
        var method = 'Delete';
        onPutMethod(className, clickedItem, method);
    }

    return (
        <>
            <Button variant="primary" id='add-button' onClick={() => openAddFormClick()}>Add</Button>
            <Table bordered hover>
                <thead>
                    <tr>
                        {
                            Object.keys(dataToPlaceInTheTable[0]).map(headData => {
                                var headerNamePrettierForUser = addSpacesAmongLetters(headData)
                                return(
                                    <th key={headData}>{headerNamePrettierForUser}</th>
                                )
                            })
                        }
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    dataToPlaceInTheTable.map((item, index) => {
                        return(
                            <tr key={index} >
                                {
                                    Object.entries(item).map(([key, value]) => {
                                        if(value === true){
                                            return (<td key={key} onClick={() => tableRowClick(item)}>{'True'}</td>)  
                                        }
                                        if(value === false){
                                            return (<td key={key} onClick={() => tableRowClick(item)}>{'False'}</td>)  
                                        }
                                        return (<td key={key} onClick={() => tableRowClick(item)}>{value}</td>)
                                    })
                                }
                                <th><button key={index} onClick={() => deleteClick(item)}>Delete</button></th>
                            </tr>
                        )  
                    })
                }
                </tbody>
            </Table >
            <Button variant="primary" id='add-button' onClick={() => openAddFormClick()}>Add</Button>
        </>
    )
}

export default TableReusable