import './App.css';

import InvoiceProvider from './context/invoices';
import InvoiceTable from './components/invoiceTable';
import CreditNoteTable from './components/creditNoteTable';
import InfoModal from './components/infoModal';

function App() {

  return (
    <InvoiceProvider>
      <div className="App">
        <header className="App-header">
          <InvoiceTable/>
          <CreditNoteTable />
          <InfoModal />
        </header>
      </div>
    </InvoiceProvider>
  );
}

export default App;
