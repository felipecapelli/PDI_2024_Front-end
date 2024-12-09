import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
    return (

        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">PDI Programmers</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="Inventory">Inventory</Link>
                            </Nav.Link>
                            <NavDropdown title="Orders" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="Order">Orders</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="ProductListItem">Product List Items</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="Shipment">Shipments</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Partners records" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="CustomersSupplier">Customers & Suppliers</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="NaturalPearson">Natural Person</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="CorporateEntity">Corporate Entity</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="Address">Address</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="AddressesList">Addresses List</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="AddressType">Address Type</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Units Of Measurement" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="VariableUnitOfMeasurement">Variable Units Of Measurement</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="BaseUnitOfMeasurement">BaseUnits Of Measurement</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Quotations" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="CurrencyQuotation">Currency Quotations</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="BaseCurrency">Base Currencies</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Statuses" id="basic-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="ShipmentStatusChange">Shipment Statuses Changes</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="OrderStatusChange">Order Statuses Changes</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="ProductsListItemStatusChange">Products List Item Statuses Changes</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="ShipmentStatus">Shipment Statuses</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="OrderStatus">Order Statuses</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="ProductsListItemStatus">Products List Item Statuses</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <Link to="Product">Products</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <nav>
                <ul className='nav'>


                </ul>
            </nav>
        </header>
    )
}
export default Menu