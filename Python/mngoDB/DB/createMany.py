import pymongo
from pymongo import MongoClient

client=pymongo.MongoClient('mongodb://localhost:27017')
db=client['11am']
emp_col=db['emp']

emp_list=([{"id":1,"Name":"Valentine Idill","salary":752740,"email":"vidill0@europa.eu","gender":"Female","Phone num":"+1-992-105-3948","location":"Magdeline"},
{"id":2,"Name":"Sadella Burker","salary":2706314,"email":"sburker1@feedburner.com","gender":"Female","Phone num":"+62-708-213-6660","location":"Garrison"},
{"id":3,"Name":"Clevie Aupol","salary":4893971,"email":"caupol2@quantcast.com","gender":"Male","Phone num":"+86-757-140-2123","location":"Sloan"},
{"id":4,"Name":"Heidi Jeste","salary":3200630,"email":"hjeste3@wired.com","gender":"Female","Phone num":"+62-912-433-0242","location":"Del Mar"},
{"id":5,"Name":"Candace Foxen","salary":4772535,"email":"cfoxen4@washington.edu","gender":"Female","Phone num":"+86-966-565-9121","location":"Surrey"},
{"id":6,"Name":"Lock Sokell","salary":1203327,"email":"lsokell5@yahoo.co.jp","gender":"Male","Phone num":"+86-436-447-5889","location":"Express"},
{"id":7,"Name":"Falito Jervois","salary":272029,"email":"fjervois6@theatlantic.com","gender":"Male","Phone num":"+86-691-653-6876","location":"Rutledge"},
{"id":8,"Name":"Kikelia Skelhorne","salary":599394,"email":"kskelhorne7@dedecms.com","gender":"Female","Phone num":"+81-138-641-3439","location":"Karstens"}])

emp_col.insert_many(emp_list)

client.close()