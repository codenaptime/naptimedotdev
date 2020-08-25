import React from 'react';

export default function UserCard({ children }) {
  return <div>
    <div><img src={user.image} /></div>
    <h3>{user.name}</h3>
    <p>{user.politics}</p>
    <article>
      {children}
    </article>
  </div>;
}