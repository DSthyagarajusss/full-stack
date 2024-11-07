import pymongo
client =pymongo.MongoClient('mongodb://localhost:27017/')
db = client['11am'] 
user_col = db['users']  
query={'id':1}
user_col.delete_many(query)
print('bye bye ')
client.close()