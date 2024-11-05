import { useState } from 'react';
import Address from './components/Address';
import Menu from './pages/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import CustomerSupplier from './pages/CustomerSupplier'
import Products from './pages/Products'
import Order from './pages/Order'
import UnityOfMesurement from './pages/UnityOfMesurement'
import Currency from './pages/Currency'
import Status from './pages/Status';
import PageNotFound from './pages/PageNotFound'

const addressTemporaryListTest = [
  {
    adressNickname: "Meu endereço",
    adressType: "Residencial",
    street: "Avenida Uchoa",
    number: "292",
    city: "Araraquara",
    stateOrDistrict: "SP",
    postalCode: "16650-011",
    country: "Brazil"
  },
  {
    adressNickname: "Endereço da firma",
    adressType: "Comercial",
    street: "Coding street",
    number: "404",
    city: "Boston",
    stateOrDistrict: "MA",
    postalCode: "12345-678",
    country: "USA"
  },
  {
    adressNickname: "Endereço da minha mãe",
    adressType: "Residencial",
    street: "Braz Flamino",
    number: "243",
    city: "Uru",
    stateOrDistrict: "SP",
    postalCode: "14811-234",
    country: "Brazil"
  }
]
function App() {
  const [addressListTest, SetAddressListTest] = useState([...addressTemporaryListTest])

  /*
  useEffect(() => {
    fetch('http://localhost:5249/Address', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json'
      }
    })
      .then(resposta => resposta.json())
      .then(dados => {
        SetAddressListTest(dados)
      })
  })*/

  //<Address addressList={addressListTest}></Address>

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route index element={<Home />} />
            <Route path="customer-supplier" element={<CustomerSupplier />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Order />} />
            <Route path="unity-of-mesurement" element={<UnityOfMesurement />} />
            <Route path="currency" element={<Currency />} />
            <Route path="status" element={<Status />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
