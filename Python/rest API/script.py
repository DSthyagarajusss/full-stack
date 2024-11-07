import requests
import csv
import json 
import mysql.connector
import pymongo 

# Fetch user data from the API
users_data = requests.get('https://jsonplaceholder.typicode.com/users')
users = users_data.json()

# Write user data to a JSON file
fp1 = open('user.json', 'w')
json.dump(users, fp1)
print("User Data - written to JSON file successfully")
fp1.close()

# Prepare user data for database insertion
# new_users = []
# for user in users:
#     new_users.append((user['id'], user['name'], user['email'], user['address']['city'], user['website'], user['phone']))

# print(new_users)
# print("Good Morning")
# # Connect to MySQL and insert data
# try:
#     con = mysql.connector.connect(host='localhost', user='root', password='root', database='rest_api')
#     print(con)
#     cursor = con.cursor() #cursor used to excute sql statements
#     print(cursor)
#     sql_st = 'INSERT INTO user(uid, uname, email, city, website, phone) VALUES (%s, %s, %s, %s, %s, %s)'
#     cursor.executemany(sql_st, new_users)
#     con.commit()
# except mysql.connector.Error as err:
#     print(err) 
#     print("Data inserted successfully into MySQL table")
# finally:
# # Close the cursor and connection
#     cursor.close()
#     con.close()
client =None
try:
    client=pymongo.MongoClient('mongodb://localhost:27017/')
    db=client['API_data']
    user_col=db['users']
    user_col.insert_many(users)
    print('data is updated')
except Exception as err:
    print(err)
finally:
    client.close