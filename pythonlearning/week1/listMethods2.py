basket = [1, 2, 3, 4, 5]
new_basket = ['a', 'b', 'c', 'd']

print(basket.index(2))
print(new_basket.index('a'))
# this will tell you the index of the item passed inside

print(new_basket.index('c', 0, 3))
# here you say which thing you want the index of and the indices you're searching through

print('z' in new_basket)
#like .includes in JavaScript
# will give you true/false depending on if the thing is inside of the list

print(new_basket.count('a'))
# will tell you how many occurances there are of something inside of a list
