import React, { Suspense, lazy, useState } from 'react';

import { Container, CategoryWrapper, Empty } from './styles';
import SuspenseLoading from '../../components/SuspenseLoading';

const CategoryHorizontalList = lazy(
  () => import('../../components/CategoryHorizontalList')
);

const AddCategoryProducts = lazy(
  () => import('../../components/AddCategoryProducts')
);

interface IProduct {
  id: string;
  name: string;
  unity: string;
}

interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
}

const CreateList: React.FC = () => {
  const initialCategory: ICategory = {
    id: '',
    name: '',
    products: []
  };
  const [category, setCategory] = useState<ICategory>(initialCategory);

  const data: ICategory[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
      name: 'Bebidas',
      products: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
          name: 'Suco de Uva',
          unity: 'unidade'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28af',
          name: 'Cerveja',
          unity: 'unidade'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28cf',
          name: 'Coca-Cola',
          unity: 'unidade - 250ml'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28df',
          name: 'Água com gás',
          unity: '1 litro'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28da',
          name: 'Mate',
          unity: '1 litro'
        }
      ]
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
      name: 'Alimentos',
      products: [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-4ad53abb28bf',
          name: 'Arroz',
          unity: '1 kg'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-5ad53abb28af',
          name: 'Feijão',
          unity: '1 kg'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-6ad53abb28cf',
          name: 'Kinder Ovo',
          unity: 'unidade'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-7ad53abb28df',
          name: 'Sorvete',
          unity: 'unidade'
        },
        {
          id: 'bd7acbea-c1b1-46c2-aed5-8ad53abb28da',
          name: 'Pringles',
          unity: 'unidade'
        }
      ]
    },
    {
      id: 'bd8acbea-c1b1-46c2-aed5-3ad53abb28be',
      name: 'Frutas',
      products: [
        {
          id: 'bd7acbea-c1b2-46c2-aed5-3ad53abb28bf',
          name: 'Banana',
          unity: 'unidade'
        },
        {
          id: 'bd7acbea-c1b3-46c2-aed5-3ad53abb28af',
          name: 'Maçã',
          unity: 'unidade'
        }
      ]
    }
  ];

  function loadCategory(uid: string) {
    const filtered = data.find(category => category.id === uid);
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

        {category.id !== '' ? (
          <CategoryWrapper>
            <AddCategoryProducts item={category} />
          </CategoryWrapper>
        ) : (
          <Empty>Selecione uma categoria para ver a lista de produtos.</Empty>
        )}
      </Suspense>
    </Container>
  );
};

export default CreateList;
