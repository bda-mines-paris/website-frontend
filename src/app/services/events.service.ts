import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { Event } from "../models/event.model";


@Injectable({
providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) {}

    events$ = new BehaviorSubject<any>({});

    getEvents() {
        return new Promise<void>((resolve, reject) => {

            this.http.get<any>(
            environment.apiUrl + '/api/event/getAllEvents')
            .subscribe(
                (eventData : Array<any>) => {
                  console.log({"successEvents " : eventData});
                  var eventsTreated : any = {};
                  eventData.forEach(event => {
                    eventsTreated[event.event_id] = new Event(event);
                  });
                  console.log({"successeventsTreatedEvents " : eventsTreated});
                  this.events$.next(eventsTreated);
                  resolve();
                },  
                (error) => {  
                  reject(error);
                }
            );
        });
    }

    getEventsTocome() {
      return new Promise<any[]>((resolve, reject) => {
          this.http.post(environment.apiUrl + '/api/event/getEventsTocome', {})
          .subscribe(
              (response : any) => {
                console.log(response)
                  resolve(response);
              },
              (error) => {
                  console.log({error : error})
                  reject(error);
              }
          );
      });
  }

  createBilletterie(titre : string, description : string, date : Date, lieu : string, image: string, idPole : number, createur : string, dateOuverture : Date, dateFermeture : Date, nPlaces : number, prixC : number, prixNC : number, points : number) {
      return new Promise<any>((resolve, reject) => {
          this.http.post(
          environment.apiUrl + '/api/event/createBilletterie',
          {title : titre, description : description, dateEvent : date, event_place : lieu, thumbnail : image, pole_id : idPole, loginSender : createur, date_open : dateOuverture, date_close : dateFermeture, num_places : nPlaces, cost_contributor : prixC, cost_non_contributor : prixNC, points : points})
          .subscribe(
              (response) => {
                  resolve(response);
              },
              (error) => {
                  console.log({error : error})
                  reject(error);
              }
          );
      });
  }


  modificationBilletterie(idBilletterie : Number, titre : string, description : string, date : Date, lieu : string, idPole : number, dateOuverture : Date, dateFermeture : Date, nPlaces : number, prixC : number, prixNC : number, points : number) {
      return new Promise<any>((resolve, reject) => {
          this.http.post(
          environment.apiUrl + '/api/event/modifyBilletterie',
          {idBilletterie : idBilletterie, titre : titre, description : description, date : date, lieu : lieu, idPole : idPole, dateOuverture : dateOuverture, dateFermeture : dateFermeture, nPlaces : nPlaces, prixC : prixC, prixNC : prixNC, points : points})
          .subscribe(
              (response) => {
                  resolve(response);
              },
              (error) => {
                  console.log({error : error});
                  reject(error);
              }
          );
      });
  }

  deleteBilletterie(idBilletterie : number) {
      return new Promise<any>((resolve, reject) => {
          this.http.post(environment.apiUrl + '/api/event/deleteBilletterie', {idBilletterie : idBilletterie})
          .subscribe(
              (response) => {
                  resolve(response)
              },
              (error) => {
                  console.log({error : error});
                  reject(error);
              }
          );
      });
  }
  


}