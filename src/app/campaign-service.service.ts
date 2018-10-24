import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CampaignServiceService {
  campaigns: FirebaseListObservable<any>;
  constructor(private database: AngularFireDatabase) {
    this.campaigns = database.list('campaigns')
  }
  getCampaigns(){
    return this.campaigns;
  }
  getCampaignById(campaignId: string) {
   return this.database.object('campaigns/' + campaignId);
 }
}
