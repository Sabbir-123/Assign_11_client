import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleServiceCard from "./SingleServiceCard";

const LimitServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://loserver.vercel.app/servicelimit")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <section className="py-6 sm:py-12   textColor  ">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Available Service's Review</h2>
            <p className="font-serif text-sm   ">
              What You Can Review?
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((singleService) => (
              <SingleServiceCard
                key={singleService.category_id}
                singleService={singleService}
              ></SingleServiceCard>
            ))}
          </div>
        </div>
        <div className="grid justify-center">
          <Link to={"/services"}>
            <button className="btn btn-secondary">See All</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LimitServices;
