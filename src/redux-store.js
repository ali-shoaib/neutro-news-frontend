import { configureStore } from '@reduxjs/toolkit'
import ProjectReducer from './reducers/projectReducer'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'
import firebaseConfig from './config/firebaseConfig'
import UserReducer from './reducers/userReducer'

export default configureStore({
  reducer: {
    projects: ProjectReducer,
    users: UserReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          getFirebase,
          getFirestore
        }
      }
    }),
  enhancers:[reduxFirestore(firebaseConfig)]
})