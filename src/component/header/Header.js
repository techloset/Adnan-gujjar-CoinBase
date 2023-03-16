import React from "react";

function Header() {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              width="41"
              height="33"
              viewBox="0 0 41 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.2509 30.6042H35.5233C37.5204 30.6042 39.0896 28.7971 39.0896 26.6888C39.0896 24.5806 37.5204 22.7735 35.5233 22.7735C34.81 22.7735 34.0968 22.7735 33.3835 22.7735C36.2366 16.2982 34.81 1.99219 21.9713 1.99219C13.4122 1.99219 9.13262 7.26282 9.13262 17.9547H7.70609C4.56774 17.9547 2 20.8159 2 24.2794C2 27.743 4.56774 30.6042 7.70609 30.6042H14.8387H26.2509Z"
                stroke="url(#paint0_linear_11_2)"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.8473 15.9355L19.6186 16.68L18.5354 13.4375L20.7287 12.7048C21.1754 12.5555 21.6486 12.5865 22.0646 12.7895L22.0648 12.7896C22.4806 12.9922 22.7858 13.3404 22.9299 13.7718C23.074 14.2031 23.0393 14.6644 22.8288 15.0764L22.8285 15.0768C22.6237 15.4786 22.2779 15.7819 21.8473 15.9355ZM16.7273 14.0407L17.0533 13.9318L19.8872 22.4145L19.5612 22.5234C19.1601 22.6575 18.9276 23.0928 19.0661 23.5074C19.2046 23.922 19.6521 24.1301 20.0532 23.9961L21.9738 23.3545L22.0778 23.6658C22.2163 24.0804 22.6638 24.2886 23.0649 24.1546C23.466 24.0206 23.6985 23.5852 23.56 23.1706L23.456 22.8593L23.5856 22.816L23.6896 23.1273C23.8281 23.542 24.2755 23.7501 24.6767 23.6161C25.0787 23.4818 25.3096 23.046 25.1714 22.6323L25.0652 22.3145C26.8053 21.6131 27.7398 19.6879 27.1416 17.8972C26.7098 16.6049 25.5972 15.7367 24.331 15.5359C24.6185 14.8403 24.6683 14.0447 24.4118 13.2767C23.9559 11.9122 22.6769 11.0604 21.3048 11.0585L21.1454 10.5812L21.1453 10.5811C21.0071 10.1674 20.5603 9.95852 20.1588 10.0927C19.7581 10.2265 19.525 10.6615 19.6635 11.0762L19.7679 11.3887L19.6383 11.432L19.534 11.1196C19.5339 11.1196 19.5339 11.1195 19.5339 11.1195C19.3954 10.7048 18.9476 10.4973 18.547 10.6311C18.1463 10.765 17.9132 11.2 18.0517 11.6147L18.1561 11.9271L17.873 12.0217L17.8727 12.021L17.3985 12.1794L16.2353 12.568C15.8341 12.702 15.6017 13.1374 15.7402 13.5519C15.8787 13.9665 16.3261 14.1747 16.7273 14.0407ZM25.5424 19.9089L25.5423 19.9091C25.2982 20.3878 24.8809 20.7462 24.3626 20.9194L21.369 21.9195L20.1107 18.1531L22.3041 17.4204C22.3213 17.4146 22.3378 17.4086 22.3491 17.4045L23.104 17.1523C23.622 16.9792 24.1713 17.0153 24.6545 17.2511L24.6547 17.2512C25.1375 17.4865 25.4923 17.891 25.6597 18.3923C25.8273 18.8938 25.7868 19.43 25.5424 19.9089Z"
                fill="url(#paint1_linear_11_2)"
                stroke="url(#paint2_linear_11_2)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_11_2"
                  x1="22.3993"
                  y1="-2.51155"
                  x2="23.6451"
                  y2="48.1948"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD749B" />
                  <stop offset="1" stop-color="#281AC8" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_11_2"
                  x1="19.5168"
                  y1="8.63399"
                  x2="28.061"
                  y2="30.5052"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD749B" />
                  <stop offset="1" stop-color="#281AC8" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_11_2"
                  x1="19.5168"
                  y1="8.63399"
                  x2="28.061"
                  y2="30.5052"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD749B" />
                  <stop offset="1" stop-color="#281AC8" />
                </linearGradient>
              </defs>
            </svg>
            <span class="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">First Link</a>
            <a class="mr-5 hover:text-gray-900">Second Link</a>
            <a class="mr-5 hover:text-gray-900">Third Link</a>
            <a class="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            
            
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
