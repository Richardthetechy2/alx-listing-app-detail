import { Icons } from "@/constants";

const Footer: React.FC = () => {
    return (
        <>
            <div className="bg-[#34967C] h-5"></div>
            <footer className="bg-gray-900 py-8 text-gray-400">
                <div className="block">

                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between  gap-3  px-10 lg:px-3">
                        <div className="mr-10">

                            <div className="mb-5">
                                <img src={Icons.alx_white} alt="alx logo" className="h-6 text-white" />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <p className="text-sm leading-relaxed text-[11px] break-all md:text-[16px] font-normal">
                                    ALX is a platform where travelers can discover and book unique,<br className="hidden md:block" />
                                    comfortable, and affordable lodging options worldwide. From cozy <br className="hidden md:block" />
                                    city apartments and tranquil countryside retreats to exotic<br className="hidden md:block" />
                                    beachside villas, ALX connects you with the perfect place to stay
                                    for any trip.
                                </p>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div className="grid grid-cols-2 md:grid-cols-3 max-md:px-4 mt-3 mb-8 md:mt-8 justify-between lg:flex-1">
                            <div>
                                <h3 className="text-white font-semibold mb-4 text-[16px] md:text-[25px]">Explore</h3>
                                <ul className="space-y-2 text-[11px]">
                                    <li><a href="#" className="hover:text-white">Apartments in Dubai</a></li>
                                    <li><a href="#" className="hover:text-white">Hotels in New York</a></li>
                                    <li><a href="#" className="hover:text-white">Villa in Spain</a></li>
                                    <li><a href="#" className="hover:text-white">Mansion in Indonesia</a></li>
                                </ul>
                            </div>

                            {/* Company Links */}
                            <div>
                                <h3 className="text-white font-semibold mb-4 text-[16px] md:text-[25px]">Company</h3>
                                <ul className="space-y-2 text-[11px]">
                                    <li><a href="#" className="hover:text-white">About us</a></li>
                                    <li><a href="#" className="hover:text-white">Blog</a></li>
                                    <li><a href="#" className="hover:text-white">Career</a></li>
                                    <li><a href="#" className="hover:text-white">Customers</a></li>
                                    <li><a href="#" className="hover:text-white">Brand</a></li>
                                </ul>
                            </div>

                            {/* Help Links */}
                            <div>
                                <h3 className="text-white font-semibold mb-4 text-[16px] md:text-[25px]">Help</h3>
                                <ul className="space-y-2 text-[11px]">
                                    <li><a href="#" className="hover:text-white">Support</a></li>
                                    <li><a href="#" className="hover:text-white">Cancel booking</a></li>
                                    <li><a href="#" className="hover:text-white">Refunds Process</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t text-center border-gray-700 mt-10 pt-6 text-sm flex flex-col justify-between items-center gap-4 text-[12px] mx-auto px-5">
                        <p>
                            Some hotels require you to cancel more than 24 hours before check-in.
                            Details <a href="#" className="text-teal-400 hover:underline">here</a>.
                        </p>
                        <div className="flex space-x-6 ">
                            <a href="#" className="hover:text-white">Terms of Service</a>
                            <a href="#" className="hover:text-white">Policy Service</a>
                            <a href="#" className="hover:text-white">Cookies Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;