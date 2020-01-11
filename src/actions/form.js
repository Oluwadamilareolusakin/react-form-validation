const COMPLETE = "COMPLETE";
const INCOMPLETE = "INCOMPLETE";


export const setComplete = () => ({
  type: COMPLETE,
}); 

export const setIncomplete = () => ({
  type: INCOMPLETE,
});