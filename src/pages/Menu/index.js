import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <header>
            <nav>
                <ul className='nav'>
                    <li className='nav-item'><Link className='nav-link' to="/" >Home</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="Address">Address</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="AddressesList">AddressesList</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="AddressType">AddressType</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="BaseCurrency">BaseCurrency</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="BaseUnitOfMeasurement">BaseUnitOfMeasurement</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="CorporateEntity">CorporateEntity</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="CurrencyQuotation">CurrencyQuotation</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="CustomersSupplier">CustomersSupplier</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="Inventory">Inventory</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="NaturalPearson">NaturalPearson</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="Order">Order</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="OrderStatusChange">OrderStatusChange</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="OrderStatus">OrderStatus</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="Product">Product</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="ProductListItem">ProductListItem</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="ProductsListItemStatusChange">ProductsListItemStatusChange</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="ProductsListItemStatus">ProductsListItemStatus</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="Shipment">Shipment</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="ShipmentStatusChange">ShipmentStatusChange</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="ShipmentStatus">ShipmentStatus</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="VariableUnitOfMeasurement">VariableUnitOfMeasurement</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Menu