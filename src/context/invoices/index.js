import React, { createContext, useEffect, useReducer } from "react";
import { invoiceReducer } from "./reducer";

import * as invoiceApi from "../../services/invoices";

const defaultState = {
  error: false,
  loading: false,
  invoices: [],
  invoiceSelected: null,
  creditsNote: [],
  creditNoteSelected: null,
  message: null,
};

export const InvoiceContext = createContext(defaultState);
export const InvoiceDispatchContext = createContext(null);

const InvoiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(invoiceReducer, defaultState);
  
  useEffect(() => {
    const controller = new AbortController();

    const getReceivedInvoices = async ({ signal }) => {
      dispatch({ type: "loading" });
      try {
        const response = await invoiceApi.getInvoicesByType({
          type: 'received',
          signal
        });
        console.log(response);
        dispatch({ type: "invoices", invoices: response });
      } catch (e) {
        dispatch({
          type: "error",
          message: "Unable to get invoices from API",
        });
      }
    };

    void getReceivedInvoices({ signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <InvoiceContext.Provider value={state}>
      <InvoiceDispatchContext.Provider value={dispatch}>
        {children}
      </InvoiceDispatchContext.Provider>
    </InvoiceContext.Provider>
  );
}

export default InvoiceProvider;
