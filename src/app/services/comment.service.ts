import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'http://127.0.0.1:8000/api/comments';

  constructor(private http: HttpClient) {}

  getComments(): Observable<any> {
    const token = localStorage.getItem('token'); // Get token from storage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Set token in headers

    return this.http.get(this.apiUrl, { headers });
  }

  approveComment(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/${id}/approve`, {}, { headers });
  }

  rejectComment(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/${id}/reject`, {}, { headers });
  }
}
