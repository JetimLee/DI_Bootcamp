basket = ['a', 'x', 'y', 'b', 'c',  'e', 'd', 'f']

basket.sort()

print(basket)

print(sorted(basket))
# this will return a new array

# so i can store it in a new variable
sortedBasket = sorted(basket)
print(sortedBasket)

# can also do
myBasket = basket.copy()
print(myBasket)
basket.reverse()
# reverses the basket in place, just switches the index
print(basket)
