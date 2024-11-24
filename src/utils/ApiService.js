export const ApiService = {
    Get : apiAddress =>{
        return fetch(apiAddress)
        .then(res => res.json());
    },
    Post : (apiAddress, messageBody) => {
        //console.log("Teste Felipe API")
        //console.log(messageBody)
        return fetch(apiAddress, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageBody)
            }
        )
        .then(res => res.json());
    },
    Put : (apiAddress, idToUpdate, messageBody) => {
        //console.log("Teste Felipe API PUT")
        //console.log(messageBody)
        return fetch(`${apiAddress}/${idToUpdate}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(messageBody)
            }
        )
        //.then(res => res.json())
    },
    Delete : (apiAddress, idToDelete) => {
        return fetch(`${apiAddress}/${idToDelete}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        //.then(res => res.json());
    }
}

export const ListOfAPIs = {
    Address : {
        API :'http://localhost:5249/Address'
    },
    AddressesList : {
        API :'http://localhost:5249/AddressesList'
    },
    AddressType : {
        API :'http://localhost:5249/AddressType'
    },
    BaseCurrency : {
        API :'http://localhost:5249/BaseCurrency'
    },
    BaseUnitOfMeasurement : {
        API :'http://localhost:5249/BaseUnitOfMeasurement'
    },
    CorporateEntity : {
        API :'http://localhost:5249/CorporateEntity'
    },
    CurrencyQuotation : {
        API :'http://localhost:5249/CurrencyQuotation'
    },
    CustomersSupplier : {
        API :'http://localhost:5249/CustomersSupplier'
    },
    Inventory : {
        API :'http://localhost:5249/Inventory'
    },
    NaturalPearson : {
        API :'http://localhost:5249/NaturalPearson'
    },
    Order : {
        API :'http://localhost:5249/Order'
    },
    OrderStatusChange : {
        API :'http://localhost:5249/OrderStatusChange'
    },
    OrderStatus : {
        API :'http://localhost:5249/OrderStatus'
    },
    Product : {
        API :'http://localhost:5249/Product'
    },
    ProductListItem : {
        API :'http://localhost:5249/ProductListItem'
    },
    ProductsListItemStatusChange : {
        API :'http://localhost:5249/ProductsListItemStatusChange'
    },
    ProductsListItemStatus : {
        API :'http://localhost:5249/ProductsListItemStatus'
    },
    Shipment : {
        API :'http://localhost:5249/Shipment'
    },
    ShipmentStatusChange : {
        API :'http://localhost:5249/ShipmentStatusChange'
    },
    ShipmentStatus : {
        API :'http://localhost:5249/ShipmentStatus'
    },
    VariableUnitOfMeasurement : {
        API :'http://localhost:5249/VariableUnitOfMeasurement'
    }
}

//export default ApiService;