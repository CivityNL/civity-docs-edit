---
id: weidewinkels_stap2
title: Het creëren/updaten/wijzigen van data
sidebar_label: Stap 2: CKAN Datastore API
---

Voordat men aan de slag kan met het toevoegen van nieuwe records, zal de dataset moeten worden geupload naar de <a href="https://docs.ckan.org/en/latest/maintaining/datastore.html" target="_blank">CKAN Datastore</a>. Alle acties die met het wijzigen/deleten van records te maken hebben verlopen namelijk via de <a href="https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api" target="_blank">CKAN Datastore API</a>.

## Hoe maak ik een nieuwe dataset aan?

Met behulp van de CKAN Datastore API en de door ons verschafte API key kun je een nieuwe dataset (resource) toevoegen aan de CKAN Datastore.

Zie de CKAN documentatie voor meer informatie: https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_create

## Toevoegen van records - datastore_upsert

Door gebruik te maken van de <a href="https://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api" target="_blank">CKAN Datastore API</a>, kunnen records worden toegevoegd aan onze dataset.

Hiervoor wordt gebruikt gemaakt van <a href="https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_upsert" target="_blank">datastore_upsert</a> actie.

Een voorbeeld waarin gebruik wordt gemaakt van de Datastore API binnen een Angular framework:


```
var ConfigService = /** @class */ (function () {
    function ConfigService(http) {
        this.http = http;
        this.getUrl = 'https://acc-ckannew.dataplatform.nl/api/action/datastore_search';
        this.postURL = 'https://acc-ckannew.dataplatform.nl/api/action/datastore_upsert';
        this.API_KEY = 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.API_KEY
        });
        this.httpParams = {
            resource_id: 'e0f02155-a8dd-49f8-bae9-282a2002f596'
        };
    }
    ConfigService.prototype.get = function () {
        var options = { headers: this.httpHeaders, params: this.httpParams };
        return this.http.get(this.getUrl, options);
    };
    ConfigService.prototype.post = function (body) {
        var options = { headers: this.httpHeaders };
        console.log("POST to " + this.postURL + " with as body " + body);
        return this.http.post(this.postURL, body, options);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());
```

## Deleten van records - datastore_delete

Zie CKAN Datastore API referentie: https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_delete



