import React from 'react';
import styles from '../assets/styles/ActivityForm.module.scss';

export default function ActivityForm() {
  return (
    <form className={styles['activity-form']}>
      <input type="text" placeholder="Title" />
      <textarea
        name="description"
        id="description"
        placeholder="Description"
        rows={5}
      />
      <input type="text" placeholder="Category" />
      <input type="text" placeholder="Date" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Venue" />
      <div className={styles['form-buttons']}>
        <button className="btn-secondary__filled">Cancel</button>
        <button className="btn-primary__green">Submit</button>
      </div>
    </form>
  );
}
