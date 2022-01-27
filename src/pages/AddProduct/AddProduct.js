import React from 'react';
import styled from 'styled-components';
import ContentLayout from '../../utils/ContentLayout';

import { CONTENT } from './AddProductData';

function AddProduct() {
  return (
    <AddProductContainer>
      {CONTENT.map(data => {
        return (
          <ContentLayout
            key={data.id}
            title={data.title}
            subtitle={data.subtitle}
            content={data.content}
            margin={data.margin}
          />
        );
      })}
    </AddProductContainer>
  );
}

export default AddProduct;

const AddProductContainer = styled.div``;
