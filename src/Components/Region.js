import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRegion } from '../Redux/asyncActions';
import Loading from './Loading';
import Header from './Header';

const Region = () => {
  const region = useSelector((state) => state.region.data);
  const loading = useSelector((state) => state.region.loading);
  const [countryData, setCountryData] = useState({});
  const { country } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const abort = new AbortController();
    dispatch(getRegion(country, abort));
    return () => abort.abort();
  }, []);
  useEffect(() => {
    if (loading === 'success') {
      const data = Object.values(region.dates)[0].countries;
      setCountryData((data)[Object.keys((data))[0]]);
    }
  }, [region]);
  return (
    <>
      {loading === 'loading' && <Loading />}
      <Header page="region" country={country} />
      <section className="hero px-8 bg-[#5787E5] text-white h-[15rem] flex justify-center items-center gap-16">
        <i className="fas fa-globe-americas fa-6x text-[#2D4573]" />
        <div className="CountryStats">
          <h2 className="text-4xl font-bold text-center">Global Cases</h2>
          <p className="text-lg text-center">
            {loading === 'success' && `${countryData.today_confirmed} Cases`}
          </p>
        </div>
      </section>
    </>
  );
};

export default Region;
