import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const ProductsListItemStatus = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod, updateFormVisibleMethodForThisPage, addFormVisibleForTheAddFormOfThisPage, setAddFormVisibleForTheTableOfThisPage, closeUpdateFormForThisPage, closeAddFormForThisPage}) => {
    return(
        <>
            <h2>Products List Item Status Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} className = 'ProductsListItemStatus' onPutMethod = {onPutMethod} setAddFormVisibleForTheTable = {setAddFormVisibleForTheTableOfThisPage}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'ProductsListItemStatus' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod} IsUpdateFormVisible = {updateFormVisibleMethodForThisPage} closeUpdateFormForTheForm = {closeUpdateFormForThisPage} />
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'ProductsListItemStatus' onPutMethod = {onPutMethod} isAddFormVisible = {addFormVisibleForTheAddFormOfThisPage} closeAddFormForTheForm = {closeAddFormForThisPage}/>       

        </>
    )
}

export default ProductsListItemStatus;