# Dictionary
dictionary = {
    'a': [1, 2, 3],
    'b': 2
}


myList = [{
    'a': [1, 2, 3],
    'b': 2
},
    {
    'b': [4, 5, 6],
    'c': 3
}
]

print(myList[1]['b'][0])
print(dictionary['a'][2])

# can do
user = {
    'basket': [1, 2, 3],
    'greet': 'hello'
}

print(user.get('age', 55), user['basket'])

user2 = dict(name='gav gav')
print(user2)
