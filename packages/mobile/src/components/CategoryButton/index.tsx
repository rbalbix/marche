import React, { useState, useCallback, useEffect } from 'react';

import { colorObserver } from '../CategoryHorizontalList';

import { Container, Button, ButtonText } from './styles';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ICategory {
  id: string;
  name: string;
}
interface IProps {
  item: ICategory;
  attach: (observer: colorObserver) => void;
  detach: (observer: colorObserver) => void;
  notify: (uid: string) => void;
}

const CategoryButton: React.FC<IProps> = ({
  item,
  attach,
  detach,
  notify
}: IProps) => {
  const initialColor = colors.text;
  const initialFontFamily = fonts.archivo_400;

  const [color, setColor] = useState(initialColor);
  const [fontFamily, setFontFamily] = useState(initialFontFamily);
  const [genUid] = useState(item.id);

  const onColorUpdated: colorObserver = useCallback((uid: string) => {
    if (genUid !== uid) {
      setColor(initialColor);
      setFontFamily(initialFontFamily);
    }
  }, []);

  const handleClick = useCallback(() => {
    notify(genUid);
    setColor(colors.cardHeader);
    setFontFamily(fonts.archivo_700);
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
        <ButtonText style={{ color, fontFamily }}>{item.name}</ButtonText>
      </Button>
    </Container>
  );
};

export default CategoryButton;
