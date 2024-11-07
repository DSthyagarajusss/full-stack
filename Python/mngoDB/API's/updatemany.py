import pymongo
client = pymongo.MongoClient('mongodb://localhost:27017')
db = client['11am']
user_col = db['users']
query={'id':2 ,'id':3}
query2={'name':'raju','name':'rahul'}
user_col.update_many(query,query2)
client.close()