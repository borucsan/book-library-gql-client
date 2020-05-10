import React from "react";
import { gql, useQuery } from "@apollo/client";
import AuthorDetails from "../components/AuthorDetails";

const RANDOM_AUTHOR_QUERY = gql`
  query randomAuthor {
    randomAuthor {
      name
      photo {
        url
      }
      books {
        title
        cover {
          url
        }
      }
    }
  }
`;

export default function RandomAuthorPage() {
  const { loading, error, data } = useQuery(RANDOM_AUTHOR_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load authors...</p>;
  }
  const { randomAuthor } = data;
  return <AuthorDetails author={randomAuthor} />;
}
