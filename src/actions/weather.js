import {
  SET_CURRENT_LOCATION,
  GET_AUTOCOMPLETE_SEARCH_BEGIN,
  GET_AUTOCOMPLETE_SEARCH_SUCCESS,
  GET_AUTOCOMPLETE_SEARCH_FAILURE,
  GET_FIVE_DAYS_FORECAST_BEGIN,
  GET_FIVE_DAYS_FORECAST_SUCCESS,
  GET_FIVE_DAYS_FORECAST_FAILURE,
  GET_CURRENT_CONDITIONS_BEGIN,
  GET_CURRENT_CONDITIONS_SUCCESS,
  GET_CURRENT_CONDITIONS_FAILURE
} from "../actions/types";

export const setCurrentLocation = (currentLocation) => ({
  type: SET_CURRENT_LOCATION,
  payload: { currentLocation }
});

export const getAutocompleteSearchBegin = () => ({
  type: GET_AUTOCOMPLETE_SEARCH_BEGIN
});

export const getAutocompleteSearchSuccess = locationsAutocomplete => ({
  type: GET_AUTOCOMPLETE_SEARCH_SUCCESS,
  payload: { locationsAutocomplete }
});

export const getAutocompleteSearchFailure = error => ({
  type: GET_AUTOCOMPLETE_SEARCH_FAILURE,
  payload: { error }
});

export const getFiveDaysForecastBegin = () => ({
  type: GET_FIVE_DAYS_FORECAST_BEGIN
});

export const getFiveDaysForecastSuccess = forecast => ({
  type: GET_FIVE_DAYS_FORECAST_SUCCESS,
  payload: { forecast }
});

export const getFiveDaysForecastFailure = error => ({
  type: GET_FIVE_DAYS_FORECAST_FAILURE,
  payload: { error }
});

export const getCurrentConditionsBegin = () => ({
  type: GET_CURRENT_CONDITIONS_BEGIN
});

export const getCurrentConditionsSuccess = conditions => ({
  type: GET_CURRENT_CONDITIONS_SUCCESS,
  payload: { conditions }
});

export const getCurrentConditionsFailure = error => ({
  type: GET_CURRENT_CONDITIONS_FAILURE,
  payload: { error }
});

const apiPath = 'http://dataservice.accuweather.com/';
const apiKey = 'lAYfXFS1MZ8XZfz7fvwNZU0L3nXN0EaR';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function getAutocompleteSearch(query) {
  return (dispatch, getState) => {
    dispatch(getAutocompleteSearchBegin());

    const URLSearchParams = new URLSearchParams([['apikey', apiKey], ['q', query], ['language', 'en-us']]);

    return fetch(`${apiPath}/locations/v1/cities/autocomplete`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: URLSearchParams
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(getAutocompleteSearchSuccess(json));
        return json;
      })
      .catch(error => dispatch(getAutocompleteSearchFailure(error));
  };
}

export function getFiveDaysForecast(locationKey) {
  return (dispatch, getState) => {
    dispatch(getFiveDaysForecastBegin());

    const URLSearchParams = new URLSearchParams([['apikey', apiKey], ['q', query], ['language', 'en-us']]);

    return fetch(`${apiPath}/forecasts/v1/daily/5day/${locationKey}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: URLSearchParams
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(getFiveDaysForecastSuccess(json));
        return json;
      })
      .catch(error => dispatch(getFiveDaysForecastFailure(error));
  };
}

export function getCurrentConditions(locationKey) {
  return (dispatch, getState) => {
    dispatch(getCurrentConditionsBegin());

    const URLSearchParams = new URLSearchParams([['apikey', apiKey], ['language', 'en-us']]);

    return fetch(`${apiPath}/forecasts/v1/daily/5day/${locationKey}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: URLSearchParams
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(getCurrentConditionsSuccess(json));
        return json;
      })
      .catch(error => dispatch(getCurrentConditionsFailure(error));
  };
}
