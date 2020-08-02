import json
import sqlite3

JSON_FILE = "mac2service.json"
DB_FILE = "mac2device.db"

dicData = json.load(open(JSON_FILE))
conn = sqlite3.connect(DB_FILE)
c = conn.cursor()
c.execute('create table mac2device (id VARCHAR primary key , Name VARCHAR )')
print('create dic table success')
conn.commit()
for code in dicData:
    name = dicData[code]
    data = [code,name]
    c.execute('insert into mac2device values (?,?)', data)
    conn.commit()
    print('insert into mac2device values ' + str(data) + " success")

conn.execute("VACUUM")
c.close()
