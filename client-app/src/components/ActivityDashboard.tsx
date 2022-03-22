import React from 'react';
import { Activity } from '../models/activity';
import ActivityList from './ActivityList';

interface Props {
  activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {
  return (
    <div className="grid">
      <ActivityList activities={activities} />
    </div>
  );
}
