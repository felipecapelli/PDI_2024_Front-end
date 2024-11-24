import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const ProductsListItemStatus = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>ProductsListItemStatus Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'ProductsListItemStatus' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'ProductsListItemStatus' onPutMethod = {onPutMethod}/>
        </>
    )
}

export default ProductsListItemStatus;