import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Activity } from '../models/activity';
import styles from '../assets/styles/ActivityForm.module.scss';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) {
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
    createOrEdit(activity);
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
        type="text"
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
        <button onClick={closeForm} className="btn-secondary__filled">
          Cancel
        </button>
        <button className="btn-primary__green">Submit</button>
      </div>
    </form>
  );
}
