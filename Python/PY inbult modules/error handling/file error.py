fp=None
try:
    fp=open('data.text','r')
except:
    fp=open('one.text','r')
data=fp.read()
print(data)