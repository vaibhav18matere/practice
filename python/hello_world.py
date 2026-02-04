print("hello world!!")

print("*"*3)

ratings = 4.5
isMarrird = False
no_of_students = 1000
course_name = "Mathematics"
course_category = 'education'

print(no_of_students)
print(ratings)
print(isMarrird)
print(course_name)
print(course_category)

# function
def WelcomeFunc(n):
     print(n)

WelcomeFunc("Vaibhav")

# 
full_name = "Vaibhav Matere"
print(len(full_name))

print(full_name[1])
print(full_name[-1])

print(full_name[0:4])
print(full_name[:3])
print(full_name[:])

# Escape Sequence

escape_character = "This is \"escape\" character, double quote"
print(escape_character)

also_escape_character = "This is also a \'escape\' character, with single quote"
print(also_escape_character)

#  New Line
new_line = "new \n line"
print(new_line)

# Formatting Strings

first_name = "VaibhaV"
last_name = "Matere"

print(first_name + last_name)
print(first_name + " " + last_name)

# better approach is
full_name = f"{first_name} {last_name}"

print(full_name)

