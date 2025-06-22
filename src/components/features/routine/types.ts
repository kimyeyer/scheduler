export interface Routine {
  title: string;
  description: string;
  category: string;
  startTime: string;
  duration: string;
  priority: Priority;
}
type Priority = 'low' | 'medium' | 'high';