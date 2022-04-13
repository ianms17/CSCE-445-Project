import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import json

# Use a service account
cred = credentials.Certificate('csce-445-horror-firebase-adminsdk-v1uak-525d27a3c9.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

f = open('public/storyline.json', 'r')
outer_storyline = json.load(f)

for obj in outer_storyline['storyline']:
    doc_ref = db.collection(u'storyline').document()
    doc_ref.set(
        {
            u'id': obj['id'],
            u'narrativeText': obj['narrativeText'],
            u'optionAID': obj['optionAID'],
            u'optionAText': obj['optionAText'],
            u'optionBID': obj['optionBID'],
            u'optionBText': obj['optionBText'],
            u'optionCID': obj['optionCID'],
            u'optionCText': obj['optionCText'],
            u'music': obj['music'],
            u'soundFX': obj['soundEffects'],
            u'context': obj['context']
        }
    )
    print('Added document with id:', obj['id'])
