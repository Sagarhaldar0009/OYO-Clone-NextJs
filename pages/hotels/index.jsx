import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
    const [price, setPrice] = useState(3500);
    const [list, setList] = useState([]);
    const [checkedList, setCheckedList] = useState([]);

    const handleCheckList = async () => {
        const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
        if (data?.hotels) {
        setList(data.hotels);
        }
    };


    useEffect(() => {
        if (checkedList.length > 0) {
        console.log("Checked List:", checkedList); // Debugging
        handleCheckList();
        }
    }, [checkedList]);
  

    const handlePrice = async () => {
        if (!price || isNaN(price)) {
          console.error("Invalid price:", price);
          return;
        }
      
        try {
          const { data } = await axios.get(`/api/facilities/range?price=${price}`);
          if (data?.hotels) {
            setList(data.hotels);
          } else {
            console.warn("No hotels found within the price range.");
            setList([]);
          }
        } catch (error) {
          console.error("Error fetching hotels by price range:", error.response?.data || error.message);
        }
    };

  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className=" col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className=" m-5 " key={e._id}>
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

// ctx -> context
export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();

  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allhotels,
    },
  };
}

export default Hotels;