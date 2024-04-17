export interface IJobData{
  id: string;
  date: string;
  title: string;
  location: string;
  remote: boolean;
  url: string;
  company?: ICompanyData
}

export interface ICompanyData{
  id: number,
  name: string,
  linkedin?: string,
  website?: string,
  glassdoor?: string,
  logo?: string,
}
