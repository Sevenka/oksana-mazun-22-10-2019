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
} from '../actions/types';

const initialState = {
  currentLocation: {
    Version: 1,
    Key: '215854',
    Type: 'City',
    Rank: 31,
    LocalizedName: 'Tel Aviv',
    Country: {
      ID: 'IL',
      LocalizedName: 'Israel'
    },
    AdministrativeArea: {
      ID: 'TA',
      LocalizedName: 'Tel Aviv'
    }
  },
  locationsAutocomplete: [],
  fiveDaysForecast: [],
  currentConditions: [],
  loading: false
};

const stateFactory = {
  [SET_CURRENT_LOCATION]: onSetCurrentLocation,
  [GET_AUTOCOMPLETE_SEARCH_BEGIN]: onActionBegin,
  [GET_AUTOCOMPLETE_SEARCH_SUCCESS]: onGetAutocompleteSearchSuccess,
  [GET_AUTOCOMPLETE_SEARCH_FAILURE]: onActionFailure,
  [GET_FIVE_DAYS_FORECAST_BEGIN]: onActionBegin,
  [GET_FIVE_DAYS_FORECAST_SUCCESS]: onGetFiveDaysForecastSuccess,
  [GET_FIVE_DAYS_FORECAST_FAILURE]: onActionFailure,
  [GET_CURRENT_CONDITIONS_BEGIN]: onActionBegin,
  [GET_CURRENT_CONDITIONS_SUCCESS]: onGetCurrentConditionsSuccess,
  [GET_CURRENT_CONDITIONS_FAILURE]: onActionFailure
};

function onActionBegin(state, action) {
  return {
    ...state,
    loading: true,
    error: null
  };
}

function onActionFailure(state, action) {
  return {
    ...state,
    loading: false,
    error: action.payload.error
  };
}

function onSetCurrentLocation(state, action) {
  return {
    ...state,
    currentLocation: action.payload.currentLocation
  };
}

function onGetAutocompleteSearchSuccess(state, action) {
  return {
    ...state,
    loading: false,
    locationsAutocomplete: action.payload.locationsAutocomplete
  };
}

function onGetFiveDaysForecastSuccess(state, action) {
  return {
    ...state,
    loading: false,
    fiveDaysForecast: action.payload.forecast
  };
}

function onGetCurrentConditionsSuccess(state, action) {
  return {
    ...state,
    loading: false,
    currentConditions: action.payload.conditions
  };
}

export default function events(state = initialState, action) {
  if (stateFactory[action.type]) {
    return stateFactory[action.type](state, action);
  }

  return state;
}
