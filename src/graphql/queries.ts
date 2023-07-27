import { gql } from "graphql-request";

export const getProductsList = gql`
query GetProduct {
	product {
	  imagelist
		  amount
		  id
		  userid
		  price
		  productname
		  create_at
		  update_at
	}
  }
`;

export const getUsersList = gql`
query GetUser {
	user {
		  identificationtype
		  identification
		  photo
		  username
		  create_at
		  update_at
	}
  }
`;














