import Spinner from "./components/Spinner";

function Loading() {
	return (
		<div className="flex min-h-[70vh] flex-col items-center justify-center gap-3">
			<div className="text-center space-y-2">
				<h2 className="text-3xl font-semibold text-yellow-600">Loading...</h2>
			</div>
			<Spinner />
		</div>
	);
}

export default Loading;
