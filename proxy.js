'use strict';

const obj = {};

const person = new Proxy(obj, {
  get(target, prop) {
    console.log(target);
    console.log(prop);
    return target[prop];
  },
  set(target, prop, value) {
    console.log(target);
    console.log(prop);
    console.log(value);
    return target[prop] = value;
  }
});

person.name = 'Vlad';

console.log(obj.name);
