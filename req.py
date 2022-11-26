import requests
import json

data = json.dumps({
    "type": "service_account",
    "project_id": "test",
    "private_key_id": "test",
    "private_key": "-----BEGIN PRIVATE KEY-----\ntest\n-----END PRIVATE KEY-----\n",
    "client_email": "test@test.iam.gserviceaccount.com",
    "client_id": "test",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test%40test.iam.gserviceaccount.com"
})
headers = {'Content-type': 'text/plain'}
res = requests.post('http://localhost:8080', headers=headers, data=data)
print(res.text)
