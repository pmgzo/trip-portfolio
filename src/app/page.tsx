import Image from "next/image";
import Vacance1 from "./images/portfolio/johannes-andersson-UCd78vfC8vU-unsplash.jpg";
import { Album } from "./album";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-[1000px]">
        <ul className="flex flex-wrap gap-8">
          {Album.map(({ title, description, alt, image, tripId }) => {
            return (
              <li key={tripId}>
                <Link href={`${tripId}`}>
                  <div className="border-2 border-black rounded-sm ">
                    <div className="text-center">{title}</div>
                    <div className="bg-gray rounded-t h-[80px]" />
                    <div className="w-[400px] h-[350px] relative">
                      <Image src={image} alt={alt} fill={true} />
                    </div>
                    <div className="bg-gray rounded-b h-[50px]" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
