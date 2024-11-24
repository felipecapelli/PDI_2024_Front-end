import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const Shipment = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>Shipment Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'Shipment' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'Shipment' onPutMethod = {onPutMethod}/>
        </>
    )
}

export default Shipment;