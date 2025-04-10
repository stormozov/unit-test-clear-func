export const HEALTH_STATUS = {
  'green': 'healthy',
  'yellow': 'wounded',
  'red': 'critical',
};

export default function displayCharacterHealthStrip(characterInfo) {
  const { health } = characterInfo;

  return (health < 15)
    ? HEALTH_STATUS.red
    : (health <= 50)
      ? HEALTH_STATUS.yellow
      : HEALTH_STATUS.green;
}
