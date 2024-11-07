import pymongo


client=pymongo.MongoClient('mongodb://localhost:27017')
db=client['11am']
user_col=db['users']
user_list= user_col.find()

print(type(user_col))
print(type(user_list))

for users in user_list:
    print(users)
client.close()