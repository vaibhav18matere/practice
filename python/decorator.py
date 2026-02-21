
# I want to implement a functionality where even if
# user enter a,b or b,a large and small values
# I want to always divide bigger value by smaller value

def decoratorFunc(func):
     def divideCheckFunc(a,b):
          if(a<b):
               a,b=b,a
          return func(a,b)
     return divideCheckFunc


@decoratorFunc
def divisonFunc(a, b):
    print(a/b)

divisonFunc(2, 4)
divisonFunc(10, 2)


def decorator(func):
    def wrapper(*args, **kwargs):
        # do something before
        result = func(*args, **kwargs)
        # do something after
        return result
    return wrapper

# Python decorator like a higher-order function in JavaScript
