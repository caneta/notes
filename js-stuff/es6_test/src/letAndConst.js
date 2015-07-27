export default class LetAndConst {
  static get title() {
    return 'let and const keywords'
  }

  static examples() {
    // Variables declared with let have Block Scope, while variables declared with var have Function Scope
    function f() {
      {
        let x = "lalala"
          console.log(x) // lalala
          {
            console.log(x)
              // okay, block scoped name
              const x = "sneaky"
              const y = "cucucu"
              console.log(x)
              // error, const
              // x = "foo"
          }
        // error, already declared in block
        // let x = "inner"
        // error, y is declared inside an inner block
        // console.log(y)
      }
    }

    f()
  }
}
