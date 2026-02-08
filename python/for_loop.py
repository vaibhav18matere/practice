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

# Find squares of numbers from 0 to 10

squared_nums = [x**2 for x in range(11)]

print(squared_nums)
