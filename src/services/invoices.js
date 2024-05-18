import { fetchInvoices } from './invoicesCommon';

export const getInvoicesByType = async() => {
    const response = await fetchInvoices();
    return response;
}
