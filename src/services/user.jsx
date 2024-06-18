import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const app = initializeApp();
const db = getFirestore(app);

function User() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const userCollection = collection(db, 'users');
                const userSnapshot = await getDocs(userCollection);
                const userList = userSnapshot.docs.map(doc => doc.data());
                setUsers(userList);
            } catch (error) {
                console.error("Erreur à la récupération de l'utilisateur ", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>{user.name}</div>
            ))}
        </div>
    );
}

export default User;

