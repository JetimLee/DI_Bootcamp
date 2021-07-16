my_set = {1, 2, 3, 4, 5}
# like a dictionary without keys
# it is an unordered collection of unique objects

my_set.add(2)
my_set.add(100)
my_set.add('gavin')
print(my_set)

my_list = [1, 2, 2, 3, 3, 4, 5, 5, 6]
my_list_set = set(my_list)
print(my_list_set)

# set objects do not have indexes - in this way it's similar to a dictionary
# check if something exists

print(8 in my_list_set)
print(len(my_list_set))

# can switch it back to a list
print(list(my_list_set))
