# A tuple is like a list, but you cannot modify them - they're immutable

my_tuple = (1, 2, 3, 4, 5)
# my_tuple[1] = 'z' can't do this
print(my_tuple[1])

print(4 in my_tuple)

new_tuple = my_tuple[1:2]
print(new_tuple)

# only has 2 methods - count and index
