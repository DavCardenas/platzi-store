import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Test Footer component', () => {
  const footer = mount(<Footer />);
  test('Renderizado del componente', () => {
    expect(footer.length).toEqual(1);
  });

  test('Renderizado del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
