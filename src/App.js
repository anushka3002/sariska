import "./App.css";
import { useState } from "react";

function App() {
  const [showSecondList, setShowSecondList] = useState(0);
  const [showThirdList, setShowThirdList] = useState(0);

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
      <div className="flex border">
        <div className="">
          <img
            src="https://kharedobecho.com/images/kharedobecho.png"
            width="110px"
          ></img>
        </div>
        <div className="mt-2 flex mx-auto justify-center w-full">
          {dropdownData.map((list) => {
            return (
              <div>
                <div
                  onClick={() => {
                    showSecondList === list.id
                      ? setShowSecondList(0)
                      : setShowSecondList(list.id);
                  }}
                  className="mx-5 cursor-pointer flex border"
                >
                  <p>{list.firstList}</p>
                  <img
                    className="w-[10px] h-[5px] my-auto ml-2"
                    src="http://cdn.onlinewebfonts.com/svg/img_218064.png"
                  ></img>
                </div>
                <div
                  className={`mx-2 cursor-pointer ${
                    showSecondList === list.id ? "block" : "hidden"
                  }`}
                >
                  {list.secondList.map((e) => {
                    return (
                      <div
                        onClick={() => {
                          showThirdList === e.id
                            ? setShowThirdList(0)
                            : setShowThirdList(e.id);
                        }}
                        className="border"
                      >
                        <p>{e.secondKey}</p>
                      </div>
                    );
                  })}
                </div>
                <div className={`mx-2 cursor-pointer`}>
                  {list.secondList.map((el) => {
                    return (
                      <div
                        className={`${
                          showThirdList === el.id && showSecondList === list.id ? "block" : "hidden"
                        }`}
                      >
                        <p>
                          {el.list.map((e) => {
                            return <div>{e}</div>;
                          })}
                        </p>
                      </div>
                    );
                  })}
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
