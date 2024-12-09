import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const Shipment = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod, updateFormVisibleMethodForThisPage, addFormVisibleForTheAddFormOfThisPage, setAddFormVisibleForTheTableOfThisPage, closeUpdateFormForThisPage, closeAddFormForThisPage}) => {
    return(
        <>
            <h2>Shipment Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} className = 'Shipment' onPutMethod = {onPutMethod} setAddFormVisibleForTheTable = {setAddFormVisibleForTheTableOfThisPage}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'Shipment' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod} IsUpdateFormVisible = {updateFormVisibleMethodForThisPage} closeUpdateFormForTheForm = {closeUpdateFormForThisPage} />
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'Shipment' onPutMethod = {onPutMethod} isAddFormVisible = {addFormVisibleForTheAddFormOfThisPage} closeAddFormForTheForm = {closeAddFormForThisPage}/>       

        </>
    )
}

export default Shipment;