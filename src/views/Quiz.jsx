/* eslint-disable react-hooks/immutability */
"use client";
import { fetchQuizx, saveQuiz } from "@/service/quiz";
import { Button, message, Spin } from "antd";
import { router } from "better-auth/api";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Quiz = () => {
	const router = useRouter();
	const params = useParams();
	const id = params?.id;
	const [info, setInfo] = useState({
		questions: [],
		loading: true,
		answer: {}, ///{ 0:2, 1:1}
		current: 0,
	});

	useEffect(() => {
		fetchDetails();
	}, []);

	const fetchDetails = useCallback(async () => {
		try {
			const { data } = await fetchQuizx(id);
			const { question, userResponse = {} } = data;
			setInfo((prev) => ({
				...prev,
				questions: question,
				current: 0,
				answer: userResponse,
				loading: false,
			}));
		} catch (error) {
			console.log("errror==>fetchDetails", error);
			message.error("Something went wrong, try again");
		} finally {
			setInfo((prev) => ({
				...prev,
				loading: false,
			}));
		}
	}, [id]);

	const handleSelect = useCallback(
		(index) => {
			setInfo((prev) => ({
				...prev,
				answer: {
					...prev.answer,
					[info?.current]: index,
				},
			}));
		},
		[info]
	);

	const handleBack = useCallback(() => {
		if (info?.current === 0) {
			router.back();
		} else {
			setInfo((prev) => ({ ...prev, current: prev.current - 1 }));
		}
	}, [info, router]);

	const handleNext = useCallback(() => {
		setInfo((prev) => ({ ...prev, current: prev.current + 1 }));
	}, []);

	const handleFinish = useCallback(async () => {
		try {
			const payload = {
				userResponse: info?.answer,
			};
			const response = await saveQuiz(id, payload);
			// router.back();
		} catch (error) {
			console.log("errror==>fetchDetails", error);
			message.error("Something went wrong, try again");
		}
	}, [router, info?.answer, id]);

	const question = info?.questions?.[info?.current];
	const selected = info?.answer?.[info?.current] ?? null;
	const isLast = info?.current === info?.questions?.length - 1;
	return (
		<div className="min-h-screen min-w-screen w-full flex items-center justify-center bg-blue-100 px-6 py-12">
			{info?.loading ? (
				<Spin size="large" />
			) : (
				<div className="max-w-5xl bg-white w-full rounded-3xl  border border-blue-100 p-6 lg:p-12 flex flex-col lg:flex-row gap-10 justify-between lg:items-center">
					<div className="flex flex-col gap-6 flex-1 self-stretch ">
						<span
							className="flex w-fit rounded-full border border-blue-600 text-sm text-blue-700 font-medium px-4 py-1 
                            "
						>
							Question {info?.current + 1} of {info?.questions?.length}
						</span>

						<div className="flex flex-col gap-4">
							<h1 className="text-3xl lg:text-4xl font-semibold text-slate-900">
								{question?.question || ""}
							</h1>
							<p className="text-slate-600 text-lg ">
								Select the best option out of the given options
							</p>
						</div>

						<div className="flex flex-1 self-stretch w-full rounded-[28px] border border-blue-100 bg-slate-50 p-6">
							<div className="flex flex-1 flex-col rounded-3xl border border-blue-100 bg-white p-8 shadow-sm gap-4">
								{question?.options.map((option, index) => {
									const isSelected = selected === index;
									return (
										<button
											key={index}
											onClick={() => handleSelect(index)}
											className={`w-full text-left flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all cursor-pointer
										${
											isSelected
												? "border-blue-600 bg-blue-50 text-blue-700"
												: "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50"
										}`}
										>
											<div
												className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition-all
											${isSelected ? "border-blue-600 bg-blue-600" : "border-slate-300"}`}
											>
												{isSelected && (
													<div className="w-2.5 h-2.5 rounded-full bg-white" />
												)}
											</div>
											<span className="text-sm font-medium">{option}</span>
											{isSelected && (
												<CheckCircle2
													size={18}
													className="ml-auto text-blue-600 shrink-0"
												/>
											)}
										</button>
									);
								})}
							</div>
						</div>

						<div className="flex items-center justify-between gap-4">
							<Button
								size="large"
								icon={<ArrowLeft size={16} />}
								onClick={handleBack}
							>
								{info?.current === 0 ? "Go Back" : "Previous"}
							</Button>
							{isLast ? (
								<Button
									type="primary"
									size="large"
									disabled={selected === null}
									onClick={handleFinish}
								>
									Finish
								</Button>
							) : (
								<Button
									type="primary"
									size="large"
									disabled={selected === null}
									onClick={handleNext}
								>
									Next
								</Button>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
