import { Rewards } from './rewards.model';
import { Managers } from './managers.model';

export class Campaign {
  moneyRaised: number;
  constructor(public description: string, public fundingGoal: number, public id: string, public managers: Managers[], public rewardsTiers: Rewards[], public title: string, public type: string) {
    this.moneyRaised = 0;
  }
}
