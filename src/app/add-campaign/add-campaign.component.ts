import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Campaign } from '../models/campaign.model';
import { Managers } from '../models/managers.model';
import { Rewards } from '../models/rewards.model';

import { CampaignServiceService } from '../campaign-service.service';


@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css'],
  providers: [CampaignServiceService]
})
export class AddCampaignComponent implements OnInit {
  public campaignForm: FormGroup;
  constructor(private campaignService: CampaignServiceService, private _fb: FormBuilder) { }

  ngOnInit() {

  }

  initmanagers() {

  }

  addNewCampaign(newDescription: string, newFundingGoal: number, newId: string, newTitle: string, newType: string, newFullName: string, newPosition: string, newZodiacSign: string, newPricePoint: number, newReward: string, newRewardTier: string) {
      const newManager = new Managers(newFullName, newPosition, newZodiacSign);
      const newRewards = new Rewards(newPricePoint, newReward, newRewardTier);
      const newRewardsTiers: Rewards[] = [newRewards];
      const newManagers: Managers[] = [newManager];
      const newCampaign: Campaign = new Campaign(newDescription, newFundingGoal, newId, newManagers, newRewardsTiers, newTitle, newType);

      this.campaignService.addCampaign(newCampaign);
  }
}
