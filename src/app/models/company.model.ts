export interface Company {
  id: number;
  name: string;
  sector: string;
  fundName: string;
  investmentDate: string;
  valuation: number;
  irr: number;
  multiple: number;
  status: 'Active' | 'Exited' | 'Written Off';
}
