import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [remainingTime, setRemainingTime] = useState(TIMER);


  useEffect(() => {

    setInterval(() => {
      console.log('INTERVAL');
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

  }, [])

  useEffect(() => {
    console.log('TImer Set');
    const timer = setTimeout(() => {
      //* this code is nothing but a side effect bcz it is not related to the outputting this jsx code
      //* so moving it into the useEffect
      onConfirm();

    }, TIMER);

    return () => {
      // console.log('cleaning timer');
      clearTimeout(timer);
    }
  }, [onConfirm]);

  // setTimeout(() => {
  //   //* this code is nothing but a side effect bcz it is not related to the outputting this jsx code
  //   //* so moving it into the useEffect
  //   onConfirm();

  // }, 3000)

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
