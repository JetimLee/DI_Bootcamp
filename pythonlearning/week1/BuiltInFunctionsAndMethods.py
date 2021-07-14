print(len('01234'))
#python has a ton of string methods - good to look them up
#one example of a string method is .format

greet = 'hello'

#this will caps all of the words
print(greet.upper())

#this will capitalize only the beginning of the sentence
print(greet.capitalize())

print(greet.find('e'))

print(greet.find('z'))

quote = 'to be or not to be'

#this highlights the immutability of strings in python - can be overwritten/destroyed or created, not mutated
print(quote.replace('be','me'))
print(quote)