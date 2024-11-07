import requests
import pymongo
user_data=requests.get('https://jsonplaceholder.typicode.com/users')
user_json=user_data.json()
# user_list=list(user_json)
new_data=[]
for user in user_json:
    new_data.append({'id':user['id'],'username':user['username'],'city':['sddress'],'website':user['website']})


client=pymongo.MongoClient('mongodb://localhost:27017')
db=client['11am']
user_col=db['users']

user_col.insert_many(new_data)
print('data as ben updated')