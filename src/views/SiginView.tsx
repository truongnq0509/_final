import React from "react";
import { useForm } from "react-hook-form";
import * as Joi from "joi";
import { useSigninMutation, useSignupMutation } from "../api/_auth";
import { useNavigate } from "react-router-dom";

type Props = {};

const validationSchema = Joi.object({
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required(),
	password: Joi.string().required(),
});

const SiginView = (props: Props) => {
	const [signin] = useSigninMutation();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
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
		const res: any = await signin(data);

		if (res.error) {
			alert(res.error.data);
		} else {
			localStorage.setItem("user", JSON.stringify(res?.data.user));
			navigate("/admin");
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label className="form-label">Email</label>
				<input
					type="email"
					className="form-control"
					{...register("email")}
				/>

				{errors?.email && (
					<div
						id="emailHelp"
						className="form-text"
					>
						{errors?.email?.message as any}
					</div>
				)}
			</div>
			<div className="mb-3">
				<label className="form-label">Password</label>
				<input
					type="text"
					className="form-control"
					{...register("password")}
				/>

				{errors?.password && (
					<div
						id="emailHelp"
						className="form-text"
					>
						{errors?.password?.message as any}
					</div>
				)}
			</div>
			<button
				type="submit"
				className="btn btn-primary"
			>
				Đăng Nhập
			</button>
		</form>
	);
};

export default SiginView;
