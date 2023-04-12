## Build a Count Down Timer - [preview](https://count-down-timer-react-web-app.netlify.app/)

##### Requirements :

- Accept duration in milliseconds
- Show countdown for days, hours, minutes, seconds
- Accept and trigger callback function on expire.
- Reset option to restart a count down timer.
- Accept and trigger callback function before reset.

##### Approach :

- useEffetc hook called.
- run a setTimeOut().
- update state.
- before component update, clear timer.
- after update repeat step 1, step 2 and step 3.
- Check if duration is zero; then stop further updates.

### Live Link : https://count-down-timer-react-web-app.netlify.app
