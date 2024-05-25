import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<TrackModel[]> = of([])


  constructor(private httpClient:HttpClient) {
  }

  getAllTracks$(): Observable<TrackModel[]> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data}:any)=>{
      return data
    })
  )
  }

  getAllrandom$(): Observable<TrackModel[]> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data}:any)=>{
      return data.reverse();
    }),
    catchError((err)=>{
      console.log('Algo paso revisame',err);
      
      return of([])
    })
  )
  }
}
