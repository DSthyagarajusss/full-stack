import mysql.connector
try:
    dbcon=mysql.connector.connect(host="localhost",user='root',password='root',database='9am')
    cursor=dbcon.cursor()
    cursor.execute('insert into persons values (101,"hh","rjau","jjaas","ban"); ')
    dbcon.commit()
    print('data adding is done ')
except mysql.connector.Error as err:
    print(err)
finally:
    cursor.close()
    dbcon.close()
    