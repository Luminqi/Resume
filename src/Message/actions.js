import { MODIFY, SUBMIT } from './actionTypes.js';

const modify = (obj) => ({
    type: MODIFY,
    ...obj
});
const submit = () => ({
    type: SUBMIT
});

export { modify, submit };
