export default class Classes {
  static get title() {
    return 'Classes'
  }

  static examples() {
    // Base class minimal example
    // A class body can only contain methods,
    // but not data properties!
    class Point {
      constructor(x, y) {
        this.x = x
          this.y = y
      }
      toString() {
        return `(${this.x}, ${this.y})`
      }
    }

    var p = new Point(25, 8)
      console.log(p.toString())

      // Inheritance minimal example
      class ColorPoint extends Point {
        constructor(x, y, color) {
          super(x, y)
            this.color = color
        }
        toString() {
          return `${super.toString()} in ${this.color}`
        }
      }

    let cp = new ColorPoint(25, 8, 'green')
      console.log(cp.toString()) // '(25, 8) in green'
      console.log(cp instanceof ColorPoint) // true
      console.log(cp instanceof Point) // true

      // ReferenceError, because classes are
      // not hoisted unlike functions:
      //
      // new Foo()
      // class Foo {} // ReferenceError
      //
      // ...but the following is corrct:
      //
      // function functionThatUsesBar() { new Bar(); }
      // class Bar {}
      // functionThatUsesBar(); // OK

      // Class expression: identifier visible only
      // within the expression
      const MyClass = class Me {
        getClassName() {
          return Me.name
        }
      }
    let inst = new MyClass()
      console.log(inst.getClassName()) // Me
      // console.log(Me.name) // ReferenceError: Me is not defined

      // Three kinds of methods:
      class Foo {
        constructor(prop) {
          this.prop = prop
        }
        static staticMethod() {
          return 'classy'
        }
        prototypeMethod() {
          return 'prototypical'
        }
      }
    let foo = new Foo(123);
    console.log(foo.prop)
      console.log(Foo.staticMethod())
      console.log(foo.prototypeMethod())

      // Getter and setter methods:
      // methods names and object properties must be different
      // to avoid circular dependencies
      class Person {
        get name()     { return this.firstName }
        set name(name) { this.firstName = name }
      }

    let person = new Person()
      person.name = 'Tom'
      console.log(person.name) // Tom
  }
}
