import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetInterface } from "../model/get.model";
import { MessageInterface } from "../model/message.model";

@Injectable({
  providedIn:'root'
})
export class ApiService{

  private Url:string= "http://localhost:32456/api/";
  constructor(private http:HttpClient){}

  public getAllOnboardingDetails(): Observable<GetInterface> {
    return this.http.get<GetInterface>(this.Url+"onboarding");
  }

  public getPreviewDetails(data:string) : Observable<MessageInterface> {
    return this.http.get<MessageInterface>(this.Url+"preview?something="+data);
  }

  public getVersionDetails(data:string):Observable<MessageInterface>{
    return this.http.get<MessageInterface>(this.Url+"version?data="+data);
  }

}
