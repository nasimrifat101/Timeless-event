


<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

---

### 1. 
```javascript
let greeting;
greetign = {};
console.log(greetign);
```
- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`


<details><summary><b>Answer</b></summary>
<p>

#### **Answer: B: `ReferenceError: greetign is not defined`**

**Explanation:** There's a small mistake here. `greetign` is misspelled; it should be `greeting`. Because of this typo, JavaScript doesn't recognize `greetign`, leading to an error saying it's not defined.

</p>
</details>

### 2. 
```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```
- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### **Answer: B: `TypeError`**

**Explanation:** In this code, the function is trying to add a number and a string directly. JavaScript doesn't allow this. It throws a `TypeError` because adding a number and a string in this way doesn't work in JavaScript.

</p>
</details>

### 3. 
```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```
- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### **Answer: A: `['🍕', '🍫', '🥑', '🍔']`**

**Explanation:** Even though `info.favoriteFood` is changed to "🍝", it doesn't affect the original `food` array. The `food` array remains `['🍕', '🍫', '🥑', '🍔']` because changing a property of an object doesn't change the original array.

</p>
</details>

### 4. 
```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`


<details><summary><b>Answer</b></summary>
<p>

#### **Answer: B: `Hi there, undefined`**

**Explanation:** The function `sayHi()` is missing a name. When a function expects a name but doesn't receive one, it treats the name as `undefined`. So, it prints "Hi there, undefined".

</p>
</details>

### 5. 
```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### **Answer: A: `1`**

**Explanation:** This code counts the number of truthy values in the `nums` array. In JavaScript, 0 is considered falsy, and all other numbers are truthy. So, only the number 1 is truthy in this array, making the count 1.

</p>
</details>
