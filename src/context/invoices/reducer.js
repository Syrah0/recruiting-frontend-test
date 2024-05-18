export const invoiceReducer = (state, action) => {
  const reseted = { error: false, loading: false, message: null };
  switch (action.type) {
    case 'init': {
      return { ...state, ...reseted, data: action.data, loading: false };
    }
    case 'invoices': {
      return { ...state, ...reseted, invoices: action.invoices, loading: false };
    }
    case 'credit': {
      return { ...state, ...reseted, creditsNote: action.credits, loading: false };
    }
    case 'invoiceSelected': {
      return { ...state, ...reseted, invoiceSelected: action.invoiceSelected, loading: false };
    }
    case 'creditNoteSelected': {
        return { ...state, ...reseted, creditNoteSelected: action.creditNoteSelected };
    }
    case 'loading': {
      return { ...state, loading: true, error: false, message: null };
    }
    case 'error': {
      return { ...state, error: true, message: action.message, loading: false };
    }
    default:
        return { ...state, loading: false }
  }
}
