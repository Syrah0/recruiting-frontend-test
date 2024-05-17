import useInvoice from "../context/invoices/hook";

function InvoiceTable() {
    const { invoices, loading, setSelectedInvoice, getCreditNote } = useInvoice();
    
    const setInvoiceId = (id) => {
        setSelectedInvoice(id)
        // getCreditNote();
    }

    if (loading) {
        return (
            <div>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Cargando datos...</h3>
            </div>
        )
    }

    return (
        <div>
            <h2>Selecciona una factura</h2>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {invoices.map(({id, organization_id, amount, currency}, index) => 
                    (
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input
                                key={id}
                                onClick={setInvoiceId(id)}
                                id={id}
                                type="radio"
                                value={id}
                                name="list-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                for={id}
                                class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                <div class="grid grid-cols-3 gap-4">
                                    <div>inv_{index+1} ({organization_id})</div>
                                    <div>${amount} {currency}</div>
                                    <div>Recibida</div>
                                </div>
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InvoiceTable;