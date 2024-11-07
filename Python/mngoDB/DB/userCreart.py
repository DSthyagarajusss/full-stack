import pymongo

client=pymongo.MongoClient('mongodb://localhost:27017')
db=client['11am']
users_col=db['users']

users_list=([{"id":1,"name":"Rahul","gender":"Male"},
{"id":2,"name":"Sonia","gender":"Female"},
{"id":3,"name":"Priyanka","gender":"Female"},
{"id":4,"name":"Modi","gender":"Male"},
{"id":5,"name":"Amith","gender":"Male"}])
users_col.insert_many(users_list)

client.close()