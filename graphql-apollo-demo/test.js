query GetDogByBreed($breed: String!) {
  dog(breed: $breed) {
    images {
      url
      id
      isLiked @client
    }
  }
}
`;
