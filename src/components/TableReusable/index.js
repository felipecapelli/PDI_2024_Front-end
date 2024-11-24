import { addSpacesAmongLetters } from '../../utils/stringUtils'

const TableReusable = ({ dataToPlaceInTheTable, updatingFormMethodForTheTable, className, onPutMethod, setAddFormVisibleForTheTable }) => {

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
            <button id='add-button' onClick={() => openAddFormClick()}>Add</button>
            <table className="table table-success">
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
                            <tr key={index} onClick={() => tableRowClick(item)} >
                                {
                                    Object.entries(item).map(([key, value]) => {
                                        if(value === true){
                                            return (<td key={key}>{'True'}</td>)  
                                        }
                                        if(value === false){
                                            return (<td key={key}>{'False'}</td>)  
                                        }
                                        return (<td key={key}>{value}</td>)
                                    })
                                }
                                <th><button key={index} onClick={() => deleteClick(item)}>Delete</button></th>
                            </tr>
                        )  
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default TableReusable