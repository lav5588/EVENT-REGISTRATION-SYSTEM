import { useLocation, useParams } from "react-router-dom";
import { Button } from "./ui/button";

const EventPage = () => {

    const { id } = useParams();
    const location = useLocation();
    const { event, isActive } = location.state || {};

    return (
        <div className="max-w-6xl mx-auto my-10 min-h-[60vh]">
            <div className="w-full mx-2">
                <div className="relative w-full h-32 md:h-64 lg:h-72 overflow-hidden rounded-lg shadow-lg">
                    <img
                        src="https://technovate-2.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fabab2fc5c170491f8277d3ad46a39abc%2Fassets%2Ffavicon%2F761.jpeg&w=1440&q=75"
                        alt="Event Cover Image"
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full p-1 text-sm px-2 text-gray-600 shadow">
                        {event.mode}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between my-5 mx-4">
                    <div className="flex-1">
                        <h1 className="font-bold text-3xl">{event.name}</h1>
                        <p className="text-sm text-gray-600 mt-2 dark:text-gray-400 line-clamp-2">
                            {event.description}
                        </p>
                    </div>
                    <div className="flex-1 mt-4 md:mt-0 md:ml-4">
                        <div className="bg-white p-5 rounded-lg shadow-md dark:bg-[#2E3A52]">
                            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-300 border-b-2 border-gray-200 pb-2">
                                Event Details
                            </h2>
                            <div className="flex flex-col space-y-2 mt-3 text-gray-700">
                                <div className="flex justify-between dark:text-white">
                                    <span className="font-semibold">Registration Fee:</span>
                                    <span className="font-bold text-green dark:text-yellow-100">₹{event.registrationFee}</span>
                                </div>
                                <div className="flex justify-between dark:text-white">
                                    <span className="font-semibold">Registration Ends:</span>
                                    <span>{event.registrationEndDate}</span>
                                </div>
                                <div className="flex justify-between dark:text-white">
                                    <span className="font-semibold">Event Dates:</span>
                                    <span>{`${event.eventStartDate} - ${event.eventEndDate}`}</span>
                                </div>
                                <div className="flex justify-between dark:text-white">
                                    <span className="font-semibold">Timings:</span>
                                    <span>{`${event.startTime} - ${event.endTime}`}</span>
                                </div>
                            </div>
                            <div className="mt-5">
                                <Button disabled={isActive ? false : true} className="w-full bg-green text-white font-semibold py-2 rounded-lg shadow-md hover:bg-hoverGreen">
                                    Register Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage