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
} from "@chakra-ui/react";
import "./admin-logs.scss";
import Pagination from "@mui/material/Pagination";
// import { useState } from "react";
// import { PaginationParams } from "utils/types";
import { useGetAllStudent } from "api/hooks";
import { StudentsType } from "utils/types";
import { convertTimestamp } from "utils/helpers";

const Userslist = () => {
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

	const { data } = useGetAllStudent();
	return (
		<>
			<Box className="dashboard-container">
				<Heading as="h3" size="md" noOfLines={0}>
					All MTU students
				</Heading>
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
								<Th>Matric No</Th>
								<Th>Created</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data?.students?.map((student: StudentsType) => (
								<Tr key={student.id}>
									<Td>{student.firstname}</Td>
									<Td>{student.lastname}</Td>
									<Td>{student.matric_no}</Td>
									<Td>{convertTimestamp(student.created_at)}</Td>
								</Tr>
							))}
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

export default Userslist;
