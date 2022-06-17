import { gql } from '@apollo/client'

const ORDERS = gql`
  query {
    orders {
          id
          product
          person
          date
    }
  }
`

const CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`

const RESTAURANT = gql`
  query {
    restaurants {
      id
      name
    }
  }
`

const BRANCHES = gql`
  query {
    branches {
      id
      name
    }
  }
`

// Adding items

const ADD_RESTAURANT = gql`
  mutation newRestaurant($name: String! $categoryId: ID!) {
    newRestaurant(name: $name categoryId: $categoryId) {
      id
      name
    }
  }
`

const ADD_BRANCH = gql`
  mutation newBranch($name: String! $restaurantId: ID!) {
    newBranch(name: $name restaurantId: $restaurantId) {
      id
      name
    }
  }
`

const ADD_ITEM = gql`
  mutation newItem($name: String! $price: Float! $branchId: ID!) {
    newItem(name: $name price: $price branchId: $branchId) {
      id
      name
    }
  }
`


export {
  ORDERS,
  CATEGORIES,
  BRANCHES,
  RESTAURANT,
  ADD_RESTAURANT,
  ADD_BRANCH,
  ADD_ITEM
}