"use client";

const SearchForm = () => {
  return (
    <>
      <form className="search-form xl:w-[180px] 2xl:w-[230px]">
        <label className="relative block">
          <input
            className="block bg-[#F2F2F8] w-full rounded-full py-[14px] px-[30px] placeholder:text-[#4C4C4C] focus:outline-none"
            placeholder="Search here..."
            type="text"
            name="search"
          />

          <button
            type="submit"
            className="absolute inset-y-0 right-[20px] flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
            >
              <g clipPath="url(#clip0_201_9)">
                <path
                  d="M20.8012 19.8575L15.3794 14.5223C16.7992 12.9797 17.6716 10.9396 17.6716 8.69472C17.6709 3.89245 13.7154 0 8.83568 0C3.95597 0 0.000488281 3.89245 0.000488281 8.69472C0.000488281 13.497 3.95597 17.3894 8.83568 17.3894C10.9441 17.3894 12.8778 16.6602 14.3967 15.4478L19.8396 20.804C20.1048 21.0653 20.5354 21.0653 20.8006 20.804C21.0664 20.5428 21.0664 20.1188 20.8012 19.8575ZM8.83568 16.0517C4.70692 16.0517 1.35991 12.7579 1.35991 8.69472C1.35991 4.63156 4.70692 1.33773 8.83568 1.33773C12.9645 1.33773 16.3115 4.63156 16.3115 8.69472C16.3115 12.7579 12.9645 16.0517 8.83568 16.0517Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_201_9">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </label>
      </form>
    </>
  );
};

export default SearchForm;
