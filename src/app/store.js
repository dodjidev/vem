import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import degreeSlice from '../features/degrees/degreeSlice';
import formationSlice from '../features/formations/formationSlice';
import schoolsSlice from '../features/schools/schoolsSlice';
import serviceSlice from '../features/services/serviceSlice';
import uiSlice from '../features/ui/uiSlice';
import userSlice from '../features/user/user.slice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    schools: schoolsSlice,
    services: serviceSlice,
    degrees: degreeSlice,
    formations: formationSlice,
    ui: uiSlice,
    users: userSlice
  },
});
