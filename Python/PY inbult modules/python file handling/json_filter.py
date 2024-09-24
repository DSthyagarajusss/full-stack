import json
fp1=open('json_data.json','r')
users=json.load(fp1)
print(type(users))
male_users=list(filter(lambda user:user['gender']=='Male',users))
female_users=list(filter(lambda user:user['gender']=='Female',users))
print(len(male_users))
print(len(female_users))


fp2=open('male_users.json','w')
fp3=open('female_users.json','w')

json.dump(male_users,fp2)
json.dump(female_users,fp3)
