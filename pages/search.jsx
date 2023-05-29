import { Card, Input } from "@nextui-org/react";
import AvatarListTile from "../components/avatarListTile";

export default function Search() {
    return (

        <>
            <div className="w-full flex justify-center">
                <form className='max-w-xl w-full'>
                    <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <Input
                            size="lg"
                            placeholder="Busca por Nombre o Usuario"
                            fullWidth="true"
                            status="primary"
                            clearable
                            contentRight={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </form>
            </div>
            {/* Results */}
            <div className="w-full flex justify-center mt-5">
                <div className="w-full max-w-xl">

                    {/* Users */}

                    <SearchedUser />
                    <SearchedUser />
                    <SearchedUser />
                    <SearchedUser />


                </div>
            </div>
        </>
    );
}


function SearchedUser() {
    return (
        <Card
            isHoverable
            isPressable
            className="mt-2"
        >
            <div className="flex gap-5 items-center bg-white rounded-full p-2">
                <AvatarListTile
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    name={"Ruben Skays"}
                    username={"ruben_skays_777"}
                />
            </div>
        </Card>
    );
}