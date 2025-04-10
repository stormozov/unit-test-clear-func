import { httpGet, httpPost } from '../http';

// Документация по describe: https://jestjs.io/ru/docs/api#describename-fn
describe('HTTP functions', () => {
  let testUrl;

  beforeEach(() => {
    testUrl = 'http://server:8080/users/1';
  });

  test('httpGet throws error', () => {
    expect(() => httpGet(testUrl)).toThrow(testUrl);
  });

  test('httpPost throws error', () => {
    expect(() => httpPost(testUrl)).toThrow(testUrl);
  });
});
