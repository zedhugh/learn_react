import { createAction } from 'redux-actions';

export const INC = "INCREATE";
export const DEC = "DECREATE";
export const CANCEL_INC = "CANCEL_INCREATE";

export const inc = createAction(INC);
export const dec = createAction(DEC);
export const cancel_inc = createAction(CANCEL_INC);
