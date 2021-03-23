import axios from "axios";

const BASE_URL = 'http://localhost:3002'

const dummyAuthors = [
  {
    firstName: 'Satrio',
    lastName: 'Adi'
  },
  {
    firstName: 'Indra',
    lastName: 'Adji'
  },
  {
    firstName: 'Ivan',
    lastName: 'Sans'
  },
  {
    firstName: 'Josh',
    lastName: 'Ward'
  },
  {
    firstName: 'Ary',
    lastName: 'Good'
  }
]

export function getAuthors ({ search }) {
  
  if (!search) {
    return dummyAuthors;
  };

  const re = new RegExp(search, 'i');
  const result = dummyAuthors.filter(author => {
    return Boolean(author.firstName.match(re) || author.lastName.match(re));
  });

  console.log(result)

  return result;
};