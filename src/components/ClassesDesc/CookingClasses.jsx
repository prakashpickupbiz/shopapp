import React from "react";
import ClassesNavbar from "../ClassesNavbar";

const cardsData = [
  {
    id: 1,
    imgSrc: "https://www.myzen.tv/wp-content/uploads/2024/01/young-happy-cook-preparing-bruschetta-with-avocado-sauce-cherry-tomato-kitchen-1-1536x1024.jpg",
    buttonText: "Learn More",
    heading: "Beginner's Italian Cuisine",
    description: "Master the art of making classic Italian dishes like pasta, risotto, and tiramisu.",
    authorImg: "https://codebypc.in/wp-content/uploads/2024/09/Picture1.png",
    authorName: "Chef Mario Rossi",
    timeAgo: "5h Ago",
  },
  {
    id: 2,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiVY2rv9s7lAVxV-VMenjK3DMtij16vqP9aA&s",
    buttonText: "Join Now",
    heading: "Vegan Baking Workshop",
    description: "Discover how to bake delicious vegan cakes, cookies, and bread.",
    authorImg: "https://codebypc.in/wp-content/uploads/2024/09/Picture1.png",
    authorName: "Chef Lisa Green",
    timeAgo: "1d Ago",
  },
  {
    id: 3,
    imgSrc: "https://bansaloilandfoods.com/wp-content/uploads/2022/12/scale.jpg",
    buttonText: "Register Today",
    heading: "Sushi Rolling Masterclass",
    description: "Learn the secrets of sushi rolling, from selecting ingredients to perfect plating.",
    authorImg: "https://codebypc.in/wp-content/uploads/2024/09/Picture1.png",
    authorName: "Chef Kenji Tanaka",
    timeAgo: "3d Ago",
  },
  {
    id: 4,
    imgSrc: "https://www.worldfoodwine.com/assets/styles/max_750x500/public/img/2023/12/person-mastering-basic-cooking-skills-ss_1200.png?itok=NaKVB4Eh",
    buttonText: "Explore",
    heading: "French Pastry Delights",
    description: "Create exquisite French pastries like croissants, éclairs, and macarons.",
    authorImg: "https://codebypc.in/wp-content/uploads/2024/09/Picture1.png",
    authorName: "Chef Sophie Blanc",
    timeAgo: "2w Ago",
  },
];



export default function CookingClasses() {
  return (
    <div>
      {/* <ClassesNavbar /> */}
      <div className="flex justify-evenly mb-14 w-full mt-4  flex-wrap">
        {cardsData.map((card) => (
          <div key={card.id} className="rounded-2xl w-64 bg-slate-200 hover:shadow-2xl hover:border-y-gray-800 border-2">
            <div className="rounded-md">
              <img
                className="rounded-t-2xl w-full h-36"
                src={card.imgSrc}
                alt=""
              />
            </div>
            <div className="text-white rounded-2xl m-2 ">
              <button className=" bg-slate-800  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-2 text-center me-2 mb-2 p-1">
                {card.buttonText}
              </button>
            </div>
            <div className="px-1 m-2">
              <h1 className="font-bold">{card.heading}</h1>
            </div>
            <div className="px-1 m-2">
              <h5>{card.description}</h5>
            </div>
            <div>
              <div className="flex px-1 m-2 items-center mt-8">
                <img
                  className="w-8 h-8"
                  src={card.authorImg}
                  alt={card.authorName}
                />
                <div className="mx-4">
                  <h1 className="font-bold">{card.authorName}</h1>
                  <div><h5 className="text-sm">{card.timeAgo}</h5></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
