import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import getCountries from '../Redux/asyncActions';

const Home = () => {
  const allCountries = useSelector((state) => state.allCountries.data);
  const loading = useSelector((state) => state.allCountries.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <>
      <div className="loading">
        {loading === 'loading'}
      </div>
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
        <h2 className="bg-[#35548B] py-[4px] px-8 text-white font-medium">Stats by country</h2>
        {}
      </section>
    </>
  );
};

export default Home;
