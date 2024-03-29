import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
const WatchPage = () => {
  const [searchParams] = useSearchParams([]);
  console.log(searchParams.get("v"));

  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-5 ">
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/VLgVw2NEqCM?si=UPWrmodCO4QxfsNa"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
  );
};

export default WatchPage;
