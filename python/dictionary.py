# Dictionary

# Order is not important , key is important

user = {"name": "vaibhav", "age": 23, "gender": "male"}
print(user)

print(user.get("name"))

new_age = user["age"] = 28
print(new_age)

for x in user:
    print('key name is', x)

for y in user:
    print(y, user[y])
