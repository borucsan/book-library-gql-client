import React from "react";
import { Flex, Heading, Image, Divider, SimpleGrid } from "@chakra-ui/core";
import Book from "../components/Book";

export default function AuthorDetails({ author }) {
  return (
    <Flex direction="column">
      <Flex direction="column" align="center">
        <Image size="200px" objectFit="cover" src={author.photo.url} />
        <Heading as="h2" size="md" color="gray.700" my="3">
          {author.name}
        </Heading>
      </Flex>
      <Divider orientation="vertical" />
      <SimpleGrid columns={[1, null, 2, 4]} spacing={10}>
          {author.books.map(book => (
            <Book key={book.title} {...book} heading="Books" />
          ))}
      </SimpleGrid>
    </Flex>
  );
}
