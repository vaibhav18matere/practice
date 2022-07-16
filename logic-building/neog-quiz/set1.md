Each Question has 3 options. Correct answers are highlighted in bold.

Time needed to complete this Quiz: 12 minutes

1. What does the following code output?

```jsx
{
	var x = 2;
	var y = "2";
	console.log(x == y)
}
```

A. Returns false since x is a number and y is a string

**B. Returns true since the value of both x and y is the same**

C. Returns true since both variables are declared using var

1. What does the following code output?

```jsx
{
	var x = 3;
	var y = "3";
	console.log(x + y)
}
```

**A. 33**

B. 6

C. Syntax Error: Cannot add different variable types

1. What does NaN represent?

A. **Not-a-Number**

B. Negative-and-Number

C. Null-a-Number

1. What does the following code output?

```jsx
{
	var obj = { name: "Akanksha", surname: "Choudhary" };
	var obj = { name: "Tanvi", surname: "Priya" };
	console.log(obj);
}
```

A. { name: "Akanksha", surname: "Choudhary" }

B. Type Error: Assignment to var variable

**C. { name: "Tanvi", surname: "Priya" }**

1. What does the following code output?

```jsx
{
	const obj = { color: "blue", item: "top" };
	var obj = { color: "yellow", item: "shirt" };
	console.log(obj);
}
```

A. undefined

B. { color: "yellow", item: "shirt" }

**C. SyntaxError: Identifier 'obj' has already been declared**

1. What does “this” refer to in the following code?

```jsx
var myData = {
	name: "Parul",
	printName: function(){
		console.log(this.name)	
	}
}
myData.printName();
```

A. printName

B. name

**C. myData**

1. What does the following code output?

```jsx
var myData = {
	name: "Parul",
	printName: function(role){
		console.log(name, role)	
	}
}
myData.printName("PA");
```

**A. “” PA**

B. Parul undefined

C. Parul PA

1. What does the following code output?

```jsx
function getFavColor(){
	console.log(favColor1);
  let favColor1 = "red";
  var favColor2 = "Yellow";
}
getFavColor();
```

**A. Throws an error**

B. red

C. “”

1. What does the following code output?

```jsx
function getFavColor(){
	console.log(favColor2);
  let favColor1 = "red";
  var favColor2 = "Yellow";
}
getFavColor();
```

A. yellow

B. red

**C. undefined**

1. What does the following code output?

```jsx
function getFavColor(){
	var favColor2 = "Yellow";
  let favColor1 = "red";
}
getFavColor();
console.log(favColor2);
```

A. yellow

B. red

**C. Throws an error**