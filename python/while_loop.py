number = 100

while number > 0:
    print(number)
    number //= 2

# Write a program to take a user input and print the same
#  till user enters QUIT manually


# user_input = ""

# while user_input != "QUIT":
#     user_input = input("....")
#     print("you typed...", user_input)


# better way to write above code is


# while True:
#     input_given = input("....")
#     print("yhe input is...", input_given)
#     if input_given.lower() == "quit":
#         break


# find the even numbers from 0 to 10

count = 0

for x in range(1, 10):
    if (x % 2 == 0):
        count += 1
        print(x)
print("we have", count, "even numbers")
