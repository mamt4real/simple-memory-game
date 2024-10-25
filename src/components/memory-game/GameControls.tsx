import React from 'react';

type GameControlsProp = {
  speed: number;
  displayNumbers: boolean;
  loading: boolean;
  noOfPairs: number;
  setNoOfPairs: React.Dispatch<React.SetStateAction<number>>;
  reset: () => void;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  setDisplayNumbers: React.Dispatch<React.SetStateAction<boolean>>;
};

function GameControls({
  reset,
  setSpeed,
  setDisplayNumbers,
  setNoOfPairs,
  loading,
  speed,
  displayNumbers,
  noOfPairs
}: GameControlsProp) {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <div className="relative inline-block text-left">
        <select
          value={noOfPairs}
          disabled={loading}
          onChange={(e) => setNoOfPairs(Number(e.target.value))}
          className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-1 pr-8 leading-tight shadow hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="8">8 Pairs</option>
          <option value="12">12 pairs</option>
          <option value="18">18</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="size-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.707a1 1 0 01-1.414 0l-4-4.707a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      <div className="relative inline-block text-left">
        <select
          value={speed}
          disabled={loading}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-1 pr-8 leading-tight shadow hover:border-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="3">Slow</option>
          <option value="2">Normal</option>
          <option value="0.8">Fast</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="size-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.707a1 1 0 01-1.414 0l-4-4.707a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={displayNumbers}
          onChange={() => setDisplayNumbers(!displayNumbers)}
        />
        <div className="peer h-6 w-11 rounded-full bg-gray-200 transition-all duration-300 peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300"></div>
        <span className="absolute left-0.5 top-0.5 size-5 rounded-full border border-gray-300 bg-white transition-all duration-300 peer-checked:translate-x-full"></span>
        <span className="ml-3 text-sm font-medium text-gray-900">
          Display Numbers
        </span>
      </label>

      <button
        disabled={loading}
        className="rounded-md bg-red-500 px-4 py-1 font-bold text-white transition duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default GameControls;
