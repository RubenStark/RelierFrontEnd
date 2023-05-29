import { Avatar, Card } from '@nextui-org/react';
import AvatarListTile from '../components/avatarListTile';
import Container from '../components/container';

function Notifications() {
    return (
        <Container>

            <Notification />
            <Notification />
            <Notification />
            <Notification />

        </Container>
    );
};

export default Notifications;


function Notification() {
    return (
        <Card
            isHoverable
            isPressable
            className='mt-2'
        >
            <div className="flex w-full bg-white p-2 my-2">

                <AvatarListTile
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    username={"ruben_skays_777"}
                    name={"Liked your post 3 hours ago"}
                >
                    <img
                        className='w-10 h-10 fit-cover'
                        src='https://images.unsplash.com/photo-1678789667756-d9b5b6b571a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
                    />
                </AvatarListTile>

            </div>

        </Card>

    )
}