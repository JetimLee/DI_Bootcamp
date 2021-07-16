my_set = {1, 2, 3, 4, 5, 6, 7}
your_set = {6, 7, 8, 9, 10}

# print(my_set.difference(your_set))
# print(your_set.difference(my_set))

# my_set.discard(7)
# print(my_set)

# my_set.difference_update(your_set)
# updating it so that the differences between the two sets is removed
# like difference, but with changing
# print(my_set)

print(my_set.intersection(your_set))
# shows where the two sets overlap

print(my_set.isdisjoint(your_set))
# checks to see if they have anything in common, if they do its false, if they don't it's true

print(my_set.union(your_set))
# unites the two sets and removes any duplicates - creates a new set
