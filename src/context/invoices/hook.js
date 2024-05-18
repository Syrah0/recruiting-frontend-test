import { useContext } from "react";
import { InvoiceContext, InvoiceDispatchContext } from ".";

const useInvoice = () => {
  const state = useContext(InvoiceContext);
  const dispatch = useContext(InvoiceDispatchContext);

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
  };
};

export default useInvoice;
