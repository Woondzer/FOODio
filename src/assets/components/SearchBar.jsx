function SearchBar() {
    return (
      <div className="flex items-center w-[90vw] max-w-[900px] mx-auto justify-center">
        {/* sök knapp */}
        <button className="btn btn-xl bg-green-800 hover:bg-green-900 text-white rounded-l-lg rounded-r-none px-6 focus:outline-none focus:ring-0 border-none">
            Search
          </button>
  
        {/* sökfält */}
        <label className="input input-xl flex items-center w-full rounded-r-lg rounded-l-none bg-white focus-within:outline-none focus-within:ring-0 border-none">
            <svg className="h-[1em] opacity-50 ml-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g    strokeLinejoin="round" 
                    strokeLinecap="round" 
                    strokeWidth="2.5" 
                    fill="none" 
                    stroke="currentColor">
                <circle 
                    cx="11" 
                    cy="11" 
                    r="8">
                </circle>
                <path 
                    d="m21 21-4.3-4.3">
                </path>
              </g>
            </svg>

            <input
              type="search"
              required
              placeholder="Search recipe"
              className="w-full bg-white text-black pl-2 focus:outline-none focus:ring-0 border-none"
            />
          </label>
        </div>
    );
  }
  
  export default SearchBar;
  
  
  
  