import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchDataCat() {
  const data = yield fetch('https://api.thecatapi.com/v1/images/search', {
    method: 'GET',
  })
  .then(response => response.json()); 
  yield put({ type: "SET_DATA_CAT", data });
}

function* fetchDataDog() {
  const data = yield fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
  })
  .then(response => response.json()); 
  yield put({ type: "SET_DATA_DOG", data });
}

function* actionWatcher() {
  yield takeLatest('GET_DATA_CAT', fetchDataCat)
  yield takeLatest('GET_DATA_DOG', fetchDataDog)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
