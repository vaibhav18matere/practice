x = 5
y = 2
z = 1 + 2j

print(x+y)
print(x-y)
print(x*y)
print(x/y)
print(x//y)
print(x % y)
print(x**y)

x = 10
x = x+5
# we can write above as
x += 5

print(round(2.8))
print(abs(-5.5))

import math 

print(math.ceil(9.4))
print(math.floor(9.9))
print(math.sqrt(25))

# Other Math Modules
#  https://www.w3schools.com/python/module_math.asp

# Type Conversion
a = "1"

print(type(a))

print(int(a))
print(int(a)+1)
print(float(a))
print(bool(a))

b = 2

print(str(b))
print(type(b))

#  Falsy Values are "" , 0 , None

print(bool(0))
print(bool(""))
