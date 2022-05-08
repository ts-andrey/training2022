/* 
Describe base class Entity that can store name
Implement child classes Stuff, Box, User. Box can store some stuff[]. Every box belongs to user
Add example of usage of these classes, e.g., create some instances, display data related to them
Push code to repo “sweet sugar”
 */

class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Stuff extends Entity {
  constructor(name) {
    super(name);
  }
  toString() {
    return `name: ${this.name}`;
  }
}
class Box extends Entity {
  constructor(name, stuff) {
    super(name);
    this.stuff = stuff;
  }
  toString() {
    return `name: ${this.name}, stuff: [${this.stuff.toString()}]`;
  }
}
class User extends Entity {
  constructor(name, box) {
    super(name);
    this.box = box;
  }
  toString() {
    return `name: ${this.name}, box: [${this.box}]`;
  }
}

const someStuff1 = new Stuff('Pencil');
const someStuff2 = new Stuff('Pen');
const someStuff3 = new Stuff('Penal');
const someBox = new Box('School Stuff', [someStuff1, someStuff2, someStuff3]);
const someUser = new User('Johnny', someBox);

console.log({ box: someBox.toString(), user: someUser.toString() });
