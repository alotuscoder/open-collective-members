export default interface OpenSourceCollective {
  MemberId: number;
  company: null | string;
  createdAt: string;
  currency: string;
  description: string;
  github: null | string;
  image: string;
  isActive: boolean;
  lastTransactionAmount: number;
  lastTransactionAt: string;
  name: string;
  profile: string;
  role: string;
  totalAmountDonated: number;
  twitter: string | null;
  type: string;
  website: string;
}