const baseUrl = "https://recruiting.api.bemmbo.com/invoices/pending";

export const fetchInvoices = async(invId = null, withQueryParam = false, signal = null) => {
    const response = await fetch(`${baseUrl}/${!withQueryParam ? '' : `?reference=${invId}`}`, {method: 'GET', signal});
    if(!response.ok) {
        const error = new Error(`HTTP error! status: ${response.status}`);
        error.status = response.status;
        throw error;
    } 
    return await response.json();
}
