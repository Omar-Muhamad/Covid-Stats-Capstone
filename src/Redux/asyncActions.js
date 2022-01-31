import { DateTime } from 'luxon';
import {
  getCountriesRequest,
  getCountriesSuccess,
  getCountriesFailure,
} from './allCountries/allCountries';

export const date = DateTime.local().toFormat('yyyy-LL-dd');
const url = `https://api.covid19tracking.narrativa.com/api/${date}`;

const getCountries = () => async (dispatch) => {
  dispatch(getCountriesRequest());
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getCountriesSuccess(data));
  } catch (err) {
    dispatch(getCountriesFailure(err));
  }
};

export default getCountries;
