import pymongo
client = pymongo.MongoClient('mongodb://localhost:27017')
db = client['11am']
user_col = db['users']
user_col.update_one({'id': 1}, {'$set': {'username': 'ramgopal'}})
client.close()
