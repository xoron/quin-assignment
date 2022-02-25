import { gql } from "@apollo/client";

export default gql`
  mutation order($timeInDays: Int!, $customerOrder: CustomerOrder!) {
    order(timeInDays: $timeInDays, customerOrder: $customerOrder) {
      milk
      skins
    }
  }
`;
