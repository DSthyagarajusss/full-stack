import csv

fp=open('emp.csv','r')
rows=csv.reader(fp)
for row in rows:
    print(row)