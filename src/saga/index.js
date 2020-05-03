import { all, call, race, delay, put, select, take, takeEvery } from 'redux-saga/effects';
import { inc, INC, CANCEL_INC } from '../redux_action'

function* handleInc() {
    yield delay(1000);
    console.log("Hello saga");
    yield put(inc());
}

function* handleCancel() {
    yield take(CANCEL_INC);
    const state = yield select();
    console.log('state', state);
}

function* watchInc() {
    yield takeEvery(INC, handleInc);
}

function* incRoot() {
    while (true) {
        yield race({
            inc: call(watchInc),
            cancel: call(handleCancel)
        });
    }
}

export default function* () {
    yield all([
        incRoot()
    ]);
}
