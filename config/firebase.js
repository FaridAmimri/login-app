/** @format */

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDikVfMCaSQTpKJqI_rx8wdk38pmYVo1Y',
  authDomain: 'loginapp-76632.firebaseapp.com',
  projectId: 'loginapp-76632',
  storageBucket: 'loginapp-76632.appspot.com',
  messagingSenderId: '435691674358',
  appId: '1:435691674358:web:2b48bba6990377fd106ad7'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
