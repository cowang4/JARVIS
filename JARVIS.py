#!/user/bin/python
import sys
import string
 
testInput = sys.argv[0:]

texts = ""
i = 1
lenght = len(testInput)
print "Number of Arguments: " + lenght
if lenght > 1:
	while i < lenght:		
		texts = texts + " " + testInput[i]
		i = i + 1
	
	print "You said:" + texts
else:
	print "Error No Arguments"
