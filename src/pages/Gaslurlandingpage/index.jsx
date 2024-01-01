import React from "react";

import { Button, Img, Line, List, Text } from "components";

const GaslurlandingpagePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto p-[18px] w-full">
        <div className="flex flex-col md:gap-10 gap-40 items-center justify-start max-w-[1310px] mb-[54px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[63%] md:w-full">
                <Text
                  className="bg-clip-text bg-gradient1  md:text-3xl sm:text-[28px] text-[32px] text-transparent tracking-[1.50px] uppercase"
                  size="txtPoppinsBold32"
                >
                  FasTech
                </Text>
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-8 items-center justify-between w-full">
                      <Text
                        className="bg-clip-text bg-gradient1  text-transparent text-xs tracking-[1.50px] uppercase"
                        size="txtPoppinsBold12"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-gray-400 text-xs tracking-[1.50px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        My profile
                      </Text>
                      <Text
                        className="text-gray-400 text-xs tracking-[1.50px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        activity
                      </Text>
                      <Text
                        className="text-gray-400 text-xs tracking-[1.50px] uppercase"
                        size="txtPoppinsMedium12"
                      >
                        how it works
                      </Text>
                    </div>
                    <Line className="bg-purple-400 h-px mt-0.5 w-[11%]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-8 items-center justify-between w-[17%] md:w-full">
                <Button
                  className="cursor-pointer font-medium min-w-[126px] text-center text-xs tracking-[1.50px] uppercase"
                  shape="round"
                  color="blue_gray_100"
                >
                  create
                </Button>
                <a
                  href="javascript:"
                  className="text-gray-400 text-xs tracking-[1.50px] uppercase"
                >
                  <Text size="txtPoppinsMedium12">sign in</Text>
                </a>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[71px] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[99px] w-1/2 md:w-full">
                <Text
                  className="leading-[82.00px] md:text-5xl text-7xl text-white-A700 tracking-[-2.00px] w-full"
                  size="txtPoppinsSemiBold72"
                >
                  Discover, collect, and charity in extraordinary NFT
                  marketplace
                </Text>
                <Text
                  className="leading-[36.00px] mt-6 text-2xl md:text-[22px] text-gray-300 sm:text-xl tracking-[0.50px] w-full"
                  size="txtPoppinsRegular24"
                >
                  In aenean posuere lorem risus nec. Tempor tincidunt aenean
                  purus purus vestibulum nibh mi venenatis
                </Text>
                <div className="flex sm:flex-col flex-row gap-10 items-center justify-start mt-8 w-3/4 md:w-full">
                  <Button
                    className="cursor-pointer font-semibold rounded-[16px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-1.00px] w-[218px]"
                    variant="gradient"
                    color="purple_400_blue_600_cc"
                  >
                    Explore
                  </Button>
                  <Button
                    className="!text-blue_gray-100 cursor-pointer font-semibold rounded-[16px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-1.00px] w-[218px]"
                    color="blue_gray_100"
                  >
                    Create
                  </Button>
                </div>
                <Text
                  className="mt-[158px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-1.00px]"
                  size="txtPoppinsMedium48"
                >
                  Hot auctions
                </Text>
              </div>
              <div className="md:h-[564px] sm:h-[644px] h-[734px] relative w-[44%] md:w-full">
                <div className="md:h-[564px] sm:h-[644px] h-[734px] m-auto w-full">
                  <div className="absolute md:h-[564px] sm:h-[644px] h-[671px] inset-x-[0] mx-auto top-[0] w-[98%] sm:w-full">
                    <div className="absolute bg-gradient2  border border-solid bottom-[0] flex flex-col md:gap-10 gap-[60px] justify-end p-[26px] purple_A200_cyan_400_border sm:px-5 right-[0] rounded-[35px] w-[93%]">
                      <Img
                        className="h-5 md:ml-[0] ml-[397px] mr-[31px] mt-[396px]"
                        src="images/img_favorite.svg"
                        alt="favorite"
                      />
                      <div className="flex sm:flex-col flex-row gap-3 items-center justify-start ml-1 md:ml-[0] mr-[307px] w-[32%] md:w-full">
                        <div className="h-14 md:h-[53px] relative w-[38%] sm:w-full">
                          <Img
                            className="absolute h-[53px] inset-x-[0] mx-auto rounded-[50%] top-[0] w-[53px]"
                            src="images/img_ellipse426.png"
                            alt="ellipse426"
                          />
                          <Img
                            className="absolute bottom-[0] h-[53px] inset-x-[0] mx-auto rounded-[50%] w-[53px]"
                            src="images/img_ellipse427.png"
                            alt="ellipse427"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsSemiBold16"
                          >
                            Laura
                          </Text>
                          <Text
                            className="mt-[3px] text-base text-blue_gray-100"
                            size="txtPoppinsMedium16"
                          >
                            0.21 Weth
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute backdrop-opacity-[0.5] bg-purple-A200 blur-[200.00px] h-[123px] left-[0] rounded-[61px] top-[0] w-[123px]"></div>
                  </div>
                  <div className="absolute backdrop-opacity-[0.5] bg-cyan-400_01 blur-[200.00px] bottom-[0] flex flex-col h-[123px] items-end justify-start p-[7px] right-[0] rounded-[61px] w-[123px]">
                    <Text
                      className="mb-[84px] mr-[37px] text-base text-gray-300_01"
                      size="txtPoppinsMedium16Gray30001"
                    >
                      25
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-[33px] h-max inset-y-[0] items-end justify-start my-auto right-[8%] w-4/5">
                  <Img
                    className="h-[448px] sm:h-auto object-cover rounded-bl-[20px] rounded-br-[20px] w-[447px] md:w-full"
                    src="images/img_unsplashog44d93injk.png"
                    alt="unsplashog44dNinetyThree"
                  />
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsSemiBold16"
                  >
                    WE ARE HERE
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-[41px] w-[99%] md:w-full">
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashrujm3dbxcqw.png"
                alt="unsplashrujm3db"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplash9xngoipxceo.png"
                alt="unsplash9xngoip"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashwn9du73b8s.png"
                alt="unsplashwn9duSeventyThree"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplash7pqszt9kiey.png"
                alt="unsplash7pqsztNine"
              />
            </div>
            <div className="flex flex-col mt-[23px] relative w-full">
              <div className="flex flex-col items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-7 items-center justify-between w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-[29px] items-center justify-between w-3/4 md:w-full">
                      <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-[66%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-[48%] md:w-full">
                          <Text
                            className="mt-0.5 text-base text-white-A700"
                            size="txtPoppinsSemiBold16"
                          >
                            Lorem Ipsum
                          </Text>
                          <Text
                            className="mb-0.5 text-base text-white-A700"
                            size="txtPoppinsMedium16WhiteA700"
                          >
                            1.20 Weth
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[48%] md:w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsSemiBold16"
                          >
                            Dolor sit amet
                          </Text>
                          <Text
                            className="text-base text-white-A700"
                            size="txtPoppinsMedium16WhiteA700"
                          >
                            0.21 Weth
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-between w-[32%] md:w-full">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsSemiBold16"
                        >
                          Dignissim curabitu..
                        </Text>
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsMedium16WhiteA700"
                        >
                          0.01 Weth
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-row items-start justify-between w-[24%] md:w-full">
                      <Text
                        className="mt-0.5 text-base text-white-A700"
                        size="txtPoppinsSemiBold16"
                      >
                        Amet pellentesq..
                      </Text>
                      <Text
                        className="mb-0.5 text-base text-white-A700"
                        size="txtPoppinsMedium16WhiteA700"
                      >
                        0.55 Weth
                      </Text>
                    </div>
                  </div>
                  <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[13px] w-full">
                    <Line className="bg-gray-400_01 h-px w-full" />
                    <Line className="bg-gray-400_01 h-px w-full" />
                    <Line className="bg-gray-400_01 h-px w-full" />
                    <Line className="bg-gray-400_01 h-px w-full" />
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[23px] w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtPoppinsRegular16"
                      >
                        Ends in 01.34.45
                      </Text>
                      <Text
                        className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                        size="txtPoppinsMedium16Gray300"
                      >
                        Bid
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtPoppinsRegular16"
                      >
                        Ends in 01.34.45
                      </Text>
                      <Text
                        className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                        size="txtPoppinsMedium16Gray300"
                      >
                        Bid
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-[97px] items-center justify-center w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtPoppinsRegular16"
                      >
                        Ends in 56.44.45
                      </Text>
                      <Text
                        className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                        size="txtPoppinsMedium16Gray300"
                      >
                        Bid
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row items-center justify-between w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtPoppinsRegular16"
                      >
                        Ends in 01.34.45
                      </Text>
                      <Text
                        className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                        size="txtPoppinsMedium16Gray300"
                      >
                        Bid
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[-73.21px] mx-auto w-full z-[1]">
                <Text
                  className="md:mt-0 mt-[213px] text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[-1.00px]"
                  size="txtPoppinsMedium48"
                >
                  Discover
                </Text>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[216px] justify-start md:ml-[0] ml-[380px] w-[12%] md:w-full">
                  <Img
                    className="h-5"
                    src="images/img_iconoutlinesortascending.svg"
                    alt="iconoutlinesort"
                  />
                  <Text
                    className="ml-8 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-1.00px]"
                    size="txtPoppinsMedium24"
                  >
                    Category
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[216px] justify-start ml-10 md:ml-[0] w-[12%] md:w-full">
                  <Img
                    className="h-5 md:ml-[0] ml-[121px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="mr-[34px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-1.00px]"
                    size="txtPoppinsMedium24"
                  >
                    Cheapest
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[214px] justify-start ml-10 md:ml-[0] w-[10%] md:w-full">
                  <Img
                    className="h-5 md:ml-[0] ml-[93px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_One"
                  />
                  <Text
                    className="mr-8 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-1.00px]"
                    size="txtPoppinsMedium24"
                  >
                    Newest
                  </Text>
                </div>
                <div className="h-[277px] mb-[5px] ml-10 md:ml-[0] md:mt-0 mt-0.5 relative w-[14%] md:w-full">
                  <div className="flex flex-col md:gap-10 gap-[214px] justify-start mb-[-40.87px] mt-auto mx-auto w-[52%] z-[1]">
                    <Img
                      className="h-5"
                      src="images/img_filter.svg"
                      alt="filter"
                    />
                    <Text
                      className="ml-8 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-1.00px]"
                      size="txtPoppinsMedium24"
                    >
                      Filter
                    </Text>
                  </div>
                  <div className="bg-gradient1  h-12 mt-auto mx-auto rounded-[10px] w-full"></div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-[81px] w-[99%] md:w-full">
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashlki74jj7hu.png"
                alt="unsplashlki74jj"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashud5drkd4h6w.png"
                alt="unsplashud5drkd"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashhos3dzgphzw.png"
                alt="unsplashhos3dzg"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashcrs2vlkse98.png"
                alt="unsplashcrs2vlk"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[23px] w-full">
              <div className="flex md:flex-1 md:flex-col flex-row gap-[29px] items-center justify-between w-3/4 md:w-full">
                <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-[66%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-[48%] md:w-full">
                    <Text
                      className="mt-0.5 text-base text-white-A700"
                      size="txtPoppinsSemiBold16"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="mb-0.5 text-base text-white-A700"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      1.20 Weth
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[48%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsSemiBold16"
                    >
                      Dolor sit amet
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      0.21 Weth
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-[32%] md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsSemiBold16"
                  >
                    Dignissim curabitu..
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsMedium16WhiteA700"
                  >
                    0.01 Weth
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-row items-start justify-between w-[24%] md:w-full">
                <Text
                  className="mt-0.5 text-base text-white-A700"
                  size="txtPoppinsSemiBold16"
                >
                  Amet pellentesq..
                </Text>
                <Text
                  className="mb-0.5 text-base text-white-A700"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  0.55 Weth
                </Text>
              </div>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[13px] w-[99%] md:w-full">
              <Line className="bg-gray-400_01 h-px w-full" />
              <Line className="bg-gray-400_01 h-px w-full" />
              <Line className="bg-gray-400_01 h-px w-full" />
              <Line className="bg-gray-400_01 h-px w-full" />
            </div>
            <List
              className="sm:flex-col flex-row gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[23px] w-[99%]"
              orientation="horizontal"
            >
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 01.34.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:pl-5 pl-6 pr-[19px] pt-1 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Buy
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 01.34.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:pl-5 pl-6 pr-[19px] pt-1 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Buy
                </Text>
              </div>
              <div className="flex flex-row gap-[97px] items-center justify-center w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 56.44.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:pl-5 pl-6 pr-[19px] pt-1 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Buy
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 01.34.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:pl-5 pl-6 pr-[19px] pt-1 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Buy
                </Text>
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-[29px] items-center justify-between mt-20 w-[99%] md:w-full">
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashtryl7jyath0.png"
                alt="unsplashtryl7jy"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashfg7j6nnebbc.png"
                alt="unsplashfg7j6nn"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplashbu8texhspcy.png"
                alt="unsplashbu8texh"
              />
              <Img
                className="h-[313px] md:h-auto object-cover rounded-[10px]"
                src="images/img_unsplash9adeedyb2yk.png"
                alt="unsplash9adeedy"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-7 items-center justify-between mt-[23px] w-full">
              <div className="flex md:flex-1 md:flex-col flex-row gap-[29px] items-center justify-between w-3/4 md:w-full">
                <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-[66%] md:w-full">
                  <div className="flex flex-row items-start justify-between w-[48%] md:w-full">
                    <Text
                      className="mt-0.5 text-base text-white-A700"
                      size="txtPoppinsSemiBold16"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="mb-0.5 text-base text-white-A700"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      1.20 Weth
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[48%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsSemiBold16"
                    >
                      Dolor sit amet
                    </Text>
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsMedium16WhiteA700"
                    >
                      0.21 Weth
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-[32%] md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsSemiBold16"
                  >
                    Dignissim curabitu..
                  </Text>
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsMedium16WhiteA700"
                  >
                    0.01 Weth
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-row items-start justify-between w-[24%] md:w-full">
                <Text
                  className="mt-0.5 text-base text-white-A700"
                  size="txtPoppinsSemiBold16"
                >
                  Amet pellentesq..
                </Text>
                <Text
                  className="mb-0.5 text-base text-white-A700"
                  size="txtPoppinsMedium16WhiteA700"
                >
                  0.55 Weth
                </Text>
              </div>
            </div>
            <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between mt-[13px] w-[99%] md:w-full">
              <Line className="bg-gray-400_01 h-px w-full" />
              <Line className="bg-gray-400_01 h-px w-full" />
              <Line className="bg-gray-400_01 h-px w-full" />
              <Line className="bg-gray-400_01 h-px w-full" />
            </div>
            <List
              className="sm:flex-col flex-row gap-[29px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[23px] w-[99%]"
              orientation="horizontal"
            >
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 01.34.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Bid
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 01.34.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Bid
                </Text>
              </div>
              <div className="flex flex-row gap-[97px] items-center justify-center w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 56.44.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Bid
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16"
                >
                  Ends in 01.34.45
                </Text>
                <Text
                  className="border border-gray-300 border-solid sm:px-5 px-[23px] py-0.5 rounded-lg text-base text-gray-300"
                  size="txtPoppinsMedium16Gray300"
                >
                  Bid
                </Text>
              </div>
            </List>
            <Button
              className="cursor-pointer font-medium min-w-[161px] mt-[117px] text-center text-xs tracking-[1.50px] uppercase"
              shape="round"
              color="blue_gray_100"
            >
              Load more
            </Button>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start w-[98%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Text
                className="sm:flex-1 sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[36%] sm:w-full"
                size="txtPoppinsMedium40"
              >
                Etiam et id tincidunt faucibus mollis a sociis pretium fermentum
                quis magna faucibus lacus.
              </Text>
              <div className="flex md:flex-1 flex-col gap-[35px] items-start justify-start md:ml-[0] ml-[120px] md:mt-0 mt-1 w-1/5 md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtPoppinsRegular40"
                >
                  Marketplace
                </Text>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Home
                  </Text>
                  <Text
                    className="mt-[34px] text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Activity
                  </Text>
                  <Text
                    className="mt-[29px] text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Discover
                  </Text>
                  <a
                    href="javascript:"
                    className="mt-8 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                  >
                    <Text size="txtPoppinsRegular24Bluegray100">
                      Learn more
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start ml-11 md:ml-[0] md:mt-0 mt-[5px] w-[16%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtPoppinsRegular40"
                >
                  Company
                </Text>
                <div className="flex flex-col gap-[31px] items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    About Us
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Services
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Portfolio
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[39px] items-start justify-start ml-10 md:ml-[0] w-[13%] md:w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtPoppinsRegular40"
                >
                  Contact
                </Text>
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Facebook
                  </Text>
                  <Text
                    className="mt-[35px] text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Instagram
                  </Text>
                  <Text
                    className="mt-7 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Twitter
                  </Text>
                  <Text
                    className="mt-8 text-2xl md:text-[22px] text-blue_gray-100 sm:text-xl tracking-[0.72px]"
                    size="txtPoppinsRegular24Bluegray100"
                  >
                    Email
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-9 items-center justify-start w-full">
                <Line className="bg-gray-100 h-px w-full" />
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex sm:flex-1 flex-row items-center justify-between w-[12%] sm:w-full">
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_instagram.png"
                      alt="instagram_One"
                    />
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_facebook.png"
                      alt="facebook_One"
                    />
                    <Img
                      className="h-8 md:h-auto object-cover w-8"
                      src="images/img_twittersquared.png"
                      alt="twittersquared"
                    />
                  </div>
                  <Text
                    className="sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-gray-600 sm:text-xl"
                    size="txtPoppinsRegular24Gray600"
                  >
                    Copyright 2021 Gaslur
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GaslurlandingpagePage;
