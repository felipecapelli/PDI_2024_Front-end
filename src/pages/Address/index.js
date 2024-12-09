import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const Address = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod, updateFormVisibleMethodForThisPage, addFormVisibleForTheAddFormOfThisPage, setAddFormVisibleForTheTableOfThisPage, closeUpdateFormForThisPage, closeAddFormForThisPage}) => {
    return(
        <>
            <h2>Address Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} className = 'Address' onPutMethod = {onPutMethod} setAddFormVisibleForTheTable = {setAddFormVisibleForTheTableOfThisPage}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'Address' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod} IsUpdateFormVisible = {updateFormVisibleMethodForThisPage} closeUpdateFormForTheForm = {closeUpdateFormForThisPage} />
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'Address' onPutMethod = {onPutMethod} isAddFormVisible = {addFormVisibleForTheAddFormOfThisPage} closeAddFormForTheForm = {closeAddFormForThisPage}/>
        </>
    )
}

export default Address;