import React, { useContext, useEffect } from "react";
import { Navbar, Button, Link } from "@nextui-org/react";
import { FollowingForYouContext } from "../utils/context";
import { useAuth } from "../hooks/useAuth";
import icons from "../utils/routes";

function MyNavbar({ handleFollowing }) {
  const { setFollowing } = useContext(FollowingForYouContext);

  const routes = icons;

  const handleToggleFollowing = () => {
    setFollowing(true);
  };
  const handleToggleForYou = () => {
    setFollowing(false);
  };

  const user = useAuth();

  return (
    <Navbar variant="sticky" maxWidth={"fluid"}>
      <Navbar.Brand>
        <Link href="/">
          <span className="font-bold text-xl">Relier</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link href="#" onPress={user && handleToggleFollowing}>
          Following
        </Navbar.Link>
        <Navbar.Link isActive href="#" onPress={user && handleToggleForYou}>
          For You
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="/login">
          {user ? (
            <Button auto flat as={Link} href="/login">
              Login | Sign Up
            </Button>
          ) : (
            <div className="flex gap-3">
              <Link href={routes[4].link} className="w-10">
                {routes[4].icon}
              </Link>
              <Link href={routes[5].link} className="w-10">
                {routes[5].icon}
              </Link>
            </div>
          )}
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}

export default MyNavbar;
