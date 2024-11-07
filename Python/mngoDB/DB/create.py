import pymongo
    

client=pymongo.MongoClient('mongodb://localhost:27017')
db=client['11am']
user_col=db['users']

user_col.insert_one({'id':6,'name':'raju','gender':'Male'})
client.close()
