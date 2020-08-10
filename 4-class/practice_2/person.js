// TODO 10: 在这里写实现代码
export default class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}

export class student extends person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `I am a student. I am at Class ${this.klass}.`;
  }
}
