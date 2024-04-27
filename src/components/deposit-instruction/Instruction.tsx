import {
  List,
  ListItem,
  ListIcon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const Instruction = () => {
    return (
      <List spacing={3}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.700" />
          Log in to your BTC wallet or exchange account.
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.700" />
          Initiate a BTC withdrawal transaction
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.700" />
          Paste the ZNF BTC wallet address provided below as the
          destination address:
          <Text as={"h4"}>
            Wallet Address: 1NSdx527qmsXKRmuQqh72Zk9i8EX6LVJas
          </Text>
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="purple.700" />
          Confirm the transaction details and complete the withdrawal.
        </ListItem>
      </List>
    );
};

export default Instruction;
