import { createAction } from 'redux-actions';

const INC = "INCREATE";
const DEC = "DECREATE";

const inc = createAction(INC);
const dec = createAction(DEC);
