import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CampaignServiceService } from '../campaign-service.service';


@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css'],
  providers: [CampaignServiceService]
})
export class CampaignListComponent implements OnInit {
  campaigns: FirebaseListObservable<any>;
  constructor(private router: Router, private campaignService: CampaignServiceService) { }

  ngOnInit() {
    this.campaignService.getCampaigns().subscribe(data => {
      this.campaigns = data;
      console.log(this.campaigns);
    });
  }
  goToDetailPage(clickedCampaign) {
  this.router.navigate(['campaigns', clickedCampaign.$key]);
}
}
