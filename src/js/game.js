export default function orderByProps(obj, arr) {
  const arrSortFirst = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] in obj) {
      arrSortFirst.push({
        key: arr[i],
        value: obj[arr[i]],
      });
    }
  }

  const arrSortSecond = [];
  for (const prop in obj) {
    if (arr && !arr.includes(prop)) {
      arrSortSecond.push({
        key: prop,
        value: obj[prop],
      });
      arrSortSecond.sort((prev, next) => (prev.key > next.key ? 1 : -1));
    }
  }
  return [...arrSortFirst, ...arrSortSecond];
}
