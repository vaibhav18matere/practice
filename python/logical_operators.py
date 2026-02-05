# Logical Operators

# and - both conditions are true

high_income = True
high_credit_score = True

if high_income and high_credit_score:
    print("ELigible for Loan")
else:
     print("Not eligible for loan")

# or - any 1 condition is true

# high_income = True
# high_credit_score = False

if high_income or high_credit_score:
    print("ELigible for Loan")
else:
    print("Not eligible for loan")

#  not

# indian_citizen = True
indian_citizen = False

if not indian_citizen:
    print("Cannot proceed further")
else:
    print("Apply online for loan")