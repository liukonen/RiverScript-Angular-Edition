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
    try{
      return this.http.get<ChatResponse>(this.hostUrl, { params: new HttpParams().set('text', message), responseType: "json" });
    }catch{
      const headers= new HttpHeaders()
      .set('Bypass-Tunnel-Reminder', '*')
      .set('User-Agent', 'Chatbot');
      return this.http.get<ChatResponse>(this.hostUrlBackup, { params: new HttpParams().set('text', message), responseType: "json" });
    }
    }

hostUrlBackup = "https://riverscript-bot-20201231.loca.lt";
hostUrl = "https://river-backend.herokuapp.com";
}
