name = 'gavin'
age = 27

print('hi' + " " + name)

#can display this easily with formatted strings

#just add f to the beginning and you make a formatted string, very similar to JS template strings
print(f'hi {name} you are {age} years old')

#old way

print('hi {}. you are {} years old'.format('gavin','27'))

print('hi {new_name}. you are {age} years old'.format(new_name='sapir',age=26))