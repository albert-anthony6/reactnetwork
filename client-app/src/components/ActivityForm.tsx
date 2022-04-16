import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityForm.module.scss';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';
import { Link, useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

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

  const [activity, setActivity] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  if (loadingInitial) return <Loader />;

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={styles['activity-form']}
    >
      <input
        type="text"
        placeholder="Title"
        value={activity.title}
        name="title"
        onChange={handleInputChange}
      />
      <textarea
        id="description"
        placeholder="Description"
        rows={5}
        value={activity.description}
        name="description"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Category"
        value={activity.category}
        name="category"
        onChange={handleInputChange}
      />
      <input
        type="date"
        placeholder="Date"
        value={activity.date}
        name="date"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="City"
        value={activity.city}
        name="city"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Venue"
        value={activity.venue}
        name="venue"
        onChange={handleInputChange}
      />
      <div className={styles['form-buttons']}>
        <Link to="/activities">
          <button className="btn-secondary__filled">Cancel</button>
        </Link>
        <button className="btn-primary__green">
          {!loading && <span>Submit</span>}
          {loading && <Loader inline={true} content="Submit" />}
        </button>
      </div>
    </form>
  );
});
