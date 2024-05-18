import { useContext } from "react";
import { InvoiceContext, InvoiceDispatchContext } from ".";

const useInvoice = () => {
  const state = useContext(InvoiceContext);
  const dispatch = useContext(InvoiceDispatchContext);

  const getCreditNote = async (invoiceSelected) => {
    const creditData = state.data.filter(invoice => invoice.reference === invoiceSelected);
    dispatch({ type: "credits", credits: creditData });
  };

  const setSelectedInvoice = async (invoiceId) => {
    dispatch({ type: 'invoiceSelected', invoiceSelected: invoiceId });
  };

  const setSelectedCreditNote = async (invoiceId) => {
    dispatch({ type: 'creditNoteSelected', creditNoteSelected: invoiceId });
  };

  return {
    ...state,
    setSelectedInvoice,
    setSelectedCreditNote,
    getCreditNote,
  };
};

export default useInvoice;
