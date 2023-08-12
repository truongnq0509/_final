import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Joi from "joi";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateProductMutation, useGetSingleQuery, useUpdateProductMutation } from "../api/_product";

type Props = {};

const validationSchema = Joi.object({
	name: Joi.string().required(),
	price: Joi.string().required(),
	desc: Joi.string().required(),
});

const UpdateView = (props: Props) => {
	const { id } = useParams();
	const { data } = useGetSingleQuery(id, {
		skip: !id,
	});
	const [updateProduct] = useUpdateProductMutation();
	const navigate = useNavigate();

	useEffect(() => {
		if (data) {
			setValue("name", data?.name);
			setValue("price", data?.price);
			setValue("desc", data?.desc);
		}
	}, [data]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		context: "context",
		resolver: async (data, context) => {
			const { error, value: values } = validationSchema.validate(data, {
				abortEarly: false,
			});

			if (!error) return { values: values, errors: {} };

			return {
				values: {},
				errors: error.details.reduce(
					(previous, currentError) => ({
						...previous,
						[currentError.path[0]]: currentError,
					}),
					{}
				),
			};
		},
	});

	const onSubmit = async (data: any) => {
		const res: any = await updateProduct({
			id,
			product: data,
		});
		navigate("/admin");
		alert("Sua san pham thanh cong");
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label className="form-label">Name</label>
				<input
					type="text"
					className="form-control"
					{...register("name")}
				/>

				{errors?.name && (
					<div
						id="emailHelp"
						className="form-text"
					>
						{errors?.name?.message as any}
					</div>
				)}
			</div>
			<div className="mb-3">
				<label className="form-label">Price</label>
				<input
					type="text"
					className="form-control"
					{...register("price")}
				/>
				{errors?.price && (
					<div
						id="emailHelp"
						className="form-text"
					>
						{errors?.price?.message as any}
					</div>
				)}
			</div>
			<div className="mb-3">
				<label className="form-label">Desc</label>
				<input
					type="text"
					className="form-control"
					{...register("desc")}
				/>
				{errors?.desc && (
					<div
						id="emailHelp"
						className="form-text"
					>
						{errors?.desc?.message as any}
					</div>
				)}
			</div>
			<button
				type="submit"
				className="btn btn-primary"
			>
				Tao
			</button>
		</form>
	);
};

export default UpdateView;
