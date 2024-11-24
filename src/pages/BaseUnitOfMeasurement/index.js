import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const BaseUnitOfMeasurement = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>BaseUnitOfMeasurement Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'BaseUnitOfMeasurement' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'BaseUnitOfMeasurement' onPutMethod = {onPutMethod}/>
        </>
    )
}

export default BaseUnitOfMeasurement;