username = input('Please enter a username: ')
password = input('Please enter your password: ')
passwordLength = len(password) * '*'

print(f'Hello {username} your password of {passwordLength} is {len(password)} letters long')