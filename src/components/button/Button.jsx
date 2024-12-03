const Button = ({ numberA,numberB }) => {
  const result = numberA + numberB
  return <button>{result}</button>
}

// DESTRUCTURING

const user = {
  name:'Fernando',
  hobbies: 'React',
  age:21
}

// const name = user.name
// const hobbies = user.hobbies
// const age = user.age

const {name, hobbies, age} = user

console.log(name, hobbies, age)


export default Button