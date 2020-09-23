import React, { useRef } from 'react';
import useFetch from '@marche/swr-config';

import SuspenseLoading from '../SuspenseLoading';
import CategoryButton from '../CategoryButton';

import { Container } from './styles';

export type colorObserver = (uid: string) => void;

interface ICategory {
  id: string;
  name: string;
}

interface IProps {
  loadCategory: (uid: string) => void;
}

const CategoryHorizontalList: React.FC<IProps> = ({ loadCategory }: IProps) => {
  const { data } = useFetch('/category');

  if (!data) {
    return <SuspenseLoading />;
  }

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
    loadCategory(uid);
  }

  return (
    <Container>
      {data.map((category: ICategory) => (
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
