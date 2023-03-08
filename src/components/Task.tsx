import { ChangeEvent, useState } from 'react';
import styles from './Task.module.css';

import { Check, Trash } from 'phosphor-react';

export function Task() {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }
  return (
    <div className={styles.task}>
      <div className={styles.checkWrapper}>
        <input
          type='checkbox'
          id='cheackbox-task'
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor='cheackbox-task'>
          {checked ? (
            <div className={styles.checked}>
              <Check />
            </div>
          ) : (
            <div className={styles.unchecked} />
          )}
        </label>
      </div>
      <span className={`${checked && styles.textChecked}`}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <Trash className={styles.trash} />
    </div>
  );
}
