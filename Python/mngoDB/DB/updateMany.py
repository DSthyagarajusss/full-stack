import pymongo


client = pymongo.MongoClient('mongodb://localhost:27017')
db = client['11am']
user_col = db['users']
user_col.update_many(
    {'id': 2},{'$set': {'name': 'kumar','gender':'Male'}},
    {'id': 3},{'$set': {'name': 'Dhivya','gender':'Female'}}
)

client.close()
