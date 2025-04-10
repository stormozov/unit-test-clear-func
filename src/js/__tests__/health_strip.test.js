import displayCharacterHealthStrip, { HEALTH_STATUS } from '../health_strip';

describe('displayCharacterHealthStrip', () => {
  const gameCharacters = {
    'mage': { name: 'Маг', health: 90 },
    'warrior1': { name: 'Воин', health: 50 },
    'monk': { name: 'Монах', health: 20 },
    'warrior2': { name: 'Воин', health: 10 },
  };

  const healthTestCases = [
    // [status color, character info, expected health status label]
    ['green', gameCharacters.mage, HEALTH_STATUS.green],
    ['yellow', gameCharacters.warrior1, HEALTH_STATUS.yellow],
    ['yellow', gameCharacters.monk, HEALTH_STATUS.yellow],
    ['red', gameCharacters.warrior2, HEALTH_STATUS.red],
  ];

  // TEST #1
  // Документация по each: https://jestjs.io/ru/docs/api#testeachtablename-fn-timeout
  test.each(healthTestCases)(
    'should display correct health status label for %s', 
    (_, characterInfo, expectedHealthStatusLabel) => {
    const healthStatusLabel = displayCharacterHealthStrip(characterInfo);
    expect(healthStatusLabel).toBe(expectedHealthStatusLabel);
  });

  // TEST #2
  test('should not produce the expected result', () => {
    const healthStatusLabel = displayCharacterHealthStrip(gameCharacters.warrior2);
    expect(healthStatusLabel).not.toBe('healthy');
  });
});
