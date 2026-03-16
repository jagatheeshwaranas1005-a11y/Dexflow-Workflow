export interface User {
  id: number;
  name: string;
  username: string;
  role: 'Artist' | 'Proofer' | 'Supervisor' | 'Admin';
  empId: string;
  process?: string;
  designation?: string;
  isActive: number;
}

export interface Submission {
  id: number;
  artistName: string;
  empId: string;
  adId: string;
  version: string;
  database: string;
  udac: string;
  status: string;
  submittedAt: string;
}

export interface Query {
  id: number;
  database: string;
  adId: string;
  version: string;
  acquiredDate: string;
  udac: string;
  queriedBy: string;
  queriedDate: string;
  daysToExtract: number;
  queryCode: string;
  queryCategory: string;
  queryDetails: string;
  status: 'Pending' | 'Resolved';
  validated: 'Pending' | 'Valid' | 'Not Valid';
  raised: 'Pending' | 'Raised' | 'Not Raised';
  remarks: string;
  supervisorId?: number;
  approvedBy?: string;
  resolvedAt?: string;
}

export interface Audit {
  id: number;
  adId: string;
  artistName: string;
  prooferName: string;
  errorCategory: string;
  errorRemarks: string;
  checklistStatus: string;
  auditedAt: string;
  status?: string;
}

export interface Appeal {
  id: number;
  errorId: number;
  adId: string;
  artistName: string;
  appealDesc: string;
  status: string;
  appealedAt: string;
  resolutionNote?: string;
}

export interface AppConfig {
  Version: string[];
  Database: string[];
  UDAC: string[];
  Checklist: string[];
}

export interface Stats {
  totalSubmissions: number;
  submissionsToday: number;
  totalAudits: number;
  auditsToday: number;
  totalErrors: number;
  appeals: {
    pending: number;
    approved: number;
    rejected: number;
  };
  queries: {
    pending: number;
    resolved: number;
  };
  errorBreakdown: Record<string, number>;
  usersByRole: Record<string, number>;
  history: {
    date: string;
    submissions: number;
    audits: number;
    errors: number;
  }[];
}
