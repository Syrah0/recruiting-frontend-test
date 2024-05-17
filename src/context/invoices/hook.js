import { useContext, useCallback} from "react";
import { InvoiceContext, InvoiceDispatchContext } from ".";
import * as invoiceApi from "../../services/invoices";

const useInvoice = () => {
  const state = useContext(InvoiceContext);
  const dispatch = useContext(InvoiceDispatchContext);

  const getCreditNote = useCallback(async () => {
    dispatch({ type: "loading" });
    const response = await invoiceApi.getCreditNoteById({
      invId: state.invoiceSelected,
    });
    dispatch({ type: "credits", credits: response });
  }, []);

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
