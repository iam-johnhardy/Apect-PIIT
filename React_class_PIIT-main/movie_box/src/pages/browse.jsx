import Sidebar from "../component/Sidebar";
import Hero from "../component/Hero";

export default function Browse() {

    return (

        <div className="min-h-screen bg-[#071418] flex justify-center items-center p-10">

            <div
                className="
                w-full
                max-w-7xl
                rounded-3xl
                overflow-hidden
                flex
                shadow-2xl
                bg-black/40
            "
            >

                <Sidebar />

                <Hero />

            </div>

        </div>

    );

}