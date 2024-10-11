"use client";

import { useParams } from "next/navigation.js";
import { Album } from "../album";
import Image from "next/image";

export default function Page() {
  const params = useParams();

  const picture = Album.find(({ tripId }) => tripId === params.trip);

  const isVertical = picture?.image.height > picture?.image.width;

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

  return (
    <div>
      <h1>{picture.title}</h1>
      <div className="w-full h-full">
        {isVertical ? (
          <div className="flex flex-start">
            <div className="w-[800px] h-[100px]">
              <Image src={picture.image} alt={picture.alt} />
            </div>
            <p>{picture?.description}</p>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex justify-center">
              <div className="flex flex-col">
                <div className="max-w-[800px] max-h-[800px]">
                  <Image src={picture.image} alt={picture.alt} />
                </div>
                <p>{picture?.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
