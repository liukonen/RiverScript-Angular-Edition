import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import {ChatResponse} from './chat-response';
@Injectable({
  providedIn: 'root'
})
export class ChatInterfaceService {

  constructor(private http: HttpClient) { }

  Talk(message){
    try{
      return this.http.get<ChatResponse>(this.hostUrl, { params: new HttpParams().set('text', message), responseType: "json" });
    }catch{
      return this.http.get<ChatResponse>(this.hostUrlBackup, { params: new HttpParams().set('text', message), responseType: "json" });
    }
  }

hostUrl = "https://riverscript-bot.loca.lt";
hostUrlBackup = "https://river-backend.herokuapp.com";
}
