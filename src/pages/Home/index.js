import FormReusable from '../../components/FormReusable';
import TableReusable from '../../components/TableReusable';

const Home = ({ dataForThisPage, updatingFormMethodForThisPage, updatingFormObjectForThisPage, onPutMethod }) => {
    return(
        <>
            <h2>Home Page</h2>
            <TableReusable dataToPlaceInTheTable={dataForThisPage} updatingFormMethodForTheTable = {updatingFormMethodForThisPage} />
            <FormReusable isUpdatingForm dataToPlaceInTheUpdatingForm = {updatingFormObjectForThisPage} className = 'Address' updatingFormMethodForTheTable = {updatingFormMethodForThisPage} onPutMethod = {onPutMethod}/>
            <FormReusable isAddingForm headersToCreateTheAddingForm={Object.keys(dataForThisPage[0])} className = 'Address'/>
        </>
    )
}

export default Home;