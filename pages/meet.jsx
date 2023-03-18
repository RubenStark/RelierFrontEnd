import { Avatar, Card, Grid, Text, Button, Row, Collapse } from "@nextui-org/react";
import AvatarListTile from "../components/avatarListTile";
import GridImage from "../components/gridImage";
import Tag from "../components/tag";

export default function Meet() {
    return (

        <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl">

                <Card
                    isHoverable
                    isPressable
                >
                    <Card.Header>
                        <div className="flex w-full">

                            <AvatarListTile
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                name={"Ruben Skays"}
                                username={"ruben_skays_777"}
                            >
                                <Avatar
                                    text="15"
                                    textColor="white"
                                    size="lg"
                                    color="primary"
                                />
                            </AvatarListTile>

                        </div>
                    </Card.Header>

                    <Card.Divider />
                    <Card.Body>
                        <div className="row justify-center">
                            <Text>I know Im gerring warm cause i feel so cold</Text>
                        </div>
                        <div className="row mt-5 flex-wrap gap-2">
                            <Tag tag="Bike" />
                            <Tag tag="BMTH" />
                            <Tag tag="Developer" />
                            <Tag tag="Cinema" />
                            <Tag tag="Musician" />
                        </div>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>

                        <div className="w-full">
                            <Collapse.Group>
                                <Collapse title="View Photos">
                                    <div className="grid grid-cols-4 gap-2 w-full">
                                        <GridImage url="https://images.unsplash.com/photo-1678614033199-971226acb06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80" />
                                        <GridImage url="https://images.unsplash.com/photo-1678614034745-dc7cafbd2f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                                        <GridImage url="https://images.unsplash.com/photo-1678720175173-f57e293022e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                                        <GridImage url="https://images.unsplash.com/photo-1678680080955-6d527685095f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                                    </div>
                                </Collapse>
                            </Collapse.Group>
                        </div>

                    </Card.Footer>
                </Card >
            </div>
        </div>

    );
}


