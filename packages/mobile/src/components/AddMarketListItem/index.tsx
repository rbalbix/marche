import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  ListItem,
  ProductGroup,
  ProductName,
  UnityItem,
  UnityItemText,
  TotalItemGroup,
  PlusButton,
  PlusIcon,
  TotalItem,
  MinusButton,
  MinusIcon,
  Separator
} from './styles';

interface IProduct {
  id: string;
  name: string;
  unity: string;
}

interface IProps {
  item: IProduct;
  lastItem: boolean;
}

interface IProductQuantity {
  id: string;
  quantity: number;
}

const AddMarketListItem: React.FC<IProps> = ({ item, lastItem }: IProps) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    async function loadProductQuantity() {
      const list = await AsyncStorage.getItem('@new-marketList');
      if (list) {
        const marketList = JSON.parse(list);
        if (marketList.products) {
          marketList.products.map((product: IProductQuantity) => {
            if (product.id === item.id) {
              setQuantity(product.quantity);
            }
          });
        }
      }
    }

    loadProductQuantity();
  }, []);

  function incrementQuantity() {
    setQuantity(quantity + 1);

    registerProductQuantity(quantity + 1);
  }

  function decrementQuantity() {
    if (quantity - 1 < 0) {
      return;
    }
    // console.log('quantity state : ', quantity, quantity - 1);
    if (quantity - 1 === 0) {
      removeProduct();
      setQuantity(quantity - 1);
      return;
    }

    if (quantity - 1 > 0) {
      registerProductQuantity(quantity - 1);
      setQuantity(quantity - 1);
    }
  }

  async function removeProduct() {
    const list = await AsyncStorage.getItem('@new-marketList');
    const { id } = item;

    // console.log('Product: ', id, ' qtd: ', quantity);

    if (list) {
      const marketList = JSON.parse(list);

      const filtered = marketList.products.filter(
        (product: IProductQuantity) => {
          return product.id !== id;
        }
      );
      marketList.products = filtered;
      await AsyncStorage.setItem('@new-marketList', JSON.stringify(marketList));
    }
  }

  async function registerProductQuantity(qtd: number) {
    const list = await AsyncStorage.getItem('@new-marketList');
    const { id } = item;

    // console.log('Product: ', id, ' qtd: ', quantity, list);

    if (list) {
      const marketList = JSON.parse(list);

      if (!marketList.products) {
        const products: IProductQuantity[] = [];
        marketList.products = products;
      }

      if (
        !marketList.products.some(
          (product: IProductQuantity) => product.id === id
        )
      ) {
        marketList.products.push({ id, quantity: 1 });
        await AsyncStorage.setItem(
          '@new-marketList',
          JSON.stringify(marketList)
        );
      } else {
        marketList.products.forEach((product: IProductQuantity) => {
          if (product.id === id) {
            product.quantity = qtd;
          }
        });

        await AsyncStorage.setItem(
          '@new-marketList',
          JSON.stringify(marketList)
        );
      }
    }
    console.log(await AsyncStorage.getItem('@new-marketList'));
  }

  return (
    <Container>
      <ListItem>
        <ProductGroup>
          <ProductName>{item.name}</ProductName>
          <UnityItem>
            <UnityItemText>{item.unity}</UnityItemText>
          </UnityItem>
        </ProductGroup>
        <TotalItemGroup>
          <PlusButton onPress={incrementQuantity}>
            <PlusIcon name="add" size={50} />
          </PlusButton>
          <TotalItem>{quantity}</TotalItem>
          <MinusButton onPress={decrementQuantity}>
            <MinusIcon name="remove" size={30} />
          </MinusButton>
        </TotalItemGroup>
      </ListItem>
      <Separator lastItem={lastItem} />
    </Container>
  );
};

export default AddMarketListItem;
