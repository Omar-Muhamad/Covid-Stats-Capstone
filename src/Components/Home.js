import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Header from './Header';
import { getCountries } from '../Redux/asyncActions';

const Home = () => {
  const allCountries = useSelector((state) => state.allCountries.data);
  const loading = useSelector((state) => state.allCountries.loading);
  const [countries, setContries] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    const abort = new AbortController();
    dispatch(getCountries(abort));
    return () => abort.abort();
  }, []);

  useEffect(() => {
    if (loading === 'success') {
      setContries(Object.values(allCountries.dates)[0].countries);
    }
  }, [allCountries]);

  const changeHandler = (e) => {
    const value = e.target.value; // eslint-disable-line
    console.log(value);
  };

  return (
    <>
      {loading === 'loading' && <Loading />}
      <Header page="allCountries" />
      <section className="hero px-8 bg-[#5787E5] text-white h-[15rem] flex justify-center items-center gap-8">
        <i className="fas fa-globe-americas fa-6x text-[#2D4573]" />
        <div className="globalStats">
          <h2 className="text-4xl font-bold text-center">Global Cases</h2>
          <p className="text-lg text-center">
            {loading === 'success' && (
              `${allCountries.total.today_confirmed} Cases`
            )}
          </p>
        </div>
      </section>
      <section className="countriesStats">
        <div className="flex justify-between items-center bg-[#35548B] py-[10px] px-4 text-white font-medium">
          <h2>Stats by country</h2>
          <div className="relative">
            <input
              type="text"
              onChange={changeHandler}
              name="searchBar"
              id="searchBar"
              placeholder="Search"
              className="rounded-2xl px-4 py-1 bg-[#5787E5] focus:outline-none placeholder:text-white text-lg"
            />
            <i className="fas fa-search absolute right-[10px] top-2" />
          </div>
        </div>
        <ul className="grid grid-cols-2 justify-items-end text-right bg-[#5787E5]">
          {loading === 'success' && (
            Object.entries(countries).map(([key, value]) => (
              <li key={key} className="country w-full p-4 text-white">
                <Link to={value.name} className="w-full grid">
                  <i className="far fa-arrow-alt-circle-right fa-lg" />
                  <i className="fas fa-map-marker-alt fa-5x text-[#2D4573] justify-self-center" />
                  <h2 className=" text-xl font-bold">{value.name}</h2>
                  <p>{`${value.today_confirmed} Cases`}</p>
                </Link>
              </li>
            )))}
        </ul>
      </section>
    </>
  );
};

export default Home;
