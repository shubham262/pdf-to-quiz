"use client";
import { Button, Input } from "antd";
import Link from "next/link";
import React from "react";

const Login = () => {
	return (
		<div className="min-h-screen min-w-screen w-full flex items-center justify-center bg-blue-100 px-6 py-12">
			<div className="max-w-5xl bg-white w-full rounded-3xl  border border-blue-100 p-6 lg:p-12 flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
				<div className="flex flex-col gap-6 flex-1 self-stretch ">
					<span
						className="flex w-fit rounded-full border border-blue-600 text-sm text-blue-700 font-medium px-4 py-1 
                     "
					>
						Sign In
					</span>

					<div className="flex flex-col gap-4">
						<h1 className="text-4xl lg:text-5xl font-semibold text-slate-900">
							Sign in to get started and own your quizzes
						</h1>
						<p className="text-slate-600 text-lg ">
							Sign to get access to this platform
						</p>
					</div>
				</div>
				<div className=" flex flex-1 self-stretch w-full rounded-[28px] border border-blue-100 bg-slate-50 p-6">
					<div className="flex flex-1 flex-col rounded-[24px] border border-blue-100 bg-white p-8 shadow-sm">
						<div className="flex flex-col gap-3">
							<h2 className="text-2xl font-semibold text-slate-900">Sign In</h2>
							<p className="text-sm text-slate-500">
								Login to your account with your email and password.
							</p>
						</div>

						<div className="mt-8 flex flex-col gap-5">
							<div className="flex flex-col gap-2">
								<label
									htmlFor="signup-email"
									className="text-sm font-medium text-slate-700"
								>
									Email
								</label>
								<Input
									id="signup-email"
									size="large"
									type="email"
									placeholder="you@example.com"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<label
									htmlFor="signup-password"
									className="text-sm font-medium text-slate-700"
								>
									Password
								</label>
								<Input.Password
									id="signup-password"
									size="large"
									placeholder="Create a password"
								/>
							</div>

							<Button type="primary" size="large" block className="mt-2">
								Sign In
							</Button>
						</div>

						<div className="mt-auto flex items-center justify-center pt-6 text-sm text-slate-500">
							<span>Dont have an account?</span>
							<Link
								href="/signup"
								className="ml-2 font-semibold text-blue-600 transition hover:text-blue-700"
							>
								Sign Up
							</Link>
						</div>
					</div>
					;
				</div>
			</div>
		</div>
	);
};

export default Login;
