import React from "react";

const Profil = ({ user, logout }) => {
  return (
    <div>
      <div>
        <div>
          <h2>Mail : {user.email}</h2>
          <h3>Pseudo : {user.displayName}</h3>
        </div>
      </div>
      <button onClick={() => logout()}>Déconnecter</button>
    </div>
  );
};

export default Profil;
