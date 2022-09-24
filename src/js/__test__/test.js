import orderByProps from '../game';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('Проверка сортировки с двумя аргументами', () => {
  expect(orderByProps(obj, ['name', 'level']))
    .toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
});

test('Проверка сортировки если во втором аргументе задано несуществующее свойство', () => {
  expect(orderByProps(obj, ['name', 'lastname']))
    .toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
    ]);
});

test('Проверка если во втором аргументе задан массив из более 2х свойств', () => {
  expect(orderByProps(obj, ['level', 'defence', 'health', 'name', 'attack']))
    .toEqual([
      { key: 'level', value: 2 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' },
      { key: 'attack', value: 80 },
    ]);
});
