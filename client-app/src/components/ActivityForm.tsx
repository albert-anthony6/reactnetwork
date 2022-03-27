import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Activity } from '../models/activity';
import Loader from '../components/Loader';
import styles from '../assets/styles/ActivityForm.module.scss';
import { useStore } from '../stores';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    closeForm,
    createActivity,
    updateActivity,
    loading,
  } = activityStore;

  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    activity.id ? updateActivity(activity) : createActivity(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

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
        <button
          onClick={(e) => {
            e.preventDefault();
            closeForm();
          }}
          className="btn-secondary__filled"
        >
          Cancel
        </button>
        <button className="btn-primary__green">
          {!loading && <span>Submit</span>}
          {loading && <Loader inline={true} content="Submit" />}
        </button>
      </div>
    </form>
  );
});
