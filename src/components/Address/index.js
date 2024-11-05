const Address = ({ addressList }) => {
    return (
        <>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <td>AddressNickname</td>
                        <td>AddressType</td>
                        <td>Street</td>
                        <td>Number</td>
                        <td>City</td>
                        <td>StateOrDistrict</td>
                        <td>PostalCode</td>
                        <td>Country</td>
                    </tr>
                </thead>
                <tbody>
                    {addressList.map(adreess =>
                        <tr key={adreess.adressNickname}>
                            <td>{adreess.adressNickname}</td>
                            <td>{adreess.adressType}</td>
                            <td>{adreess.street}</td>
                            <td>{adreess.number}</td>
                            <td>{adreess.city}</td>
                            <td>{adreess.stateOrDistrict}</td>
                            <td>{adreess.postalCode}</td>
                            <td>{adreess.country}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Address