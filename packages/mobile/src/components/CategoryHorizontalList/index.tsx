import React, { useRef } from 'react';
import CategoryButton from '../CategoryButton';

import { Container } from './styles';

export type colorObserver = (uid: string) => void;

const CategoryHorizontalList: React.FC = () => {
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
      <CategoryButton attach={attach} detach={detach} notify={notify} />
      <CategoryButton attach={attach} detach={detach} notify={notify} />
      <CategoryButton attach={attach} detach={detach} notify={notify} />
      <CategoryButton attach={attach} detach={detach} notify={notify} />
      <CategoryButton attach={attach} detach={detach} notify={notify} />
      <CategoryButton attach={attach} detach={detach} notify={notify} />
      <CategoryButton attach={attach} detach={detach} notify={notify} />
    </Container>
  );
};

export default CategoryHorizontalList;
