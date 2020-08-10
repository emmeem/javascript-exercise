// TODO 17: 在这里写实现代码
// TODO 14: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  introduce() {
    const result = `${super.introduce()} I am a Worker. I have a job.`;
    return result;
  }
}
