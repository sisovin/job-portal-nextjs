interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
}

interface JobCardProps {
  title: string;
  company: string;
  location: string;
}

interface JobApiResponse {
  jobs: Job[];
}
