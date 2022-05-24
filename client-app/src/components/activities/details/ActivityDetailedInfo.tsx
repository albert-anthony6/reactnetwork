import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../../assets/styles/ActivityDetailedInfo.module.scss';
import { Activity } from '../../../models/activity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInfo,
  faCalendar,
  faLocationPin,
} from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';

interface Props {
  activity: Activity;
}

export default observer(function ActivityDetailedInfo({ activity }: Props) {
  return (
    <div className={styles['activity-detailed-info']}>
      <div className={styles['info-row']}>
        <FontAwesomeIcon icon={faInfo} />
        {activity.title}
      </div>
      <div className={styles['info-row']}>
        <FontAwesomeIcon icon={faCalendar} />
        {format(activity.date!, 'dd MMM yyyy h:mm aa')}
      </div>
      <div className={styles['info-row']}>
        <FontAwesomeIcon icon={faLocationPin} />
        {activity.venue}
      </div>
    </div>
  );
});

// export default observer(function ActivityDetailedInfo({activity}: Props) {
//     return (
//         <Segment.Group>
//             <Segment attached='top'>
//                 <Grid>
//                     <Grid.Column width={1}>
//                         <Icon size='large' color='teal' name='info'/>
//                     </Grid.Column>
//                     <Grid.Column width={15}>
//                         <p>{activity.description}</p>
//                     </Grid.Column>
//                 </Grid>
//             </Segment>
//             <Segment attached>
//                 <Grid verticalAlign='middle'>
//                     <Grid.Column width={1}>
//                         <Icon name='calendar' size='large' color='teal'/>
//                     </Grid.Column>
//                     <Grid.Column width={15}>
//             <span>
//               {activity.date}
//             </span>
//                     </Grid.Column>
//                 </Grid>
//             </Segment>
//             <Segment attached>
//                 <Grid verticalAlign='middle'>
//                     <Grid.Column width={1}>
//                         <Icon name='marker' size='large' color='teal'/>
//                     </Grid.Column>
//                     <Grid.Column width={11}>
//                         <span>{activity.venue}, {activity.city}</span>
//                     </Grid.Column>
//                 </Grid>
//             </Segment>
//         </Segment.Group>
//     )
// })
