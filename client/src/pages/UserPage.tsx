import React from 'react';
import Cookies from 'js-cookie';

export default function UserPage() {
  const cookie = Cookies.get('Dsh');
  return cookie ? <div>UserPage</div> : <h3>you need to login</h3>;
}
