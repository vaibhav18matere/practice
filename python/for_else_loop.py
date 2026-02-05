#  for else loop

successful = True
# successful = False

for warning in range(3):
    print("Give warning...")
    if successful:
        print("Successfully Checked that!!")
        break
else:
    print("Maximum attempt reached to 3")
