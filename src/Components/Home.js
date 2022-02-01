import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import Header from './Header';
import getCountries from '../Redux/asyncActions';

const Home = () => {
  const allCountries = useSelector((state) => state.allCountries.data);
  const loading = useSelector((state) => state.allCountries.loading);
  const [countries, setContries] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    if (loading === 'success') {
      setContries(Object.values(allCountries.dates)[0].countries);
    }
  }, [allCountries]);
  return (
    <>
      {loading === 'loading' && <Loading />}
      <Header page="allCountries" />
      <section className="hero px-8 bg-[#5787E5] text-white h-[15rem] flex justify-center items-center gap-16">
        <i className="fas fa-globe-americas fa-6x text-[#2D4573]" />
        <div className="globalStats">
          <h2 className="text-4xl font-bold text-center">Global Cases</h2>
          <p className="text-lg text-center">
            {loading === 'success' && `${allCountries.total.today_confirmed} Cases`}
          </p>
        </div>
      </section>
      <section className="countriesStats">
        <h2 className="bg-[#35548B] py-[4px] px-8 text-white font-medium">
          Stats by country
        </h2>
        <ul className="grid grid-cols-2 justify-items-end text-right">
          {loading === 'success' && (Object.entries(countries).map(([key, value]) => (
            <li key={key} className="country grid w-full p-4 text-white">
              <i className="far fa-arrow-alt-circle-right fa-lg" />
              <i className="fas fa-map-marker-alt fa-5x text-[#2D4573] justify-self-center" />
              <h2 className=" text-xl font-bold">{value.name}</h2>
              <h2>{`${value.today_confirmed} Cases`}</h2>
            </li>
          ))
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
