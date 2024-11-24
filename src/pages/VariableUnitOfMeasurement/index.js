import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const VariableUnitOfMeasurement = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>VariableUnitOfMeasurement Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'VariableUnitOfMeasurement' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'VariableUnitOfMeasurement' onPutMethod = {onPutMethod}/>
        </>
    )
}

export default VariableUnitOfMeasurement;