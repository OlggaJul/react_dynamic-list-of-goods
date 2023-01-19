import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<Good[]>([]);

  const loadAllGoods = async () => {
    const allGoods = await getAll();

    setGoodsList(allGoods);
  };

  const load5Goods = async () => {
    const first5Goods = await get5First();

    setGoodsList(first5Goods);
  };

  const loadRedGoods = async () => {
    const redGoods = await getRedGoods();

    setGoodsList(redGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => loadAllGoods()}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => load5Goods()}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => loadRedGoods()}
      >
        Load red goods
      </button>

      <GoodsList goods={goodsList} />
    </div>
  );
};
