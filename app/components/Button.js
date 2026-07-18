function Button({ children, onClick }) {
	return (
		<button
			className="px-4 py-2 text-lg cursor-pointer bg-gray-700 hover:bg-gray-800"
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
