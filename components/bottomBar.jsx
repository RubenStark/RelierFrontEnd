import Link from "next/link";
import RelierRoutes from "../utils/routes";
import { use, useEffect } from "react";
import icons from "../utils/routes";

export default function BottomBar() {
  const routes = icons;

  useEffect(() => {
    console.log(routes);
  }, []);

  return (
    <div className="fixed w-full bottom-0 bg-white flex items-center justify-center xl:hidden">
      <div>
        <ul className="flex flex-row p-4 space-x-8">
          <li >
            <Link href={routes[0].link} className="w-10">
              {routes[0].icon}
            </Link>
          </li>
          <li  >
            <Link href={routes[1].link} className="w-10">
              {routes[1].icon}
            </Link>
          </li>
          <li >
            <Link href={routes[3].link} className="w-10">
              {routes[3].icon}
            </Link>
          </li>
          <li >
            <Link href={routes[2].link}className="w-10">
              {routes[2].icon}
            </Link>
          </li>
          {/* <li >
            <Link href={routes[4].link} className="w-10">
              {routes[4].icon}
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
