# GCP Auth

## How to deploy

```shell
gcloud run deploy gcp-auth --source . --region us-west1 --allow-unauthenticated
```

```shell
curl -H "Content-Type: text/plain" -X POST localhost:8080 -d "$(cat service-account.json)"
```
