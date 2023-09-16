import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className=" flex justify-center md:justify-around md:40 sm:justify-around sm:text-sm dark:bg-teal-700 bg-gray-700 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}