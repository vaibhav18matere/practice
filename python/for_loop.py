# for loop

for number in range(3):
    print("Chinkudaa", number+1)


for x in range(4):
    print("*", (x+1) * "*")


for y in range(1, 10, 2):
    print(y, y*"#")


tea_varieties = ["A", "B", "C"]

if "D" in tea_varieties:
    print("D is available")
else:
    print("D is NOT available")

tea_varieties.append("E")

print(tea_varieties)

tea_varieties.pop()

print(tea_varieties)

names = ["Vaibhav", "Shubham", "Prasad", "Omkar", "Siddhant"]

names.remove("Vaibhav")

print(names)