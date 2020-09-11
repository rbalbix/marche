import React, { useState, useCallback, useEffect } from 'react';
import { uid } from 'react-uid';

import { colorObserver } from '../CategoryHorizontalList';

import { Container, Button, ButtonText } from './styles';
import colors from '../../styles/colors';

interface IProps {
  attach: (observer: colorObserver) => void;
  detach: (observer: colorObserver) => void;
  notify: (uid: string) => void;
}

const CategoryButton: React.FC<IProps> = ({
  attach,
  detach,
  notify
}: IProps) => {
  const initialColor = colors.text;

  const [color, setColor] = useState(initialColor);
  const [genUid] = useState(uid({ item: 1 }));

  const onColorUpdated: colorObserver = useCallback((uid: string) => {
    if (genUid !== uid) {
      setColor(initialColor);
    }
  }, []);

  const handleClick = useCallback(() => {
    notify(genUid);
    setColor(colors.cardHeader);
  }, []);

  useEffect(() => {
    attach(onColorUpdated);
    return () => {
      detach(onColorUpdated);
    };
  }, []);

  return (
    <Container>
      <Button onPress={handleClick}>
        <ButtonText style={{ color }}>Bebida</ButtonText>
      </Button>
    </Container>
  );
};

export default CategoryButton;
