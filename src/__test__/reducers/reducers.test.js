import reducers from '../../reducers';
import ProducMock from '../../__mocks__/ProductMock';

describe('Test Reducers', () => {
  test('retornar initial state', () => {
    expect(reducers({}, '')).toEqual({});
  });

  test('add to card to state', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProducMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [payload],
    };
    expect(reducers(initialState, action)).toEqual(expected);
  });
});
