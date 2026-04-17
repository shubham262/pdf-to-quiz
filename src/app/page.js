import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-blue-100 px-6 py-12">
			<div className="max-w-5xl w-full rounded-3xl border border-blue-100 bg-white p-12 flex gap-10 items-center justify-between">
				<div className="flex flex-col gap-6 flex-1 self-stretch">
					<span className="flex w-fit rounded-full border border-blue-200 text-sm font-medium bg-blue-50 text-blue-700 px-4 py-1">
						PDF to Quiz Generator
					</span>
					<div className="flex flex-col gap-4">
						<h1 className="text-5xl font-semibold text-slate-900">
							Turn learning PDF into simple , ready-to teach quizzes
						</h1>
						<p className="text-slate-600 text-lg ">
							Upload a PDF,extract the key ideas, and generate clean quiz
							questions that are easy to use in class or for revision
						</p>
					</div>
				</div>
				<div className="flex-1 flex self-stretch w-full rounded-[28px] border border-blue-100 bg-slate-50 p-6">
					<div className="rounded-[24px] border-2 border-dashed border-blue-200 bg-white p-6 text-center shadow-sm transition-colors hover:border-blue-400 flex flex-1 self-stretch flex-col items-center">
						<div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600"></div>
						<div className="mt-5 flex flex-col gap-4">
							<h2 className="text-xl font-semibold text-slate-900">
								Upload Your PDF
							</h2>
							<p className="text-sm text-slate-500">
								Drag and drop your file here,or click to browse from your device
							</p>
						</div>
						<label className="mt-6 flex curs-pointer items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
							Choose a PDF
							<input type="file" className="hidden" accept="application/pdf" />
						</label>
						<p className="mt-4 text-xs uppercase text-slate-400">
							PDF only • Clean Import • Quiz Ready
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
