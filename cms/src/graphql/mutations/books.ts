export const BOOKS_UPDATE_IS_GOOD = `
    mutation UpdateBookGoodStatus($id: ID!, $isGood: Boolean!) {
        updateBookIsGood(id: $id, isGood: $isGood) {
            id
            isGood
        }
    }
`;