import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Subjects } from './subjects/Teacher'; // This gives access to the Teacher interface


export const cpp = new Cpp();
export const java = new Java();
export const react = new React();


export const cTeacher: Subjects.Teacher = {
  firstName: 'Valentine',
  lastName: 'K',
  experienceTeachingC: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
