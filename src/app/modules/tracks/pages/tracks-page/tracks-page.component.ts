import { Component, OnDestroy, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit,OnDestroy{
  tracksTrending:Array<TrackModel> = [];
  tracksRandom:Array<TrackModel> = [];

  listObservers$:Array<Subscription> = [];

  constructor(private trackService:TrackService) {};

  ngOnInit(): void {
    this.loadDataAll();
    this.loadDataRandom();
  }

  loadDataAll():void {
    this.trackService.getAllTracks$().subscribe((response:TrackModel[]) => {
      this.tracksTrending = response;
      
    } )
  }

  loadDataRandom():void {
    this.trackService.getAllrandom$().subscribe((response:TrackModel[]) => {
      this.tracksRandom = response;
      
    } )
  }

  ngOnDestroy(): void {

  }
}
