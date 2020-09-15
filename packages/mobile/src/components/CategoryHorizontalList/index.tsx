import React, { useRef } from 'react';
import CategoryButton from '../CategoryButton';

import { Container } from './styles';

export type colorObserver = (uid: string) => void;

interface ICategory {
  id: string;
  name: string;
}

const CategoryHorizontalList: React.FC = () => {
  const data: ICategory[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
      name: 'Bebidas'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
      name: 'Alimentos'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
      name: 'Limpeza'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
      name: 'Frutas'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
      name: 'Legumes'
    }
  ];

  const observers = useRef<colorObserver[]>([]);

  function attach(observer: colorObserver) {
    observers.current.push(observer);
  }

  function detach(observer: colorObserver) {
    const filtered = observers.current.filter(
      _observer => observer !== _observer
    );
    observers.current = [...filtered];
  }

  function notify(uid: string) {
    observers.current.forEach(observer => {
      observer(uid);
    });
  }

  return (
    <Container>
      {data.map(category => (
        <CategoryButton
          key={category.id}
          item={category}
          attach={attach}
          detach={detach}
          notify={notify}
        />
      ))}
    </Container>
  );
};

export default CategoryHorizontalList;
