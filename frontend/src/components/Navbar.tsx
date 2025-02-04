// import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Button } from "./ui/button";
import { Calendar, Calendar1, Loader2, LogOut, Menu, Moon, Newspaper, Route, Sun, User, User2, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import InitialsAvatar from 'react-initials-avatar';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "./ui/separator";
import { useThemeStore } from "@/store/useThemeStore";
// import { useUserStore } from "@/store/useUserStore";

const Navbar = () => {
    //   const { user, logout } = useUserStore();
    const admin: boolean = true;

    const { setTheme } = useThemeStore();

    return (
        <nav className="bg-white dark:bg-[#020817] px-4 shadow-sm">
            <div className="container flex justify-between items-center mx-auto">
                {/* Logo */}
                <Link to={'/'} className="flex items-center">
                    <img src="/logo.png" alt="ABES Logo" className="md:h-14 h-10 my-2 mr-0" />
                    <span className="md:font-bold md:text-xl font-semibold text-lg text-hoverGreen dark:text-yellow-100">ABES - EventHub</span>
                </Link>

                <div className="hidden lg:flex space-x-6 items-center">
                    <Link to="/" className="hover:text-hoverGreen font-medium">Home</Link>
                    <Link to="/events" className="hover:text-hoverGreen  font-medium">Events</Link>
                    <Link to="/clubs" className="hover:text-hoverGreen  font-medium">Clubs</Link>
                    <Link to="/participation/status" className="hover:text-hoverGreen  font-medium">My Journey</Link>

                    {/* {user?.admin && ( */}
                    {admin && (
                        <Menubar>
                            <MenubarMenu>
                                <MenubarTrigger className="cursor-pointer">Dashboard</MenubarTrigger>
                                <MenubarContent>
                                    <Link to="/admin/club">
                                        <MenubarItem className="cursor-pointer">My ClubSpace</MenubarItem>
                                    </Link>
                                    <Link to="/admin/events">
                                        <MenubarItem className="cursor-pointer">My Events</MenubarItem>
                                    </Link>
                                    <Link to="/admin/participants">
                                        <MenubarItem className="cursor-pointer">Participants</MenubarItem>
                                    </Link>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    )}
                </div>

                <div className="hidden lg:flex space-x-4 items-center">

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    {/* <AvatarImage src={user?.profilePicture} alt={user?.fullname} /> */}
                                    <AvatarImage src="" alt="" />
                                    <AvatarFallback>SV</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel className="">My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link to={'/profile'} className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <User2 />
                                        <Button variant="ghost">View Profile</Button>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    {/* <button onClick={logout} className='flex w-fit items-center gap-2 cursor-pointer'> */}
                                    <button className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <LogOut />
                                        <Button variant="ghost" >Logout</Button>
                                    </button>
                                </DropdownMenuItem>

                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>

                <div className="lg:hidden">
                    <MobileNavbar />
                </div>
            </div>

        </nav>
    )
}

export default Navbar

const MobileNavbar = () => {
    const { setTheme } = useThemeStore();

    //   const { user, loading, logout } = useUserStore();

    const admin: boolean = true;
    const loading: boolean = false;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    size={"icon"}
                    className="rounded-full bg-gray-200 text-black hover:bg-gray-200"
                    variant="outline"
                >
                    <Menu size={"18"} />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="flex flex-row items-center justify-between mt-2">
                    <SheetTitle className="text-hoverGreen">
                        <Link to={'/'} className="flex items-center">
                            <img src="/logo.png" alt="ABES Logo" className="md:h-10 h-6 my-2 mr-2" />
                            <span className="md:font-bold md:text-xl font-semibold text-lg text-hoverGreen dark:text-yellow-100">ABES - EventHub</span>
                        </Link>
                    </SheetTitle>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </SheetHeader>
                <Separator className="my-2" />
                <SheetDescription className="flex-1">
                    <Link
                        to="/profile"
                        className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                    >
                        <User />
                        <span>Profile</span>
                    </Link>
                    <Link to="/events" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <Calendar />
                        <span>Events</span>
                    </Link>
                    <Link to="/clubs" className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium">
                        <Newspaper />
                        <span>Clubs</span>
                    </Link>
                    <Link
                        to="/participation/status"
                        className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                    >
                        <Route />
                        <span>My Journey</span>
                    </Link>
                    <div className="my-2">
                        <Separator />
                    </div>
                    {/* {user?.admin && ( */}
                    {admin && (
                        <>
                            <Link
                                to="/admin/club"
                                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                            >
                                <Newspaper />
                                <span>My ClubSpace</span>
                            </Link>
                            <Link
                                to="/admin/events"
                                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                            >
                                <Calendar1 />
                                <span>My Events</span>
                            </Link>
                            <Link
                                to="/admin/participants"
                                className="flex items-center gap-4 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer hover:text-gray-900 font-medium"
                            >
                                <Users />
                                <span>Participants</span>
                            </Link>
                        </>
                    )}
                </SheetDescription>
                <SheetFooter className="flex flex-col gap-4">
                    <Link to={'/profile'} className="flex flex-row items-center gap-2">
                        <Avatar>
                            {/* <AvatarImage src={user?.profilePicture} alt={user?.fullname} /> */}
                            <AvatarImage src="" alt="" />
                            <AvatarFallback>SV</AvatarFallback>
                        </Avatar>
                        {/* <h1 className="font-bold">{user?.fullname}</h1> */}
                        <h1 className="font-bold">ABES</h1>
                    </Link>
                    <SheetClose asChild>
                        {loading ? (
                            <Button className="bg-green hover:bg-hoverGreen">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </Button>
                        ) : (
                            <Button
                                // onClick={logout}
                                className="bg-green hover:bg-hoverGreen"
                            >
                                Logout
                            </Button>
                        )}
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};