import { useState, useEffect } from 'react';
import Menu from './pages/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Address from './pages/Address'
import AddressesList from './pages/AddressesList'
import AddressType from './pages/AddressType'
import BaseCurrency from './pages/BaseCurrency'
import BaseUnitOfMeasurement from './pages/BaseUnitOfMeasurement'
import CorporateEntity from './pages/CorporateEntity'
import CurrencyQuotation from './pages/CurrencyQuotation'
import CustomersSupplier from './pages/CustomersSupplier'
import Inventory from './pages/Inventory'
import NaturalPearson from './pages/NaturalPearson'
import Order from './pages/Order'
import OrderStatusChange from './pages/OrderStatusChange'
import OrderStatus from './pages/OrderStatus'
import Product from './pages/Product'
import ProductListItem from './pages/ProductListItem'
import ProductsListItemStatusChange from './pages/ProductsListItemStatusChange'
import ProductsListItemStatus from './pages/ProductsListItemStatus'
import Shipment from './pages/Shipment'
import ShipmentStatusChange from './pages/ShipmentStatusChange'
import ShipmentStatus from './pages/ShipmentStatus'
import VariableUnitOfMeasurement from './pages/VariableUnitOfMeasurement'
import { ApiService, ListOfAPIs} from './utils/ApiService';

