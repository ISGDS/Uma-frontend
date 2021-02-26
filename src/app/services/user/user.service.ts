import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user/user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
//Service that takes care for all the user REST calls to the java backend REST microservice
export class UserService {

  private getAllUsersUrl = 'http://localhost:8080/user/getAllUsers';

  private getUserUrl = 'http://localhost:8080/user/getUser';

  private deleteUserUrl = 'http://localhost:8080/user/deleteUser/';

  private updateUserUrl = 'http://localhost:8080/user/updateUser/';
  
  private addUserUrl = 'http://localhost:8080/user/addUser';
  
  private loginUrl = 'http://localhost:8080/user/login';

  constructor(private http: HttpClient) {
    
   }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getAllUsersUrl);
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.getUserUrl);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>( this.deleteUserUrl.concat(id) );
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<User>( this.updateUserUrl+user.id, user);      
  }

  addUser(user: User): Observable<any> {
    return this.http.post<User>( this.addUserUrl, user);      
  }

//Login doesn't look good and should be done in separate authentication service, but the implementation took me longer (got stuck with CORS problems) than i thought, so in the end wanted to just make it work  
  loginUser(user: User): Observable<any> {
    return this.http.post<User>( this.loginUrl, user)
     .pipe(map(res => {
      return res;
  }));      
  }

}
