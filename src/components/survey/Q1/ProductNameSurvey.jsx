import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SurveyAction } from "../../../store/surveySlice";
import { MdArrowDropDown } from "react-icons/md";
import Loading from "../../Loading"

const ProductNameSurvey = () => {
  const [items, setItems] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState();
  const { currentProduct } = useSelector((state) => state.survey);
  const dispatch = useDispatch();

  const handleCategory = async (id) => {
    if (id === selectedCategory) {
      setSelectedCategory(null);
      setProducts(null);
    } else {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/product/allCategory/${id}`
      );
      const data = await res.json();
      setProducts(data);
      setSelectedCategory(id);
    }
  };



  const handleNext = (productName) => {
    console.log();
    if (productName.length > 2) {
      if (currentProduct === 1) {
        dispatch(
          SurveyAction.submitQuestion({
            key: "productName1",
            value: productName,
          })
        );
        dispatch(SurveyAction.questionCount1(2));
      } else if (currentProduct === 2) {
        dispatch(
          SurveyAction.submitQuestion({
            key: "productName2",
            value: productName,
          })
        );
        dispatch(SurveyAction.questionCount2(2));
      } else if (currentProduct === 3) {
        dispatch(
          SurveyAction.submitQuestion({
            key: "productName3",
            value: productName,
          })
        );
        dispatch(SurveyAction.questionCount3(2));
      }
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/admin/getAllCategory`
      );
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  if (!items) {
    return <Loading/>
  }

  return (
    <div className="myContainer">
      <div className="childContainer-1">
        <h1 className="question">Select Product :-</h1>
        <div className="mt-6 flex flex-col justify-center max-w-md mx-auto gap-5 flex-wrap">
          {items.map((val, ind) => (
            <div key={ind}>
              <div
                style={{
                  transition: "background-color 0.5s, color 0.5s",
                  backgroundColor: selectedCategory === val.name ? "#1E40AF" : "",
                  color: selectedCategory === val.name ? "#ffffff" : "",
                }}
                className="px-6 py-3 border cursor-pointer rounded-md flex justify-between hover:bg-blue-500 hover:text-white"
                onClick={() => handleCategory(val.name)}
              >
                {val.name} <MdArrowDropDown className="self-center" />
              </div>
              <div
                style={{
                  maxHeight: selectedCategory === val.name ? "2500px" : "0",
                  transition: "max-height 0.5s ease-in-out",
                }}
                className="overflow-hidden shadow-md bg-white"
              >
                {selectedCategory === val.name &&
                  products &&
                  products.map((item, _) => (
                    <div
                      className="py-4 px-3 cursor-pointer border-b-[1px] border-x-[1px] hover:bg-blue-500 hover:text-white"
                      key={_}
                      onClick={()=>handleNext(item.title)}
                    >
                      {item.title}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductNameSurvey;
