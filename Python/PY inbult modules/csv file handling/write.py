#wrinting into new json 
import json
import csv
cus=[
    {'id':990,'name':'raju','aval':True},
    {'id':930,'name':'rahul','aval':True},
    {'id':940,'name':'raj','aval':True},
    {'id':950,'name':'ragu','aval':True}
]
#fp1=open('emp.json','w')
fp2=open('emp1.csv','w')
#json.dump(cus,fp1)
print('json create success')
wr=csv.writer(fp2)
wr.writerow(['id','name','aval'])
for x in cus:
    wr.writerow([x['id'],x['name'],x['aval']])

#fp1.close()
fp2.close()
