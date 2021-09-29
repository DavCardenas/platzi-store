import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import ProducMock from '../../__mocks__/ProductMock';
import reducers from '../../reducers';

describe('Test Header component', () => {
  test('Renderizado del componente', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Renderizado del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });

  test('added item to card notification badge', () => {
    const initialState = {
      cart: [],
    };
    const payload = [ProducMock, ProducMock, ProducMock];
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const fullState = reducers(initialState, action);
    const header = mount(
      <ProviderMock state={fullState}>
        <Header />
      </ProviderMock>,
    );

    expect(header.find('.Header-alert').text()).toEqual(
      fullState.cart.length.toString(),
    );
  });
});

describe('Test Header Snapshot', () => {
  test('Comprobar la UI del componente Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
