import React from "react";

export interface BackgroundTripProps {
  tripId: string;
}

export default function BackgroundTrip({ tripId }: BackgroundTripProps) {
  if (tripId === "mountain") {
    return (
      <div className="bg-[url('../app/images/portfolio/johannes-andersson-UCd78vfC8vU-unsplash.jpg')] bg-center blur-lg min-h-screen" />
    );
  }
  if (tripId === "bahamas") {
    return (
      <div className="bg-[url('../app/images/portfolio/sean-oulashin-KMn4VEeEPR8-unsplash.jpg')] bg-center blur-lg min-h-screen" />
    );
  }
  if (tripId === "sweden") {
    return (
      <div className="bg-[url('../app/images/portfolio/ines-d-anselme-IAe4R_RiB08-unsplash.jpg')] bg-center blur-lg min-h-screen" />
    );
  }
  if (tripId === "america") {
    return (
      <div className="bg-[url('../app/images/portfolio/chalo-garcia-FFWD8Ryle_U-unsplash.jpg')] bg-center blur-lg min-h-screen" />
    );
  }
  if (tripId === "swimingpool") {
    return (
      <div className="bg-[url('../app/images/portfolio/victor-Kz6D657YAbc-unsplash.jpg')] bg-center blur-lg min-h-screen" />
    );
  }
  if (tripId === "dunes") {
    return (
      <div className="bg-[url('../app/images/portfolio/jeremy-cai-euuaAce3I-o-unsplash.jpg')] bg-center blur-lg min-h-screen" />
    );
  }
}
