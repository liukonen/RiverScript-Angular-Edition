import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {ChatResponse} from './chat-response';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatInterfaceService {

  constructor(private http: HttpClient) { }

  Talk(message){
      return this.http.get<ChatResponse>(this.hostUrl, { params: new HttpParams().set('text', message), responseType: "json" });
    }
hostUrl = "https://bot.liukonen.dev";
}