function App() {
  const [address, SetAddress] = useState([{}])
  const [addressesList, SetAddressesList] = useState([{}])
  const [addressType, SetAddressType] = useState([{}])
  const [baseCurrency, SetBaseCurrency] = useState([{}])
  const [baseUnitOfMeasurement, SetBaseUnitOfMeasurement] = useState([{}])
  const [corporateEntity, SetCorporateEntity] = useState([{}])
  const [currencyQuotation, SetCurrencyQuotation] = useState([{}])
  const [customersSupplier, SetCustomersSupplier] = useState([{}])
  const [inventory, SetInventory] = useState([{}])
  const [naturalPearson, SetNaturalPearson] = useState([{}])
  const [order, SetOrder] = useState([{}])
  const [orderStatusChange, SetOrderStatusChange] = useState([{}])
  const [orderStatus, SetOrderStatus] = useState([{}])
  const [product, SetProduct] = useState([{}])
  const [productListItem, SetProductListItem] = useState([{}])
  const [productsListItemStatusChange, SetProductsListItemStatusChange] = useState([{}])
  const [productsListItemStatus, SetProductsListItemStatus] = useState([{}])
  const [shipment, SetShipment] = useState([{}])
  const [shipmentStatusChange, SetShipmentStatusChange] = useState([{}])
  const [shipmentStatus, SetShipmentStatus] = useState([{}])
  const [variableUnitOfMeasurement, SetVariableUnitOfMeasurement] = useState([{}])

  const [editingFormObject, SetEditingFormObject] = useState([{}])
  const [updateFormVisible, SetUpdateFormVisible] = useState(false)

  const [addFormVisible, SetAddFormVisible] = useState(false)

  const changeDataToPlaceInTheUpdatingForm = (clickedItem) => {
    SetUpdateFormVisible(true)
    SetEditingFormObject(clickedItem);
  }

  const closeTheUpdatingForm = (clickedItem) => {
    SetUpdateFormVisible(false)
  }

  const closeTheAddingForm = (clickedItem) => {
    SetAddFormVisible(false)
  }

  const onPutForm = (className, objectUpdated, method) => {
    switch (className) {
      case 'Address':
        methodChooser(method, address, SetAddress, objectUpdated, ListOfAPIs.Address.API)
        break;
      case 'AddressesList':
        methodChooser(method, addressesList, SetAddressesList, objectUpdated, ListOfAPIs.AddressesList.API)
        break;
      case 'AddressType':
        methodChooser(method, addressType, SetAddressType, objectUpdated, ListOfAPIs.AddressType.API)
        break;
      case 'BaseCurrency':
        methodChooser(method, baseCurrency, SetBaseCurrency, objectUpdated, ListOfAPIs.BaseCurrency.API)
        break;
      case 'BaseUnitOfMeasurement':
        methodChooser(method, baseUnitOfMeasurement, SetBaseUnitOfMeasurement, objectUpdated, ListOfAPIs.BaseUnitOfMeasurement.API)
        break;
      case 'CorporateEntity':
        methodChooser(method, corporateEntity, SetCorporateEntity, objectUpdated, ListOfAPIs.CorporateEntity.API)
        break;
      case 'CurrencyQuotation':
        methodChooser(method, currencyQuotation, SetCurrencyQuotation, objectUpdated, ListOfAPIs.CurrencyQuotation.API)
        break;
      case 'CustomersSupplier':
        methodChooser(method, customersSupplier, SetCustomersSupplier, objectUpdated, ListOfAPIs.CustomersSupplier.API)
        break;
      case 'Inventory':
        methodChooser(method, inventory, SetInventory, objectUpdated, ListOfAPIs.Inventory.API)
        break;
      case 'NaturalPearson':
        methodChooser(method, naturalPearson, SetNaturalPearson, objectUpdated, ListOfAPIs.NaturalPearson.API)
        break;
      case 'Order':
        methodChooser(method, order, SetOrder, objectUpdated, ListOfAPIs.Order.API)
        break;
      case 'OrderStatusChange':
        methodChooser(method, orderStatusChange, SetOrderStatusChange, objectUpdated, ListOfAPIs.OrderStatusChange.API)
        break;
      case 'OrderStatus':
        methodChooser(method, orderStatus, SetOrderStatus, objectUpdated, ListOfAPIs.OrderStatus.API)
        break;
      case 'Product':
        methodChooser(method, product, SetProduct, objectUpdated, ListOfAPIs.Product.API)
        break;
      case 'ProductListItem':
        methodChooser(method, productListItem, SetProductListItem, objectUpdated, ListOfAPIs.ProductListItem.API)
        break;
      case 'ProductsListItemStatusChange':
        methodChooser(method, productsListItemStatusChange, SetProductsListItemStatusChange, objectUpdated, ListOfAPIs.ProductsListItemStatusChange.API)
        break;
      case 'ProductsListItemStatus':
        methodChooser(method, productsListItemStatus, SetProductsListItemStatus, objectUpdated, ListOfAPIs.ProductsListItemStatus.API)
        break;
      case 'Shipment':
        methodChooser(method, shipment, SetShipment, objectUpdated, ListOfAPIs.Shipment.API)
        break;
      case 'ShipmentStatusChange':
        methodChooser(method, shipmentStatusChange, SetShipmentStatusChange, objectUpdated, ListOfAPIs.ShipmentStatusChange.API)
        break;
      case 'ShipmentStatus':
        methodChooser(method, shipmentStatus, SetShipmentStatus, objectUpdated, ListOfAPIs.ShipmentStatus.API)
        break;
      case 'VariableUnitOfMeasurement':
        methodChooser(method, variableUnitOfMeasurement, SetVariableUnitOfMeasurement, objectUpdated, ListOfAPIs.VariableUnitOfMeasurement.API)
        break;
    }
  }

  const methodChooser = (method, object, setObject, objectUpdated, api) => {
    switch (method) {
      case 'Update':
        //ApiService.Get(`${api}`).then(res => console.log(res))
        reusableUpdate(object, setObject, objectUpdated, api)
        break;
      case 'Create':
        reusableCreate(object, setObject, objectUpdated, api)
        break;
      case 'Delete':
        reusableDelete(object, setObject, objectUpdated, api)
        break;
    }
  }
  
  const reusableUpdate = (object, setObject, objectUpdated, api) => {
    var NewObjectID = Object.values(objectUpdated)[0];
    var newListEdited = object.map((item) => {
        if(Object.values(item)[0] === NewObjectID){
          return (objectUpdated)
        }
        return (item)
    })
    ApiService.Put(`${api}`, NewObjectID, objectUpdated).then(console.log('Update Done By Felipe'))
    setObject([...newListEdited])
  }

  const reusableCreate = (object, setObject, objectUpdated, api) => {
    ApiService.Post(`${api}`, objectUpdated).then(res => {
      objectUpdated = res;
      setObject([objectUpdated, ...object])
    })
  }

  const reusableDelete = (object, setObject, objectUpdated, api) => {
    var NewObjectID = Object.values(objectUpdated)[0];
    var objectToUpdate = object.filter(item => Object.values(item)[0] !== NewObjectID)
    ApiService.Delete(`${api}`, NewObjectID).then(console.log('Deleted Done By Felipe'))
    setObject([...objectToUpdate])
  }

  useEffect(() => {
    ApiService.Get(`${ListOfAPIs.Address.API}`)
      .then(data => SetAddress(data));
    ApiService.Get(`${ListOfAPIs.AddressesList.API}`)
      .then(data => SetAddressesList(data));
    ApiService.Get(`${ListOfAPIs.AddressType.API}`)
      .then(data => SetAddressType(data));
    ApiService.Get(`${ListOfAPIs.BaseCurrency.API}`)
      .then(data => SetBaseCurrency(data));
    ApiService.Get(`${ListOfAPIs.BaseUnitOfMeasurement.API}`)
      .then(data => SetBaseUnitOfMeasurement(data));
    ApiService.Get(`${ListOfAPIs.CorporateEntity.API}`)
      .then(data => SetCorporateEntity(data));
    ApiService.Get(`${ListOfAPIs.CurrencyQuotation.API}`)
      .then(data => SetCurrencyQuotation(data));
    ApiService.Get(`${ListOfAPIs.CustomersSupplier.API}`)
      .then(data => SetCustomersSupplier(data));
    ApiService.Get(`${ListOfAPIs.Inventory.API}`)
      .then(data => SetInventory(data));
    ApiService.Get(`${ListOfAPIs.NaturalPearson.API}`)
      .then(data => SetNaturalPearson(data));
    ApiService.Get(`${ListOfAPIs.Order.API}`)
      .then(data => SetOrder(data));
    ApiService.Get(`${ListOfAPIs.OrderStatusChange.API}`)
      .then(data => SetOrderStatusChange(data));
    ApiService.Get(`${ListOfAPIs.OrderStatus.API}`)
      .then(data => SetOrderStatus(data));
    ApiService.Get(`${ListOfAPIs.Product.API}`)
      .then(data => SetProduct(data));
    ApiService.Get(`${ListOfAPIs.ProductListItem.API}`)
      .then(data => SetProductListItem(data));
    ApiService.Get(`${ListOfAPIs.ProductsListItemStatusChange.API}`)
      .then(data => SetProductsListItemStatusChange(data));
    ApiService.Get(`${ListOfAPIs.ProductsListItemStatus.API}`)
      .then(data => SetProductsListItemStatus(data));
    ApiService.Get(`${ListOfAPIs.Shipment.API}`)
      .then(data => SetShipment(data));
    ApiService.Get(`${ListOfAPIs.ShipmentStatusChange.API}`)
      .then(data => SetShipmentStatusChange(data));
    ApiService.Get(`${ListOfAPIs.ShipmentStatus.API}`)
      .then(data => SetShipmentStatus(data));
    ApiService.Get(`${ListOfAPIs.VariableUnitOfMeasurement.API}`)
      .then(data => SetVariableUnitOfMeasurement(data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Menu/>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<PageNotFound />} />

            <Route path="Address" element={<Address dataForThisPage={address} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="AddressesList" element={<AddressesList dataForThisPage={addressesList} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="AddressType" element={<AddressType dataForThisPage={addressType} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="BaseCurrency" element={<BaseCurrency dataForThisPage={baseCurrency} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="BaseUnitOfMeasurement" element={<BaseUnitOfMeasurement dataForThisPage={baseUnitOfMeasurement} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="CorporateEntity" element={<CorporateEntity dataForThisPage={corporateEntity} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="CurrencyQuotation" element={<CurrencyQuotation dataForThisPage={currencyQuotation} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="CustomersSupplier" element={<CustomersSupplier dataForThisPage={customersSupplier} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="Inventory" element={<Inventory dataForThisPage={inventory} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="NaturalPearson" element={<NaturalPearson dataForThisPage={naturalPearson} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="Order" element={<Order dataForThisPage={order} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="OrderStatusChange" element={<OrderStatusChange dataForThisPage={orderStatusChange} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="OrderStatus" element={<OrderStatus dataForThisPage={orderStatus} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="Product" element={<Product dataForThisPage={product} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="ProductListItem" element={<ProductListItem dataForThisPage={productListItem} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="ProductsListItemStatusChange" element={<ProductsListItemStatusChange dataForThisPage={productsListItemStatusChange} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="ProductsListItemStatus" element={<ProductsListItemStatus dataForThisPage={productsListItemStatus} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="Shipment" element={<Shipment dataForThisPage={shipment} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="ShipmentStatusChange" element={<ShipmentStatusChange dataForThisPage={shipmentStatusChange} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="ShipmentStatus" element={<ShipmentStatus dataForThisPage={shipmentStatus} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />
            <Route path="VariableUnitOfMeasurement" element={<VariableUnitOfMeasurement dataForThisPage={variableUnitOfMeasurement} updatingFormMethodForThisPage={changeDataToPlaceInTheUpdatingForm} updatingFormObjectForThisPage={editingFormObject} onPutMethod={onPutForm} updateFormVisibleMethodForThisPage = {updateFormVisible} addFormVisibleForTheAddFormOfThisPage = {addFormVisible} setAddFormVisibleForTheTableOfThisPage = {SetAddFormVisible} closeUpdateFormForThisPage = {closeTheUpdatingForm} closeAddFormForThisPage = {closeTheAddingForm} />} />

          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
