export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let num = 0;
  for (let i = 0; i < collection.length; i += 1) {
    if (collection[i].indexOf('粤A') !== -1) {
      num += 1;
    }
  }
  return num;
}
