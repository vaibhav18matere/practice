# Dictionary

# Order is not important , key is important

user = {"name": "vaibhav", "age": 23, "gender": "male"}
print(user)

print(user.get("name"))

new_age = user["age"] = 28
print(new_age)

# Looping over a dictionary

for x in user:
    print('key=>', x)

# Accessing both key and value

for y in user:
    print(y, user[y])


# Better way of looping over a dictionary
result = {"English": 55, "Math": 65, "Science": 75}

for key, value in result.items():
    print(key, value)

# Length of dictionary

print(len(result))

result.pop("Math")

print(result)
