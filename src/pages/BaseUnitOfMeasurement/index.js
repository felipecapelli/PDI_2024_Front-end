import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const BaseUnitOfMeasurement = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod, updateFormVisibleMethodForThisPage, addFormVisibleForTheAddFormOfThisPage, setAddFormVisibleForTheTableOfThisPage, closeUpdateFormForThisPage, closeAddFormForThisPage}) => {
    return(
        <>
            <h2>Base Unit Of Measurement Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} className = 'BaseUnitOfMeasurement' onPutMethod = {onPutMethod} setAddFormVisibleForTheTable = {setAddFormVisibleForTheTableOfThisPage}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'BaseUnitOfMeasurement' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod} IsUpdateFormVisible = {updateFormVisibleMethodForThisPage} closeUpdateFormForTheForm = {closeUpdateFormForThisPage} />
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'BaseUnitOfMeasurement' onPutMethod = {onPutMethod} isAddFormVisible = {addFormVisibleForTheAddFormOfThisPage} closeAddFormForTheForm = {closeAddFormForThisPage}/>       

        </>
    )
}

export default BaseUnitOfMeasurement;