/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journalOrConference: string;
  year: number;
  doi?: string;
  abstract: string;
  category: "Machine Learning" | "Software Engineering" | "Education" | "Systems";
  link?: string;
  featured?: boolean;
}

export interface TeachingCourse {
  code: string;
  name: string;
  semester: string;
  level: "Undergraduate" | "Postgraduate";
  description: string;
  syllabusLink?: string;
}

export interface ProjectCoordination {
  id: string;
  title: string;
  clientOrTheme: string;
  studentGroup: string;
  academicYear: string;
  status: "Completed" | "In Progress" | "Upcoming";
  description: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  affiliation: string;
  subject: string;
  message: string;
}
