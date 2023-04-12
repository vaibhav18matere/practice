# ALGORITHMS

- Algorithm is set of well defined instructions to solve a perticular way.

### 1. Intro to Algorithm

### 2. Measuring Performance

### 3. Time And Space Complexity

### 4. Big O Notation

### 5. Math Algorithm

## Characteristics

- Well defined Inputs and outputs.
- Each step should be clear and non-ambiguous.
- Language independent.

### Need ⁉

- One problem can be solved in many ways.
- How to know which is better way ?

### Algorithm analysis

- in terms of it's input size

  - TIME COMPLEXITY ⏳
  - SPACE COMPLEXITY 🌏

- How to represent time and space complexity ?

1. Big O Notation - Worst case complexity ✅
2. Omega Notation - Best case complexity ❌
3. Theta Notation - Average case complexity ❌

### Big O Notation

- describes complexity of algorithm using algebric terms.

#### characterestics

- represent in terms of input.
- focuses on bigger picture without getting caught up in small details.
- Types : constant, linear, quadratic, cubic, logarithmic.

### Space complexity

- Types : constant, linear, quadratic.

#### Note :

1. No single RIGHT solution ❌ multiple algorithms exists for the same problem ✅
2. Same algorithm with same programming language can be implemented using diff. ways ✅
3. Don't write too cleaver code Wrie code ❌ instead focus on writting a code that is simple to read and easy to maintain ✅

#### Big O for Objects (collection of key-value pair)

1. Insert - O(1)
2. Remove - O(1)
3. Access - O(1)
4. Search - O(n)
5. Object.keys() - O(n)
6. Object.values() - O(n)
7. Object.entries()- O(n)

#### Big O for Arrays (ordered collection of values)

1. Insert / Remove at End- O(1)
2. Insert / Remove at Beginning - O(n)
3. Access - O(1)
4. Search - O(n)
5. Push/Pop - O(1)
6. Shift / unshift / concat / slice / splice - O(n)
7. ForEach / map / filter / reduce - O(n)

#### Big O cheatsheet

1. Calculations not dependent on input size - O(1)
2. Loop - O(n)
3. Nested loops - O(n^2)
4. Input size reduced by half - O(logn)

### Recursion

- Problem solving technique where solution depends on 'solution to smaller instances of the same problem'.

- When function calls itself.

- Always needs a 'base case' i.e. a condition to terminate recursion.

- Doesn't always translate to faster solution.

- Recursive solution may be worse compared to an iterative solution.

### Data Structure

1. Built in Data Structure

- Array
- Object
- Set
- Map

2. Custom Data Structure

- Stack
- Queue
- Circular Queue
- Linked List
- Hash Table
- Tree
- Graph

#### Time complexity of an array

- Insert/remove from end of array - O(1)
- Insert/remove from start of array - O(n)
- Access an array - O(1)
- Search an array - O(n)

#### Time complexity of an Object

- Insert / Remove / Access - O(1)
- Search - O(n)
