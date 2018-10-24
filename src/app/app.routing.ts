import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CampaignListComponent
  },
  {
    path: 'add-campaign',
    component: AddCampaignComponent
  },
  {
    path: 'campaigns/:id',
    component: CampaignDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
