'me me me'
#01234567

selfish = 'me me me'

print(selfish[0])

print(selfish[0:6:2])
#example of string slicing

#[start:end:stepover]

numbers = '01234567'

print(numbers[::-1])
#great for reversing an order

#strings are immutable
#immutability is where something cannot be changed
#cannot do this

# numbers[1] = 8 - this will not work

#can do this

numbers = numbers + '8'
print(numbers)
#this will mutate numbers and now it'll be a new string in memory, 01234567 do not exist anymore