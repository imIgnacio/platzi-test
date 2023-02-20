import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Loading from './components/Loading';
import { useFetch } from './hooks/useFetch';
import { sort } from './utils/sort';
import './App.scss';
// import { useSort } from './hooks/useSort';

function App() {
  const { data, setData, loading } = useFetch(
    'https://fakestoreapi.com/products/'
  );

  const handleFilterChange = e => {
    const sortedData = sort(data, e.target.value);
    setData(sortedData);
  };

  return (
    <div className='App'>
      <Header>
        <label htmlFor='config'>Ordenar por:</label>
        <select name='config' id='config' onChange={handleFilterChange}>
          <option value='none'></option>
          <option value='priceAsc'>Precio (Menor a mayor)</option>
          <option value='priceDesc'>Precio (Mayor a menor)</option>
          <option value='nameAsc'>Nombre A-Z</option>
          <option value='nameDesc'>Nombre Z-A</option>
          <option value='ratingAsc'>Rating (Menor a mayor)</option>
          <option value='ratingDesc'>Rating (Mayor a menor)</option>
        </select>
      </Header>
      <main>
        {loading ? (
          <Loading />
        ) : (
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          >
            {data.map(product => (
              <Card
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
