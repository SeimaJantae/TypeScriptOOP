// Principles of OOP
// Encapsulation: Create class collect data (attributes) and methods (function), private var with setter and getter
class User {
  public name: string;
  private _password: string;

  constructor(name: string, password: string) {
    this.name = name;
    this._password = password;
  }

  // setter
  setPassword(newPassword: string): void {
    this._password = newPassword;
  }

  // getter
  getPassword(): string {
    return this._password;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Password: ${this._password}`);
  }
}

// Inheritance: Use data or method from parent class
class Student extends User {
  private _level: string;

  constructor(name: string, password: string, level: string) {
    super(name, password); // Use parent constructor
    this._level = level;
  }

  // Polymorphism: Overriding method
  displayInfo(): void {
    console.log(`Name: ${this.name}, Level: ${this._level}`);
  }
}

// Create object and test
const user1 = new User("a", "aaa");
user1.displayInfo(); // Name: a, Password: aaa
user1.name = "A";
user1.setPassword("AAA");
user1.displayInfo(); // Name: A, Password: AAA

const user2 = new Student("b", "bbb", "G12");
user2.displayInfo(); // Name: b, Level: G12

// Abstraction: Sub class is the same as abstract class, can not create object from abstract class
abstract class Shape {
  abstract draw(): void;
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing a circle");
  }
}

const circle = new Circle();
circle.draw(); // Drawing a circle
