import { fetchInvoices } from './invoicesCommon';

export const getInvoicesByType = async({
    type
}) => {
    const response = await fetchInvoices();
    console.log(response);
    return response.filter(invoice => invoice.type === type);
}

export const getCreditNoteById = async({
    invId
}) => {
    const response = await fetchInvoices(invId, true);
    return response.filter(invoice => invoice.type === 'credit_note');
}
