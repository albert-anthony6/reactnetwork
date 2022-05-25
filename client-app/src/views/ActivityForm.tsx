import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityForm.module.scss';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GInput from '../components/base/GInput';
import GTextarea from '../components/base/GTextarea';
import GDropdown from '../components/base/GDropdown';
import { categoryOptions } from '../utils/categoryOptions';
import GDate from '../components/base/GDate';
import { Activity } from '../models/activity';

export default observer(function ActivityForm() {
  const history = useHistory();
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: null,
    city: '',
    venue: '',
  });

  const validationSchema = Yup.object({
    title: Yup.string().required('The activity title is required'),
    description: Yup.string().required('The activity description is required'),
    category: Yup.string().required(),
    date: Yup.string().required('Date is required').nullable(),
    venue: Yup.string().required(),
    city: Yup.string().required(),
  })

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleformSubmit(activity: Activity) {
    if (activity.id.length === 0) {
      // Creating a new id for the new activity object
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() =>
        history.push(`/activities/${newActivity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        history.push(`/activities/${activity.id}`)
      );
    }
  }

  if (loadingInitial) return <Loader />;

  return (
    <div className="page">
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleformSubmit(values)}>
        {({handleSubmit, isValid, isSubmitting, dirty}) => (
          <Form
            onKeyPress={e => { e.key === 'Enter' && e.preventDefault() }}
            onSubmit={handleSubmit}
            autoComplete="off"
            className={styles['activity-form']}
          >
            <h4>Activity Details</h4>
            <GInput name="title" placeholder="Title" />
            <GTextarea rows={3} name="description" placeholder="Description" />
            <GDropdown options={categoryOptions} name="category" placeholder="Category" />
            <GDate
              name="date"
              placeholderText="Date"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
            <h4>Location Details</h4>
            <GInput name="city" placeholder="City" />
            <GInput name="venue" placeholder="Venue" />
            <div className={styles['form-buttons']}>
              <Link to="/activities">
                <button className="btn-secondary btn-secondary__filled">
                  Cancel
                </button>
              </Link>
              <button className={`${isSubmitting || !isValid || !dirty ? 'disabled btn-primary btn-primary__green' : 'btn-primary btn-primary__green'}`}>
                {!loading && <span>Submit</span>}
                {loading && <Loader inline={true} content="Submit" />}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
});
