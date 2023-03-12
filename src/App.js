import "./App.css";
import { useState } from "react";

function App() {
  const [showSecondList, setShowSecondList] = useState(0);
  const [showThirdList, setShowThirdList] = useState(0);
  const [hamburger,setHamburger] = useState(true)

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
      <div className="lg:flex md:block text-[#57575c]">
        <div className="flex justify-between lg:h-[100px]">
          <img
            src="https://kharedobecho.com/images/kharedobecho.png"
            width="120px"
          ></img>
          <img onClick={()=>setHamburger(!hamburger)} className="lg:hidden cursor-pointer" src="https://cdn.iconscout.com/icon/free/png-256/hamburger-menu-462145.png" width="40px"></img>
        </div>
        <div className={`mt-5 lg:flex ${hamburger?"md:visible":"md:hidden"} mx-auto justify-between lg:w-[70%] md:w-full`}>
          {dropdownData.map((list) => {
            return (
              <div className="lg:w-[18%] md:w-[95%]">
                <div
                  onClick={() => {
                    showSecondList === list.id
                      ? setShowSecondList(0)
                      : setShowSecondList(list.id); 
                  }}
                  className="mx-5 cursor-pointer flex lg:pb-2 md:p-2 p-2 w-full md:justify-between lg:justify-start lg:pt-1 md:border lg:border-[white] lg:border"
                >
                  <p className="">{list.firstList}</p>
                  {list.secondList.length > 0 && (
                    <img
                      className="w-[10px] h-[5px] my-auto lg:ml-2 md:mr-6"
                      src="http://cdn.onlinewebfonts.com/svg/img_218064.png"
                    ></img>
                  )}
                </div>
                <div className="lg:flex md:block lg:w-[400px] md:w-full">
                  <div
                    className={`ml-5 cursor-pointer ${
                      showSecondList === list.id
                        ? "block"
                        : "hidden"
                    }`}
                  >
                    {list.secondList.map((e) => {
                      return (
                        <div
                          onClick={() => {
                            showThirdList === e.id 
                            &&  showSecondList === list.id
                              ? setShowThirdList(0)
                              : setShowThirdList(e.id);
                          }}
                          className="lg:flex"
                        > 
                          <div className="lg:w-[200px] md:w-full flex justify-between p-2 bg-[#f0f7ff] border">
                          <p className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 hover:text-[#959498]">{e.secondKey}</p>
                          {e.list.length > 0 && (
                            <img
                              className="w-[10px] h-[10px] mt-2 ml-2"
                              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                            ></img>
                          )}
                          </div>
                          <div
                            className={`${
                              e.list.length > 0 && 
                              showThirdList === e.id &&
                              showSecondList === showSecondList
                                ? "block border"
                                : "hidden"
                            }`}
                          >
                            <div>
                              {e.list.map((el) => {
                                return <div className="p-2 bg-[#f0f7ff] pl-4"><p className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 hover:text-[#959498]">{el}</p></div>;
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
