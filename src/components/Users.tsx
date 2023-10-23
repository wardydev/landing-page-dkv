import React from "react";

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const getDataUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const resJson = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return resJson;
};

const Users = async () => {
  const users = await getDataUsers();

  return (
    <div>
      <h2>Users</h2>
      {users?.map((item: IUsers) => (
        <ul key={item.id}>{item.name}</ul>
      ))}
    </div>
  );
};

export default Users;
