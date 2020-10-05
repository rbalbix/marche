import React, { Suspense, lazy, useState } from 'react';
import useFetch from '@marche/swr-config';

import { Container, CategoryWrapper } from './styles';
import SuspenseLoading from '../../components/SuspenseLoading';

const CategoryHorizontalList = lazy(
  () => import('../../components/CategoryHorizontalList')
);

const AddCategoryProducts = lazy(
  () => import('../../components/AddCategoryProducts')
);
interface ICategory {
  id: string;
  name: string;
}

const CreateList: React.FC = () => {
  const initialCategory: ICategory = {
    id: '',
    name: ''
  };
  const { data } = useFetch('/category');
  const [category, setCategory] = useState<ICategory>(initialCategory);

  if (!data) {
    return <SuspenseLoading />;
  }

  async function loadCategory(uid: string) {
    const filtered = data.find((category: ICategory) => category.id === uid);
    if (filtered) {
      setCategory(filtered);
    } else {
      setCategory(initialCategory);
    }
  }

  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <CategoryHorizontalList loadCategory={loadCategory} />
        <CategoryWrapper>
          <AddCategoryProducts item={category} />
        </CategoryWrapper>
      </Suspense>
    </Container>
  );
};

export default CreateList;
