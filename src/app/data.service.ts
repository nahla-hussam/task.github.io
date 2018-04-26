import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService{

    constructor(private _http: Http, private httpBrowse: Http, private httpStatus: Http){}

    getCountries(){
      return  this._http.get("http://localhost:4200/assets/data/countries.json")
                        .map(res=>res.json());
    }

    getBrowsers(){
        return this.httpBrowse.get("http://localhost:4200/assets/data/browsers.json")
                            .map(res=>res.json());
    }

    getStatus(){
        return this.httpStatus.get("http://localhost:4200/assets/data/status.json")
                            .map(res=>res.json());
    }
}