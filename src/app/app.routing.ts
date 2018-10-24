import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CampaignListComponent
  },
  {
    path: 'campaigns/:id',
    component: CampaignDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
