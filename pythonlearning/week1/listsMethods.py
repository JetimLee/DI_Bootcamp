basket = [1, 2, 3, 4, 5]

print(len(basket))

basket.append('hello')
print(basket)
basket.pop()
print(basket)

basket.insert(3, 'gavin')
# here insert takes the index and then the thing you want to insert
# list methods do not give a new list, they just change the list
# this means you cannot reassign the changed list to a new list

print(basket)
# append mutates the list in place - it doesn't produce a value, not like slicing


# removing methods

itemToGive = basket.pop(0)
# pops at the index
# can be reassigned to a new list - pop returns whatever you have just removed
print(basket)
print(itemToGive)

basket.remove('gavin')
print(basket)
# here you give the value you want to remove

basket.clear()
print(basket)
