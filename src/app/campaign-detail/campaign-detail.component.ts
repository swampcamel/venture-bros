
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CampaignServiceService } from '../campaign-service.service';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css'],
  providers: [CampaignServiceService]
})
export class CampaignDetailComponent implements OnInit {
  campaignId: string;
  campaignToDisplay;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private campaignService: CampaignServiceService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.campaignId = urlParameters['id'];
    });
    this.campaignToDisplay = this.campaignService
  }

}
