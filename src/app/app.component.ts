import { Component } from '@angular/core';
import OpenSourceCollective from 'src/interfaces/open-source-collective.interface';
import { MembersDataService } from 'src/services/members-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-collective-members';
  membersDetails: OpenSourceCollective[] | null = null;
  sampleData: any;
  testData = {
    MemberId: 1770,
    createdAt: "2016-10-02 23:30",
    type: "ORGANIZATION",
    role: "HOST",
    isActive: true,
    totalAmountDonated: 106.41,
    currency: "USD",
    lastTransactionAt: "2024-01-20 10:42",
    lastTransactionAmount: -0.2,
    profile: "https://opencollective.com/opensource",
    name: "Open Source Collective",
    company: null,
    description: "Non-profit fiscal host promoting a healthy and sustainable open source ecosystem.",
    image: "https://opencollective-production.s3.us-west-1.amazonaws.com/97017710-a90f-11e9-b6fb-2bbe7128f780.png",
    twitter: "https://twitter.com/OpenSourceColl",
    github: null,
    website: "https://oscollective"
  } 

  constructor(private membersDataService : MembersDataService) {}

  retrieveData() {
    this.membersDataService.getMembersData().subscribe((membersData) => {
      const unsortedList = membersData;
        this.membersDetails = unsortedList.slice().sort((a, b) => b.totalAmountDonated - a.totalAmountDonated)
    });
  }
}
