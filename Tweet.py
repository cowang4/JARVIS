import os
import sys
from twitter import *

CONSUMER_KEY = 'BEgb1u8P1OntD4USkyr8A'
CONSUMER_SECRET = 'HktUxwALaZHKj5B6bTNQa1DisOunfydsIeSTbikZX0'

oauth_filename = os.path.join(os.path.expanduser('~'), ' .twitterdemo_oauth')

if not os.path.exists(oauth_filename):
	oauth_dance('JARVIS: Raspberry Pi Flavored', CONSUMER_KEY, CONSUMER_SECRET, oauth_filename)
(oauth_token, oauth_token_secret) = read_token_file(oauth_filename)

auth = OAuth(oauth_token, oauth_token_secret, CONSUMER_KEY, CONSUMER_SECRET)
twitter = Twitter(auth=auth)

if not sys.argv[1] == "":
	twitter.statuses.update(status=sys.argv[1])
else:
	print "You need to specify what to Tweet!"

