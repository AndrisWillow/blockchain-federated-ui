import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalModel } from '../models/global-model.model';
import { baseUrl } from '../../environment';
import { SuccessResponse } from '../models/success-response.model';
import { ModelResponse } from '../models/model-response.model';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  constructor(private http: HttpClient) {}

  getModels(): Observable<GlobalModel[]> {
    return this.http.get<GlobalModel[]>(`${baseUrl}/models`);
  }

  uploadModel(data: any): Observable<SuccessResponse> {
    return this.http.post<SuccessResponse>(`${baseUrl}/upload`, data);
  }

  downloadModel(data: any): Observable<ModelResponse> {
    return this.http.post<ModelResponse>(`${baseUrl}/download`, data);
  }
}
