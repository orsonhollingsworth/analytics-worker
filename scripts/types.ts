export interface IAnalyticsData {
  id: number;
  name: string;
  value: number;
  timestamp: Date;
}

export interface IAnalyticsEvent {
  id: number;
  name: string;
  value: number;
  timestamp: Date;
}

export interface IAnalyticsMetric {
  id: number;
  name: string;
  value: number;
  timestamp: Date;
  type: string;
}

export interface IAnalyticsEventData {
  id: number;
  name: string;
  value: number;
  timestamp: Date;
  metric: IAnalyticsMetric;
}