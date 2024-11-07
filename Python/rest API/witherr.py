import requests
import csv
import json 
import mysql.connector
import pymongo 

users_data = requests.get('https://jsonplaceholder.typicode.com/users')
users = users_data.json()

try:
    fp1 = open('user.json', 'w')
    json.dump(users, fp1)
    print("User Data - written to JSON file successfully")
except Exception as err:
    print(err)
finally:
    fp1.close()


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
#     cursor.close()
#     con.close()

#mogo DB
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

fp2=None
try:   
    fp2=open('user.csv','w',)
    wr=csv.writer(fp2)
    wr.writerow(['uid','name','email'])
    for user in users:
        wr.writerow([user['uid'],user['name'],user['email']])
    print('csv write ')
except Exception as err:
    print(err)
finally:
    fp2.close()