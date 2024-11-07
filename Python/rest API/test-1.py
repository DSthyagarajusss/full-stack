
import csv
cus=[
    {'id':990,'name':'raju','aval':True},
    {'id':930,'name':'rahul','aval':True},
    {'id':940,'name':'raj','aval':True},
    {'id':950,'name':'ragu','aval':True}
]

fp2=open('emp1.csv','w')


wr=csv.writer(fp2)
wr.writerow(['id','name','aval'])
for x in cus:
    wr.writerow([x['id'],x['name'],x['aval']])
print('csv write ')

#fp1.close()
fp2.close()
