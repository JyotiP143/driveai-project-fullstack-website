import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  currency: 'INR',
  modelFilter: { type: 'All', maxPrice: Infinity },
  comparisonModels: ['nova', 'titan'],
  bookingDetails: { model: '', date: '', city: '' },
  highlightedElement: null,
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_FILTER':
      return { ...state, modelFilter: { ...state.modelFilter, ...action.payload } };
    case 'SET_COMPARISON_MODELS':
      return { ...state, comparisonModels: action.payload };
    case 'SET_BOOKING_DETAILS':
      return { ...state, bookingDetails: { ...state.bookingDetails, ...action.payload } };
    case 'SET_HIGHLIGHT':
      return { ...state, highlightedElement: action.payload };
    case 'CLEAR_HIGHLIGHT':
      return { ...state, highlightedElement: null };
    default:
      return state;
  }
}

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
