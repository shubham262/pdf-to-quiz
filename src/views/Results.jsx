"use client";
import { fetchQuizx } from "@/service/quiz";
import { Button, message, Spin } from "antd";
import {
	ArrowLeft,
	CheckCircle2,
	HelpCircle,
	ListChecks,
	XCircle,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const statCards = [
	{
		key: "total",
		label: "Total Questions",
		icon: ListChecks,
		color: "text-slate-600",
		bg: "bg-slate-100",
		border: "border-slate-200",
	},
	{
		key: "correct",
		label: "Correct",
		icon: CheckCircle2,
		color: "text-green-600",
		bg: "bg-green-50",
		border: "border-green-200",
	},
	{
		key: "incorrect",
		label: "Incorrect",
		icon: XCircle,
		color: "text-red-500",
		bg: "bg-red-50",
		border: "border-red-200",
	},
	{
		key: "notMarked",
		label: "Not Answered",
		icon: HelpCircle,
		color: "text-amber-500",
		bg: "bg-amber-50",
		border: "border-amber-200",
	},
];

const Results = () => {
	return (
		<div className="min-h-screen min-w-screen w-full flex items-center justify-center bg-blue-100 px-6 py-12">
			<div className="max-w-5xl bg-white w-full rounded-3xl border border-blue-100 p-6 lg:p-12 flex flex-col gap-10">
				<div className="flex flex-col gap-4">
					<span className="flex w-fit rounded-full border border-blue-600 text-sm text-blue-700 font-medium px-4 py-1">
						Quiz Complete
					</span>
					<h1 className="text-4xl lg:text-5xl font-semibold text-slate-900">
						Here are your results
					</h1>
					<p className="text-slate-500 text-lg">
						See how you performed across all questions.
					</p>
				</div>

				<div className="flex flex-1 self-stretch w-full rounded-[28px] border border-blue-100 bg-slate-50 p-6">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
						{statCards.map(({ key, label, icon: Icon, color, bg, border }) => (
							<div
								key={key}
								className={`flex flex-col gap-3 rounded-2xl border ${border} ${bg} p-6`}
							>
								<div
									className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white ${color}`}
								>
									<Icon size={20} />
								</div>
								<span className="text-3xl font-bold text-slate-900">
									2
								</span>
								<span className="text-sm font-medium text-slate-500">
									{label}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="flex items-center justify-between gap-4">
					<Button size="large" icon={<ArrowLeft size={16} />}>
						Go Back
					</Button>
					<Button type="primary" size="large">
						Back to Home
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Results;
