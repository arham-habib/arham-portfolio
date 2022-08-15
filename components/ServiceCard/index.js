import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 cursor-pointer`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Currently on leave from Finance/Math at UPenn Wharton. I'm the cofounder of VO2, backed by Techstars, Rough Draft Ventures, and Eberg Capital. Wharton's Cypher Accelerator. Prior to that, I went through through Jane Street's SEE program and was a Venture Analyst at Redbud Brands."}
      </p>
    </div>
  );
};

export default ServiceCard;
