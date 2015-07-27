// Modules: default exports, one per module
export default class Modules {
  static get title() {
    return 'Modules'
  }

  static examples() {
    console.log('Test!')
  }
}

export const sqrt = Math.sqrt

export function square(x) { return x*x }

export function diag(x, y) {
  return sqrt(square(x) + square(y))
}
