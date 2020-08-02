import csv
import json
csvfile = open('file.csv','r')
jsonfile = open('file.json','w')


fieldNames = ("","","","")
reader = csv.DictReader(csvfile,fieldNames)
for row in reader:
    json.dumps(jsonfile)
    jsonfile.write('\n')