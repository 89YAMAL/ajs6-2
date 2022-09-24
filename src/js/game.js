export default function variantOfAttack(data) {
  const result = [];
  for (const {
    id, name, icon, description = 'Описание недоступно',
  } of data.special) {
    result.push({
      id, name, icon, description,
    });
  }
  return result;
}
