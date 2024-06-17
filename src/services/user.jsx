import React from "react";
import { Route } from "react-router-dom";
import app from "../firebaseConfig";
import { doc, getDoc } from 'firebase/firestore';

export const getUserDocument = async (uid) => {
    if (!uid) return null;
  //const userRef = app.doc(`users/${user.uid}`);
  //const snapshot = await userRef.get();
      
      try {
        const userDocRef = doc(app, 'users', uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          return userDoc.data();
        } else {
          console.error('No such document!');
          return null;
        }
      } catch (error) {
        console.error('Erreur à la récupération de l\'utilisateur', error);
        throw error;
      }
    };

