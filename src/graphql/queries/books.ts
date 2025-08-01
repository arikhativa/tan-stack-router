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
        id
        author
    }
  }
`
export const GET_BOOKS_IS_GOOD = `
  query GetBooks {
    books {
        id
        isGood
    }
  }
`