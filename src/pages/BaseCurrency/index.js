import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const BaseCurrency = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>BaseCurrency Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'BaseCurrency' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'BaseCurrency' onPutMethod = {onPutMethod}/>
        </>
    )
}

export default BaseCurrency;