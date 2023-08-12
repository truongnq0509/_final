import React from "react";
import { useGetAllQuery } from "../api/_product";

type Props = {};

const HomeView = (props: Props) => {
	const { data } = useGetAllQuery({});

	return (
		<div className="row">
			{data?.map((item: any, index: number) => {
				return (
					<div className="col-3">
						<div
							className="card"
							style={{
								width: "18rem",
							}}
						>
							<img
								src="..."
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{item?.name}</h5>
								<p className="card-text">{item?.price}</p>
								<p className="card-text">{item?.desc}</p>
								<a
									href="#"
									className="btn btn-primary"
								>
									CLick me!
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default HomeView;
