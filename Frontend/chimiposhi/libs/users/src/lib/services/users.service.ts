import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '@env/environment';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURLUsers = environment.apiurl + 'users';

  constructor(private http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURLUsers);
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`${this.apiURLUsers}/${userId}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiURLUsers, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiURLUsers}/${user.id}`, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLUsers}/${userId}`);
  }

  // getCountries(): { id: string; name: string }[] {
  //   return Object.entries(countriesLib.getNames('en', { select: 'official' })).map((entry) => {
  //     return {
  //       id: entry[0],
  //       name: entry[1]
  //     };
  //   });
  // }

//   getCountry(countryKey: string): string {
//     return countriesLib.getName(countryKey, 'en');
//   }
//
}
