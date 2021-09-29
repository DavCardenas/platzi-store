import getData from '../../utils/getData';

describe('test fetch api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('llamar un api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com').then((response) => {
      expect(response.data).toEqual('12345');
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

  test('llamar un api y capturar el error', () => {
    fetch.mockReject(new Error('fake error message'));
    getData('https://google.com').catch((error) => {
      expect(error.message).toEqual('fake error message');
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
