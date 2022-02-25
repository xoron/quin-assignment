import { gql } from "@apollo/client";

export default gql`
  query stock($timeInDays: Int!) {
    stock(timeInDays: $timeInDays) {
      milk
      skins
    }
  }
`;
