import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const NaturalPearson = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>NaturalPearson Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'NaturalPearson' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'NaturalPearson' onPutMethod = {onPutMethod}/>
        </>
    )
}

export default NaturalPearson;