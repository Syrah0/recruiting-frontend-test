import { useEffect, useState } from "react";
import useInvoice from "../context/invoices/hook";

function CreditNoteTable() {
    const { data, invoiceSelected, setSelectedCreditNote, creditNoteSelected } = useInvoice();
    const [creditData, setCreditData] = useState([]);

    useEffect(() => {
        const creditDataFilter = data.filter(invoice => invoice.reference === invoiceSelected);
        setCreditData(creditDataFilter)
    }, [invoiceSelected])

    if (invoiceSelected === null) {
        return (
            <></>
        )
    }

    if (creditData.length === 0 && invoiceSelected !== null) {
        return (
            <div>
                <h2>Sin datos de factura</h2>
            </div>
        )
    }

    return (
        <div>
            <h2 style={{ padding: '10px' }}>Selecciona una factura</h2>
            <ul style={{ width: '100%' }} class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {creditData.map(({id, organization_id, amount, currency}, index) => 
                    (
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div style={{ paddingLeft: '10px' }} class="flex items-center ps-3">
                            <input
                                key={id}
                                onClick={() => setSelectedCreditNote(id)}
                                id={id}
                                type="radio"
                                value={id}
                                checked={creditNoteSelected === id}
                                name="list-radio-2"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                for={id}
                                style={{ paddingRight: '10px', paddingLeft: '10px' }}
                                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                <div class="grid grid-cols-3 gap-4">
                                    <div>inv_{index+1} ({organization_id})</div>
                                    <div>${amount} {currency}</div>
                                    <div>{invoiceSelected}</div>
                                </div>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CreditNoteTable;