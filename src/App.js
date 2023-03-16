import "./App.css";
import { useState } from "react";

function App() {
  const [showSecondList, setShowSecondList] = useState(0);
  const [showThirdList, setShowThirdList] = useState(0);
  const [hamburger, setHamburger] = useState(true);

  let dropdownData = [
    {
      id: 1,
      firstList: "Property",
      secondList: [
        {
          id: 1,
          secondKey: "Residential",
          list: [
            "Apartment/Flat/Builder Floor",
            "Residential Land",
            "House/Villa",
            "Farm House",
            "Other",
          ],
        },
        {
          id: 2,
          secondKey: "Commercial",
          list: [
            "Office",
            "Retails",
            "Commercial Land",
            "Industry",
            "Storage",
            "Hospitality",
            "Others",
          ],
        },
      ],
    },
    {
      id: 2,
      firstList: "Fashion",
      secondList: [
        {
          id: 1,
          secondKey: "Men",
          list: ["Clothes", "Jewellery", "Footwear", "Accessories"],
        },
        {
          id: 2,
          secondKey: "Women",
          list: ["Clothes", "Jewellery", "Footwear", "Accessories"],
        },
        {
          id: 3,
          secondKey: "Kids",
          list: ["Clothes", "Jewellery", "Footwear", "Accessories"],
        },
      ],
    },
    {
      id: 3,
      firstList: "Services",
      secondList: [
        {
          id: 1,
          secondKey: "Personal & More",
          list: ["Astrologer", "Baby Photographer"],
        },
        {
          id: 2,
          secondKey: "Appliance Repairs",
          list: ["Refrigerator Repair", "Washing Machine Repair"],
        },
        {
          id: 3,
          secondKey: "Beauty & Spa",
          list: ["Massage for women", "Massage for men"],
        },
        {
          id: 4,
          secondKey: "Home Cleaning & Repair",
          list: ["Electricians", "Plumbers"],
        },
        {
          id: 5,
          secondKey: "Business & Taxes",
          list: ["Packers and Movers", "Lawyer"],
        },
        {
          id: 6,
          secondKey: "Weddings & Events",
          list: ["Makeup and Hairstyling", "Lawyer"],
        },
        { id: 7, secondKey: "Others", list: [] },
      ],
    },
    {
      id: 4,
      firstList: "Furnitures",
      secondList: [
        { id: 1, secondKey: "Sofa & Dining", list: [] },
        { id: 2, secondKey: "Beds & Wardrobes", list: [] },
        { id: 3, secondKey: "Home Decor & Garden", list: [] },
        { id: 4, secondKey: "Kids Furniture", list: [] },
        { id: 5, secondKey: "Other Household Items", list: [] },
      ],
    },
    {
      id: 5,
      firstList: "Cars & Bikes",
      secondList: [
        { id: 1, secondKey: "Car", list: [] },
        { id: 2, secondKey: "Bike", list: [] },
      ],
    },
    {
      id: 6,
      firstList: "Jobs",
      secondList: [],
    },
  ];

  return (
    <div>
      <div className=" text-[#57575c] fixed w-full">
        <div className="flex bg-[#f0f7ff] flex justify-between lg:h-[115px] w-full px-4 py-2 lg:py-[0px]">
          <div className="">
            <img
              className="pt-2 hidden lg:flex"
              src="https://kharedobecho.com/images/kharedobecho.png"
              width="120px"
              height="100px"
            ></img>
            <img
              className="flex lg:hidden mt-2"
              src="https://kharedobecho.com/images/kbMobileLogo.png"
              width="40px"
              height="40px"
            ></img>
          </div>
          <div className="lg:hidden flex justify-between w-[50%] my-auto">
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png"
            ></img>
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/512/3388/3388641.png"
            ></img>
            <img
              className="w-6 h-6"
              src="https://www.pikpng.com/pngl/b/283-2837538_login-icon-line-icons-iconscout-login-icon-images.png"
            ></img>
            <img
              onClick={() => setHamburger(!hamburger)}
              className="w-6 h-6 cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
            ></img>
          </div>
          <div className="lg:flex hidden flex h-[45px] mt-4 pr-4">
            <div className=" bg-[white] flex w-[270px] justify-between items-center justify-center px-2">
              <div className="flex">
                <img
                  className="w-[20px] h-[20px]"
                  src="https://www.svgrepo.com/show/127575/location-sign.svg"
                ></img>
                <p>India</p>
              </div>
              <img
                className="w-[15px] h-[15px]"
                src="https://cdn-icons-png.flaticon.com/512/25/25623.png"
              ></img>
            </div>
            <select className="lg:flex hidden px-2 border-[#d8d8d8] border-x-[2px]">
              <option>Choose Services Near You</option>
            </select>
            <input
              placeholder="What are you looking for"
              className="border px-2 w-[300px] lg:flex hidden"
            ></input>
            <div className="border bg-[black] w-[80px] rounded-r-[4px] lg:flex hidden">
              <img
                className="w-[25px] h-[25px] mx-auto py-auto mt-2"
                src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg"
              ></img>
            </div>
            <button className="hidden lg:flex border-[2px] border-[#6acb00] rounded-[5px] flex h-[35px] my-auto items-center p-4 ml-3">
              <img
                className="w-[15px] h-[15px]"
                src="https://cdn-icons-png.flaticon.com/512/3388/3388641.png"
              ></img>
              <p className="text-[14px] font-medium ml-1">Post Adv</p>
            </button>
            <button className="lg:flex hidden border-[2px] border-[#6acb00] rounded-[5px] flex h-[30px] my-auto items-center p-4 ml-3">
              <img
                className="w-[15px] h-[15px]"
                src="https://www.pikpng.com/pngl/b/283-2837538_login-icon-line-icons-iconscout-login-icon-images.png"
              ></img>
              <p className="text-[14px] font-medium ml-1">Login</p>
            </button>
          </div>
        </div>
        <div
         onMouseLeave={() => {
          setShowSecondList(10);
          }}
          className={`text-[14px] lg:flex w-full lg:mt-[-35px] lg:h-full h-[450px] lg:overflow-hidden overflow-y-scroll ${
            hamburger ? "visible" : "hidden"
          } mx-auto justify-between lg:w-[80%] md:w-full`}
        >
          {dropdownData.map((list) => {
            return (
              <div
             
               className="lg:w-[18%] md:w-[95%]">
                <div
                  className={`mx-5 cursor-pointer ${
                    list.secondList.length === 0 && "py-2"
                  } flex lg:pb-2 justify-between lg:justify-start lg:pt-1 md:border lg:border-[#f0f7ff] lg:border border`}
                >
                  <p
                   onMouseEnter={() => {
                       setShowSecondList(list.id);
                  }}
                    className="my-auto ml-3 hidden lg:block hover:text-[#a2a2a2] transition transition-duration:500"
                  >
                    {list.firstList}
                  </p>
                  <p className="w-full my-auto ml-3 block lg:hidden">
                    {list.firstList}
                  </p>
                  {list.secondList.length > 0 && (
                    <div
                      onClick={() => {
                        showSecondList === list.id
                          ? setShowSecondList(0)
                          : setShowSecondList(list.id);
                      }}
                      className="border-l lg:border-none w-[60px] ml-[-20px] my-auto py-4 lg:py-0 mx-auto items-center"
                    >
                      <img
                        className="w-[10px] h-[5px] md:mr-6 mx-auto"
                        src="http://cdn.onlinewebfonts.com/svg/img_218064.png"
                      ></img>
                    </div>
                  )}
                </div>
                <div className="lg:flex md:block lg:w-[400px] md:w-full">
                  <div
                    className={`mx-5 cursor-pointer transition-opacity duration-500 ease-in-out  ${
                      showSecondList === list.id ? "block" : "hidden"
                    }`}
                  >
                    {list.secondList.map((e) => {
                      return (
                        <div className="lg:flex">
                          <div className={`lg:w-[200px] md:w-full flex justify-between bg-[#f3f7fd] ${e.list.length === 0 && "py-2"}`}>
                            <p
                              onMouseOver={() => {
                               setShowThirdList(e.id);
                              }}
                              className={`${e.list.length > 0 && "lg:mt-2"} hidden lg:block pl-3 w-full transition ease-in-out delay-150 hover:translate-x-1 duration-300 hover:text-[#959498]`}
                            >
                              {e.secondKey}
                            </p>
                            <p className="ml-3 my-auto block lg:hidden pl-3 w-full transition ease-in-out delay-150 hover:translate-x-1 duration-300 hover:text-[#959498]">
                              {e.secondKey}
                            </p>
                            {e.list.length > 0 && (
                              <div
                                onClick={() => {
                                  showThirdList === e.id &&
                                  showSecondList === list.id
                                    ? setShowThirdList(0)
                                    : setShowThirdList(e.id);
                                }}
                                className="p-2"
                              >
                                <img
                                  className="w-[10px] h-[10px] mt-2 ml-2"
                                  src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                                ></img>
                              </div>
                            )}
                          </div>
                          <div
                            className={`${
                              e.list.length > 0 &&
                              showThirdList === e.id &&
                              showSecondList === showSecondList
                                ? "block border-l border-[#eeeff1]"
                                : "hidden"
                            }`}
                          >
                            <div>
                              {e.list.map((el) => {
                                return (
                                  <div className="p-2 bg-[#f0f7ff] pl-4">
                                    <p className="cursor-pointer ml-3 transition ease-in-out delay-150 hover:translate-x-1 duration-300 hover:text-[#959498]">
                                      {el}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
