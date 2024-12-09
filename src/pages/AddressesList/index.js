import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const AddressesList = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod, updateFormVisibleMethodForThisPage, addFormVisibleForTheAddFormOfThisPage, setAddFormVisibleForTheTableOfThisPage, closeUpdateFormForThisPage, closeAddFormForThisPage}) => {
    return(
        <>
            <h2>Addresses List Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} className = 'AddressesList' onPutMethod = {onPutMethod} setAddFormVisibleForTheTable = {setAddFormVisibleForTheTableOfThisPage}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'AddressesList' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod} IsUpdateFormVisible = {updateFormVisibleMethodForThisPage} closeUpdateFormForTheForm = {closeUpdateFormForThisPage} />
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'AddressesList' onPutMethod = {onPutMethod} isAddFormVisible = {addFormVisibleForTheAddFormOfThisPage} closeAddFormForTheForm = {closeAddFormForThisPage}/>       
        </>
    )
}

export default AddressesList;