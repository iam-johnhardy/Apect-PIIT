export default function Sidebar() {

    return (

        <aside
            className="
            w-64
            bg-black/60
            text-white
            flex
            flex-col
            justify-between
            p-8
        "
        >

            <div className="bg-black/70">
                <h1 className="font-SendFlowers  text-red-500 text-4xl italic mb-20">
                    Mirror
                </h1>

                <nav>

                    <ul className="space-y-7">

                        <li>Home</li>

                        <li className="text-red-500 font-semibold">
                            Browse
                        </li>

                        <li>Trending</li>

                        <li>Saved</li>

                        <li>Playlist</li>

                    </ul>

                </nav>

            </div>

            <div className="space-y-5">

                <p>Setting</p>

                <p>My profile</p>

            </div>

        </aside>

    );

}