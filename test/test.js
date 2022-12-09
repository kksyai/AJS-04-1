import lifeLine from '../src/lifeLine';

test.each([
  ['Varior', 90, 'healthy'],
  ['Mar', 27, 'wounded'],
  ['Ogr', 8, 'critical'],
])('testing %s life %i amount is %s', (_, health, expected) => {
  const result = lifeLine(health);
  expect(result).toBe(expected);
});
