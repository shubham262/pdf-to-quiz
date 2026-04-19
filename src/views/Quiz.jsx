/* eslint-disable react-hooks/immutability */
"use client";
import { fetchQuizx } from "@/service/quiz";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Quiz = () => {
	const params = useParams();
	const id = params?.id;
	const [info, setInfo] = useState({});

	useEffect(() => {
		fetchDetails();
	}, []);

	const fetchDetails = useCallback(async () => {
		const response = await fetchQuizx(id);
		console.log("response", response);
	}, [id]);
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
				</div>
			</div>
		</div>
	);
};

export default Quiz;
