import { gql } from "graphql-request";

export const insertProduct = gql`
mutation InsertProduct($productname: String, $amount: Int, $price: money, $imagelist: [String], $create_at: timestamptz, $update_at: timestamptz, $userid: Int) {
  insert_product(objects: {productname: $productname, amount: $amount, price: $price, imagelist: $imagelist, create_at: $create_at, update_at: $update_at, userid: $userid}) {
    affected_rows
  }
}
`;

export const insertUser = gql`
mutation InsertUser($identificationtype: Int, $identification: String, $photo: String, $username: String, $create_at: timestamptz, $update_at: timestamptz) {
  insert_user(objects: {identificationtype: $identificationtype, identification: $identification, photo: $photo, username: $username, create_at: $create_at, update_at: $update_at}) {
    affected_rows
  }
}
`;

export const updateUser = gql`
mutation updateUser($id: Int,  $username: String, $identification: String,  $photo: String, $identificationtype: Int, $update_at: timestamptz) {
  update_user(where: {id: {_eq: $id}}, _set: {id: $id, identificationtype: $identificationtype, photo: $photo, identification: $identification, username: $username, update_at: $update_at}) {   
affected_rows
    returning {
            identificationtype
            photo
            identification
            username
            update_at
    }
  }
}
`;

export const updateProduct = gql`
mutation updateProduct($id: Int,  $productname: String, $amount: Int,  $imagelist: [String], $price: money, $update_at: timestamptz, $userid: Int) {
  update_product(where: {id: {_eq: $id}}, _set: {id: $id,  productname: $productname, amount: $amount, imagelist: $imagelist, price: $price, update_at: $update_at, userid: $userid}) {   
affected_rows
    returning {
            productname
            amount
            imagelist
            price
            update_at
    }
  }
}
`;

export const deleteUser = gql`
mutation ($id: Int) { 
    delete_user (
      where: {
        id: {
          _eq: $id
        }
      }
    ) {
      affected_rows
    }
  }
`;

export const deleteProduct = gql`
mutation ($id: Int) { 
  delete_product (
    where: {
      id: {
        _eq: $id
      }
    }
  ) {
    affected_rows
  }
}
`;



