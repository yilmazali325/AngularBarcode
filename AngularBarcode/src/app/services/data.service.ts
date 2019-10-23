import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  get(url) {
      let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').
      set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      return this.http.get(url);
  }

  post(url, data) {
      let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').
      set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      return this.http.post(url, data, { headers: httpHeaders});
  }

  put(url, data) {
      let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').
      set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      return this.http.put(url, data, { headers: httpHeaders });
  }
  delete(url) {
    let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').
    set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return this.http.delete(url, { headers: httpHeaders });
}
  login(url, data) {
      let httpHeaders = new HttpHeaders().set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').
      set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
      if (localStorage.getItem('currentUser')) {
          return true;
      } else {
          return false;
      }
  }

  getCurrentUser(){
      return localStorage.getItem('currentUser');
  }
}
