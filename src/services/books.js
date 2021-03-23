import axios from "axios";

const BASE_URL = 'http://localhost:3002'

const dummyBooks = [
  {
    title: 'Do Androids Dream of Electric Sheep?',
    publishedOn: '2021-03-01'
  },
  {
    title: 'Everything I Never Told You',
    publishedOn: '2021-03-02'
  },
  {
    title: 'Is Everyone Hanging Out Without Me? (and Other Concerns)',
    publishedOn: '2021-03-03'
  },
  {
    title: 'The Devil Wears Prada by Lauren Weisberger.',
    publishedOn: '2021-03-04'
  },
  {
    title: 'The Curious Incident of the Dog in the Night-Time',
    publishedOn: '2021-03-05'
  }
]

export function getBooks ({ search }) {

  console.log('executed', search)
  
  if (!search) {
    return dummyBooks;
  };

  const re = new RegExp(search, 'i');
  const result = dummyBooks.filter(book => {
    return Boolean(book.title.match(re));
  });

  console.log(result)

  return result;
};