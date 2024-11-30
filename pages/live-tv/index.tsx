import LiveTVHome from "@/components/LiveTVHome";
import UserLayout from "@/Layouts/UserLayout";
import Head from "next/head";

export default function LiveTv () {
    return (
        <>
        <Head>
            <title>Live TV | Streamer</title>
        </Head>
        <UserLayout>
        <LiveTVHome />
        </UserLayout>
        </>
    )
}