// import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';
// import { getInvoicesByType } from './services/invoices';

import InvoiceProvider from './context/invoices';
import InvoiceTable from './components/invoiceTable';
import CreditNoteTable from './components/creditNoteTable';
// import { InfoModal } from './components/infoModal';

function App() {
//  const [invoiceData, setInvoiceData] = useState([]);
//  //// const [invoiceId, setInvoiceId] = useState(null);
//
//  //useEffect(() => {
//  //  const response = getInvoicesByType({ type: 'received' });
//  //  setInvoiceData(response);
//  //}, []);
//
  //console.log(invoiceData);

  return (
    <InvoiceProvider>
      <div className="App">
        <header className="App-header">
          <InvoiceTable/>
          <CreditNoteTable />
          {/*<button> Asignar </button>
          <InfoModal /> */}
        </header>
      </div>
    </InvoiceProvider>
  );
}

export default App;
