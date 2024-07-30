class Animal:
    # This is class var
    height = 30

dog = Animal()
# This make instance var, not change class var
dog.height = 10

cat = Animal()

print(dog.height)
print(cat.height)