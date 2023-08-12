import React from "react";
import { useDeleteProductMutation, useGetAllQuery } from "../api/_product";
import { Link } from "react-router-dom";

type Props = {};

const ProductManager = (props: Props) => {
	const { data } = useGetAllQuery({});
	const [deleteProduct] = useDeleteProductMutation();

	const handleDelete = (id: any) => {
		const check = confirm("Ban co muon xoa khong");

		if (check) {
			deleteProduct(id);
			alert("Xoa thanh cong");
		}
	};
	return (
		<table className="table">
			<button className="btn btn-success">
				<Link to="/admin/add">Add</Link>
			</button>
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">Price</th>
					<th scope="col">Desc</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{data?.map((item: any) => {
					return (
						<tr>
							<th scope="row">1</th>
							<td>{item?.name}</td>
							<td>{item?.price}</td>
							<td>{item?.desc}</td>
							<td
								style={{
									display: "flex",
									gap: "32px",
								}}
							>
								<button
									className="btn btn-danger"
									onClick={() => handleDelete(item?.id)}
								>
									Xoa
								</button>
								<button className="btn btn-info">
									<Link to={`/admin/${item?.id}/update`}>Cap Nhat</Link>
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ProductManager;
