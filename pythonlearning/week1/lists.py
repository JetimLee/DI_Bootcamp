li = [1, 2, 3, 4, 5]
# basically a JavaScript array

# list slicing

array = ['hello', 'gavin', 'this', 'is', 'an', 'array']
print(array[5])

# print(array[0:3:])

# to copy a list do this
new_array = array[:]
# this works because slicing an array and storing it in another variable will create another array in memory
# strings are immutable
# lists are mutable
array[0] = 'laptop'

print(array)
print(new_array)
