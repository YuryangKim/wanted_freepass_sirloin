import React, { useState } from 'react';
import * as S from './Categories.style';
import Radio from '../../../../components/Radio/index';
import { CATEGORIES } from './data';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  // const isChecked = e => {
  //   const checked = e.target.checked;
  //   console.log('check!!!');
  // };

  return (
    <S.Container>
      <S.Wrapper>
        {CATEGORIES.map(data => {
          return <Radio key={data.id} name={data.name} value={data.value} />;
        })}
      </S.Wrapper>
      <S.Wrapper>
        {categories.map(data => {
          return <S.Tag key={data.id}>{data.value}</S.Tag>;
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default Categories;