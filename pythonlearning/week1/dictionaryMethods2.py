user = {
    'basket': [1, 2, 3],
    'greet': 'hello',
    'age': 20
}

print('greet' in user.keys())
print('hello' in user.values())
print(user.items())

user2 = user.copy()

user.clear()
print(user)
print(user2)

print(user2.pop('age'))  # this will return the value
print(user2)

# last item will get removed, but a dictionary is unordered, so this can remove at random
# print(user2.popitem())

user2.update({'greet': 'yo'})
print(user2)
