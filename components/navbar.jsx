import React, { useContext, useEffect } from "react";
import { Navbar, Button, Link } from "@nextui-org/react";
import { FollowingForYouContext } from "../utils/context";
import { useAuth } from "../hooks/useAuth";

function MyNavbar({ handleFollowing }) {
  const { setFollowing } = useContext(FollowingForYouContext);

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
          <Button auto flat as={Link} href="/login">
            Login | Sign Up
          </Button>
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}

export default MyNavbar;
