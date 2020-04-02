---
id: datacollection_stap2
title: Using the Datastore API
sidebar_label: - CKAN Datastore API use
---

All actions related to inserting, updating, or even deleting records, are done through the <a href="https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api" target="_blank">CKAN Datastore API</a>.

## Inserting/updating new records:

There are two steps required before you can insert/update new records using the CKAN Datastore API.

### 1. Set primary key (once) - datastore_create

In order to insert new records, a primary key needs to be set. This is something that needs to be done only once. 

This is done via a post request to api/action/datastore_create. This request should include the following in the body:

```
{
	"resource_id": "<your_resource_id>",
	"force": true,
	"primary_key": "column_name_to_be_set_as_primary_key"
}
```
Below we will provide a few code examples of these actions.

#### HTTP example:

```
  POST /api/3/action/datastore_create HTTP/1.1
Host: acc-ckannew.dataplatform.nl
Authorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json
Content-Type: application/json

{
	"resource_id": "3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc",
	"force": true,
	"primary_key": "zip"
}
```

#### cURL example:

```
curl --location --request POST 'https://acc-ckannew.dataplatform.nl/api/3/action/datastore_create' \
--header 'Authorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
	"resource_id": "3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc",
	"force": true,
	"primary_key": "zip"
}'
```

#### Javascript Fetch example:

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"resource_id":"3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc","force":true,"primary_key":"zip"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://acc-ckannew.dataplatform.nl/api/3/action/datastore_create", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```


See CKAN documentation for more info: https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create

---

### 2. Insert/update new records - datastore_upsert

After that, new data can be added to the CSV file. For this, the <a href="https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_upsert" target="_blank">datastore_upsert</a> API action is used.

Below we will provide a few code examples of these actions:

### HTML example:

```
POST /api/3/action/datastore_upsert HTTP/1.1
Host: acc-ckannew.dataplatform.nl
Authorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Content-Type: application/json
Content-Type: application/json

{
	"resource_id": "3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc",
	"force": true,
	"records": [{
 			"company": "Test company",
 			"email": "test@test.com ",
 			"zip": "xxxxx",
 			"city": "Test City "
	}]
}
```

### cURL example:

```
  curl --location --request POST 'https://acc-ckannew.dataplatform.nl/api/3/action/datastore_upsert' \
  --header 'Authorization: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' \
  --header 'Content-Type: application/json' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "resource_id": "3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc",
      "force": true,
      "records": [{
               "company": "Test company",
               "email": "test@test.com ",
               "zip": "xxxxx",
               "city": "Test City "
      }]
  }
```

### Javascript Fetch example:

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"resource_id":"3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc","force":true,"records":[{"company":"Test company","email":"test@test.com ","zip":"xxxxx","city":"Test City "}]});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://acc-ckannew.dataplatform.nl/api/3/action/datastore_upsert", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

### Angular example:

In our own farmer shops example we used Angular to insert new records:

```
export class ConfigService {

  constructor(private http: HttpClient) { }

  getUrl = 'https://acc-ckannew.dataplatform.nl/api/action/datastore_search';
  postURL = 'https://acc-ckannew.dataplatform.nl/api/action/datastore_upsert';
  API_KEY = 'xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.API_KEY
  });

  httpParams = {
    resource_id: '3a1d49bb-d3b6-49fe-977e-e13b2db6c1bc'
  }

  get() {
    let options = {headers: this.httpHeaders, params: this.httpParams}
    return this.http.get(this.getUrl, options);
  }
  
  post(body) {
    let options = {headers: this.httpHeaders}
    console.log(`POST to ${this.postURL} with as body ${body}`);
    
    return this.http.post(this.postURL, body, options);
  }

}
```

## Deleten van records - datastore_delete

Zie CKAN Datastore API referentie: https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_delete



