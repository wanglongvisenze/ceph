import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiModule } from './api.module';

@Injectable({
  providedIn: ApiModule
})
export class RoleService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get('api/role');
  }
}
