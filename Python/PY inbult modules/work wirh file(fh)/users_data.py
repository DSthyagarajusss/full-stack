#in json data itarete only some  data 

import json
data=open('users.json','r')
users=json.load(data)
print(type(users))

employee=[]
for user in users:
    employee.append({'eid':user['id'],
                    'ename':user['name'],
                    'email':user['email']})
fp2=open('emp.json','w')
user=json.dump(employee,fp2)
print(type(user))

data.close()
fp2.close()