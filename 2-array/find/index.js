export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const tperson = collection.find(person => person.age > 10 && person.age < 20);
  return tperson.name;
}
