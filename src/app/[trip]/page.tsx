"use client";

import { useParams } from "next/navigation.js";
import { Album } from "../album";
import Image from "next/image";
import BackgroundTrip from "@/components/backgroundtrip-components";

export default function Page() {
  const params = useParams();

  const picture = Album.find(({ tripId }) => tripId === params.trip);

  if (!picture) {
    return (
      <div className="h-full">
        <div className="mt-[10rem]">
          <div className="flex justify-center text-white">
            <div className="bg-black ">
              Trip Id: *{params.trip}* doesn't exist
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isVertical = picture?.image?.height > picture?.image?.width;

  return isVertical ? (
    <div>
      <div className="absolute w-full z-10">
        <div className="flex flex-wrap">
          <div className="lg:max-w-[800px]">
            <div className="flex justify-center">
              <h1 className="text-xl">{picture.title}</h1>
            </div>
            <Image src={picture.image} alt={picture.alt} />
          </div>
          <div className="lg:ml-10 mt-10">
            <div className="lg:fixed rounded-lg bg-[#FFFFFF] shadow-md lg:max-w-[500px]">
              <p className="p-5">{picture?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <BackgroundTrip tripId={picture.tripId} />
    </div>
  ) : (
    <div>
      <div className="absolute w-full z-10">
        <div className="flex justify-center">
          <h1 className="text-xl">{picture.title}</h1>
        </div>
        <div className="mt-[10px] flex justify-center">
          <div className="flex flex-col z-10">
            <div className="flex justify-center">
              <div className="max-w-[800px] max-h-[800px]">
                <Image src={picture.image} alt={picture.alt} />
              </div>
            </div>
            <div className="mt-5 bg-[#FFFFFF] rounded-lg shadow-md max-w-[800px]">
              <p className="p-5">{picture?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <BackgroundTrip tripId={picture.tripId} />
    </div>
  );
}
