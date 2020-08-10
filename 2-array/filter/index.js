function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(i => i % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  return collection.filter((element, index, self) => self.indexOf(element) === index);
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
