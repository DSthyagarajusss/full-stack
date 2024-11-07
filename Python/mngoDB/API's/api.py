import requests
from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017/')
db = client['11am'] 
collection = db['users']  


url = 'https://jsonplaceholder.typicode.com/users'


headers = {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
}


response = requests.get(url, headers=headers)

if response.status_code == 200:
    users = response.json()  

    if users:
        
        try:
            result = collection.insert_many(users) 
            print(f'Successfully inserted {len(result.inserted_ids)} users into MongoDB')
        except Exception as e:
            print(f'Error inserting into MongoDB: {e}')
else:
    print(f'Error: {response.status_code}, {response.text}')
