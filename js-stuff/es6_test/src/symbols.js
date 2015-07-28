export default class Symbols {
  static get title() {
    return 'Symbols'
  }

  static examples() {
    // Symbols are tokens that serves as unique IDs
    let symbol1 = Symbol()
    console.log(typeof symbol1)
    let symbol2 = Symbol('This is the Symbol description')
    console.log(symbol2.toString())
    console.log(symbol1 === symbol2)

    // Symbols can be used as property keys
    const MY_KEY = Symbol()
    const FOO    = Symbol()

    let obj1 = {
        [MY_KEY]: 123,
        [FOO]() { return 'bar' }
    }

    console.log(obj1[MY_KEY]) // 123
    console.log(obj1[FOO]())  // bar

    // Enumerating own property keys
    let obj = {
        [Symbol('my_key')]: 1,
        enum: 2,
        nonEnum: 3
    };
    Object.defineProperty(obj,
        'nonEnum', { enumerable: false })

    // Object.getOwnPropertyNames() ignores symbol-valued property keys:
    console.log(Object.getOwnPropertyNames(obj)) // ['enum', 'nonEnum']

    // Object.getOwnPropertySymbols() ignores string-valued property keys:
    console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(my_key)]

    // Reflect.ownKeys() considers all kinds of keys:
    console.log(Reflect.ownKeys(obj)) // [Symbol(my_key), 'enum', 'nonEnum']
  }
}
