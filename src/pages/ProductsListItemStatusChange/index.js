import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const ProductsListItemStatusChange = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>ProductsListItemStatusChange Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'ProductsListItemStatusChange' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'ProductsListItemStatusChange' onPutMethod = {onPutMethod}/>
        </>
    )
}

export default ProductsListItemStatusChange;