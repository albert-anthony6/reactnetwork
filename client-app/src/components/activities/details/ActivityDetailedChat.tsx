import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../../assets/styles/ActivityDetailedChat.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default observer(function ActivityDetailedChat() {
  return (
    <div className={styles['activity-detailed-chat']}>
      <div className={styles['header']}>Chat about this event</div>
      <div className={styles['content']}>
        <div className={styles['comment-container']}>
          <img
            src={require('../../../assets/images/user.png')}
            alt="User Avatar."
          />
          <div className={styles['comment']}>
            <div className={styles['name-container']}>
              <p className={styles['name']}>Matt</p>
              <p className="helper-text">Today at 5:42PM</p>
            </div>
            <p>How artistic!</p>
            <p className={styles['reply']}>Reply</p>
          </div>
        </div>
        <div className={styles['comment-container']}>
          <img
            src={require('../../../assets/images/user.png')}
            alt="User Avatar."
          />
          <div className={styles['comment']}>
            <div className={styles['name-container']}>
              <p className={styles['name']}>Veronica</p>
              <p className="helper-text">3 hours ago</p>
            </div>
            <p>How is that possible!?</p>
            <p className={styles['reply']}>Reply</p>
          </div>
        </div>
        <textarea name="comment" id="" rows={10}></textarea>
        <span className={`btn-primary btn-primary__blue ${styles['reply']}`}>
          <FontAwesomeIcon icon={faPenToSquare} /> Add Reply
        </span>
      </div>
    </div>
  );
});

// export default observer(function ActivityDetailedChat() {
//     return (
//         <>
//             <Segment
//                 textAlign='center'
//                 attached='top'
//                 inverted
//                 color='teal'
//                 style={{border: 'none'}}
//             >
//                 <Header>Chat about this event</Header>
//             </Segment>
//             <Segment attached>
//                 <Comment.Group>
//                     <Comment>
//                         <Comment.Avatar src='/assets/user.png'/>
//                         <Comment.Content>
//                             <Comment.Author as='a'>Matt</Comment.Author>
//                             <Comment.Metadata>
//                                 <div>Today at 5:42PM</div>
//                             </Comment.Metadata>
//                             <Comment.Text>How artistic!</Comment.Text>
//                             <Comment.Actions>
//                                 <Comment.Action>Reply</Comment.Action>
//                             </Comment.Actions>
//                         </Comment.Content>
//                     </Comment>

//                     <Comment>
//                         <Comment.Avatar src='/assets/user.png'/>
//                         <Comment.Content>
//                             <Comment.Author as='a'>Joe Henderson</Comment.Author>
//                             <Comment.Metadata>
//                                 <div>5 days ago</div>
//                             </Comment.Metadata>
//                             <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
//                             <Comment.Actions>
//                                 <Comment.Action>Reply</Comment.Action>
//                             </Comment.Actions>
//                         </Comment.Content>
//                     </Comment>

//                     <Form reply>
//                         <Form.TextArea/>
//                         <Button
//                             content='Add Reply'
//                             labelPosition='left'
//                             icon='edit'
//                             primary
//                         />
//                     </Form>
//                 </Comment.Group>
//             </Segment>
//         </>

//     )
// })
