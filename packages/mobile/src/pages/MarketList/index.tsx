import React, { Suspense, lazy } from 'react';
import SuspenseLoading from '../../components/SuspenseLoading';

import { Container, TotalItems } from './styles';

const CategoryProducts = lazy(
  () => import('../../components/CategoryProducts')
);

interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
}
interface IProduct {
  id: string;
  name: string;
  unity: string;
  isMarked: boolean;
  productQuantity: number;
}
interface IMarketList {
  id: string;
  name: string;
  createdAt: string;
  productQuantity: number;
  categories: ICategory[];
}

const MarketList: React.FC = () => {
  const data: IMarketList = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lista 7',
    createdAt: '2020-08-10',
    productQuantity: 40,
    categories: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
        name: 'Bebidas',
        products: [
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
            name: 'Suco de Uva',
            unity: 'unidade',
            isMarked: false,
            productQuantity: 2
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28af',
            name: 'Cerveja',
            unity: 'unidade',
            isMarked: false,
            productQuantity: 12
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28cf',
            name: 'Coca-Cola',
            unity: 'unidade - 250ml',
            isMarked: false,
            productQuantity: 6
          }
        ]
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        name: 'Alimentos',
        products: [
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
            name: 'Arroz',
            unity: '1 kg',
            isMarked: true,
            productQuantity: 5
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'Feijão',
            unity: '1 kg',
            isMarked: false,
            productQuantity: 2
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
            name: 'Macarrão',
            unity: '500 g',
            isMarked: true,
            productQuantity: 2
          },
          {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
            name: 'Tapioca',
            unity: 'unidade',
            isMarked: false,
            productQuantity: 2
          }
        ]
      }
    ]
  };
  return (
    <Container>
      <Suspense fallback={<SuspenseLoading />}>
        <TotalItems>{`${data.productQuantity} itens`}</TotalItems>

        {data.categories.map(category => (
          <CategoryProducts key={category.id} item={category} />
        ))}
      </Suspense>
    </Container>
  );
};

export default MarketList;
