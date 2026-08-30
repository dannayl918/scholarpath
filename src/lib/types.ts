export type Country =
  | "USA"
  | "Canada"
  | "UK"
  | "Australia"
  | "Europe";

export type University = {
  id: string;
  slug: string;
  name: string;
  location: string;
  country: Country;
  logo: string;

  programs: string[];

  tuition: {
    amount: number | null;
    currency: string;
    period: "year";
  };

  financialAid: boolean;

  scholarshipAvailable: boolean;

  testRequirements: {
    sat: boolean;
    englishTest: boolean;
  };

  acceptanceRate: number | null;

  internationalStudents: boolean;

  applicationDeadline: string | null;

  description: string;

  demoData: boolean;

  sourceUrl: string | null;
  lastVerified: string | null;
};

export type Scholarship = {
  id: string;
  slug: string;
  name: string;
  organization: string;
  country: Country;

  coverage: string;

  amount: number | null;
  currency: string;

  deadline: string | null;

  eligibility: string[];

  majors: string[];

  educationLevel: "Undergraduate" | "Graduate" | "Both";

  internationalStudents: boolean;

  meritBased: boolean;
  needBased: boolean;

  demoData: boolean;

  sourceUrl: string | null;
  lastVerified: string | null;
};

export type Resource = {
  id: string;
  slug: string;
  title: string;

  description: string;

  category:
    | "Tests"
    | "Applications"
    | "Career";

  difficulty: "Beginner" | "Intermediate" | "Advanced";

  estimatedTime: string;

  demoData: boolean;
};

export type ApplicationStatus =
  | "Not Started"
  | "Preparing"
  | "Documents"
  | "Essay"
  | "Ready"
  | "Submitted"
  | "Accepted"
  | "Rejected";

export type Application = {
  id: string;

  universityId: string;
  universityName: string;

  applicationStatus: ApplicationStatus;

  scholarshipStatus: ApplicationStatus;

  deadline: string | null;

  progress: number;

  notes: string;
};

export type StudentProfile = {
  id: string;

  name: string;

  country: string;

  education: string;

  academicPerformance: number | null;

  intendedMajor: string;

  targetCountries: Country[];

  budget: number | null;

  currency: string;

  satScore: number | null;

  englishTest: {
    name: string;
    score: string;
  } | null;

  interests: string[];
};
