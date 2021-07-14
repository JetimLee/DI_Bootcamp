print('hello' + ' ' + 'andrei')
#cannot add strings and ints together

print(type(int(str(100))))
#turns 100 into a string and then we're checking the type then we print it out

#same as doing this
a = str(100)
b=int(a)
c=type(b)
print(c)