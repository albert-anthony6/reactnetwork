import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityForm.module.scss';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
    date: Yup.string().required(),
    venue: Yup.string().required(),
    city: Yup.string().required(),
  })

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  // function handleSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   if (activity.id.length === 0) {
  //     // Creating a new id for the new activity object
  //     let newActivity = {
  //       ...activity,
  //       id: uuid(),
  //     };
  //     createActivity(newActivity).then(() =>
  //       history.push(`/activities/${newActivity.id}`)
  //     );
  //   } else {
  //     updateActivity(activity).then(() =>
  //       history.push(`/activities/${activity.id}`)
  //     );
  //   }
  // }

  // function handleInputChange(
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   const { name, value } = event.target;
  //   setActivity({ ...activity, [name]: value });
  // }

  if (loadingInitial) return <Loader />;

  return (
    <div className="page">
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={values => console.log(values)}>
        {({handleSubmit}) => (
          <Form
            onSubmit={handleSubmit}
            autoComplete="off"
            className={styles['activity-form']}
          >
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
            <GInput name="city" placeholder="City" />
            <GInput name="venue" placeholder="Venue" />
            <div className={styles['form-buttons']}>
              <Link to="/activities">
                <button className="btn-secondary btn-secondary__filled">
                  Cancel
                </button>
              </Link>
              <button className="btn-primary btn-primary__green">
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
