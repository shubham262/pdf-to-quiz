"use client";
import { Button } from "antd";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

const Landing = () => {
	const router = useRouter();
	const handleGetStarted = useCallback(() => {
		router.push("/signin");
	}, [router]);
	return (
		<div className="min-h-screen min-w-screen w-full flex items-center justify-center bg-blue-100 px-6 py-12">
			<div className="max-w-5xl bg-white w-full rounded-3xl  border border-blue-100 p-6 lg:p-12 flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
				<div className="flex flex-col gap-6 flex-1 self-stretch ">
					<span
						className="flex w-fit rounded-full border border-blue-600 text-sm text-blue-700 font-medium px-4 py-1 
                     "
					>
						PDF to Quiz Generator
					</span>

					<div className="flex flex-col gap-4">
						<h1 className="text-4xl lg:text-5xl font-semibold text-slate-900">
							Turn learning PDf into simple,ready-to-teach Quizzes.
						</h1>
						<p className="text-slate-600 text-lg ">
							Upload a pdf, extract keywords and ideas and generate simplified
							Quiz
						</p>
					</div>
					<Button
						type="primary"
						size="large"
						block
						className="mt-2"
						onClick={handleGetStarted}
					>
						Get Started
					</Button>
				</div>
				<div className=" flex flex-1 self-stretch w-full rounded-[28px] border border-blue-100 bg-slate-50 p-6">
					<div className="flex flex-col items-center rounded-[24px] border border-dashed border-blue-400 bg-white p-6 text-center shadow-sm transition hover:border-blue-600 cursor-pointer self-stretch flex-1">
						<div className="w-14 h-14 flex items-center justify-center bg-blue-100 rounded-2xl text-blue-600">
							<Upload />
						</div>

						<div className="mt-5 flex flex-col gap-4">
							<h2 className="text-xl font-semibold text-slate-900">
								Upload your PDF
							</h2>
							<p className="text-sm text-slate-500">
								Drag and drop your file here, or click on to browse your files
								in local device
							</p>
						</div>

						<label
							className="
                        mt-6 flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transiton hover:bg-blue-700 cursor-pointer
                        
                        "
						>
							Choose Your PDF
							<input type="file" accept="application/pdf" className="hidden" />
						</label>
						<p className="mt-4 text-xs uppercase text-slate-400">
							PDF Only · Clean Import · Quiz Ready
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
