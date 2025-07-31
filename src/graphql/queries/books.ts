export const GET_BOOKS = `
  query GetBooks {
    books {
      id
      title
    }
  }
`
export const GET_BOOKS_A = `
  query GetBooks {
    books {
        author
    }
  }
`