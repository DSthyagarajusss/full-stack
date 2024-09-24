import requests
data=requests.get('https://jsonplaceholder.typicode.com/users')
print(type(data))
