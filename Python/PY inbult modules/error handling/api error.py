import requests
import json
import csv
api_url='https://jsonplaceholder.typicode.com/users'
user_data=None
users=None
try:
    user_data=requests.get(api_url)
    # print(user_data.status_code)
    # print()
    user_data.raise_for_status()
    users=user_data.json()
except requests.exceptions.RequestException as e:
    fp=open('user.josn','r')
    users=json.load(fp)
    user_data=fp.read()
users=user_data.json()
print(type(users))
print(users)