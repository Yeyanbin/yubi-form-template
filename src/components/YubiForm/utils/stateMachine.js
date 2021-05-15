
const WAITING = false;
const READY = true;

export const useStateMachine = (update) => {
  
  let state = READY;

  const send = () => {
    console.log('send');
    if ( state ) {
      state = WAITING;
      requestAnimationFrame(() => {
        update();
        state = READY;
      })
    }
  }

  return {
    send  
  }
}