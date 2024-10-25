function Loading() {
  return (
    <div className="flex size-full items-center justify-center rounded-lg bg-purple-400">
      <div className="flex animate-spin space-x-2">
        <div className="size-6 rounded-full bg-blue-500"></div>
        <div className="size-6 rounded-full bg-green-500"></div>
        <div className="size-6 rounded-full bg-red-500"></div>
        <div className="size-6 rounded-full bg-yellow-500"></div>
      </div>
    </div>
  );
}

export default Loading;
