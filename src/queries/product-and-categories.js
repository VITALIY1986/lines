import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql`query {
  heroCarousel: productCategories(where: {slug: "offers"}) {
    nodes {
      id
      children {
        nodes {
          id
          name
          slug
          databaseId
          description
          image {
            id
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
  productCategories(first: 3) {
    nodes {
      id
      name
      slug
      image {
        id
        sourceUrl
        srcSet
      }
    }
  }
  category(id: "dGVybTox") {
    name
    posts {
      nodes {
        slug
        title
        id
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  products(first: 4) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      sku
      image {
        id
        altText
        sourceUrl
      }
      name
      ... on SimpleProduct {
        price(format: RAW)
        regularPrice
        id
      }
      ... on VariableProduct {
        price
        id
        regularPrice
      }
      ... on ExternalProduct {
        price
        id
        externalUrl
        regularPrice
      }
      ... on GroupProduct {
        id
        products {
          nodes {
            ... on SimpleProduct {
              id
              price
              regularPrice
            }
          }
        }
      }
    }
  }
}
`;

export default PRODUCTS_AND_CATEGORIES_QUERY;
