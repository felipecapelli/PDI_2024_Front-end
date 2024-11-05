import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="customer-supplier">Customer Supplier</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="orders">Orders</Link></li>
                    <li><Link to="unity-of-mesurement">Unity Of Mesurement</Link></li>
                    <li><Link to="currency">Currency</Link></li>
                    <li><Link to="status">Status</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Menu