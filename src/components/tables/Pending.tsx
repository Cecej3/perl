import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import "./tables.scss";
import Pagination from "@mui/material/Pagination";
// import { useState } from "react";
// import { PaginationParams } from "utils/types";
import { useGetAllStaff } from "api/hooks";
import { SecurityPersonelsType } from "utils/types";
import { convertTimestamp } from "utils/helpers";

const Pending = () => {
  // const [paginationParam] = useState<PaginationParams>({
  // 	page_number: 1,
  // 	per_page: 5,
  // });

  // const pageCount =
  // 	Math.ceil(pagination?.totalItems / paginationParam.limit) ?? 1;
  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  // 	setPaginationParam((olddata: PaginationParams) => ({
  // 		...olddata,
  // 		page: value,
  // 	}));
  // };
  const handleChange = () => {};

  const { data } = useGetAllStaff();
  return (
    <>
      <Box className="dashboard-container">
        <Heading as="h3" size="md" noOfLines={0}>
          All Pending transactions
        </Heading>
        <Text>View all pending transactions that are yet to be resolved</Text>

        <TableContainer className={"dashboard-table-container"}>
          <Table
            variant="striped"
            colorScheme="black"
            width="90%"
            marginX="auto"
          >
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Staff Id</Th>
                <Th>Created</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.security_personnels?.map(
                (staff: SecurityPersonelsType) => (
                  <Tr key={staff.id}>
                    <Td>{staff.firstname}</Td>
                    <Td>{staff.lastname}</Td>
                    <Td>{staff.staff_id}</Td>
                    <Td>{convertTimestamp(staff.created_at)}</Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>

        <Box>
          <Pagination
            count={10}
            // page={paginationParam.page}
            onChange={handleChange}
            siblingCount={0}
            boundaryCount={1}
          />
        </Box>
      </Box>
    </>
  );
};

export default Pending;
