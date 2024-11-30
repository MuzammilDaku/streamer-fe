import UserLayout from "@/Layouts/UserLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Channel() {
  const router = useRouter();
  const [channel, setChannel] = useState<any>("");

  useEffect(() => {
    const { ch } = router.query;
    setChannel(ch);
  }, []);

  const channelFrame = useRef<HTMLIFrameElement>(null);

  const handleBlockAds = () => {
        if (channelFrame.current) {
          channelFrame.current.setAttribute(
            "sandbox",
            "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation allow-full-screen"
          );
        };
  };
  

  return (
    <>
      <Head>
        <title>
          {channel == "star-sports-hindi"
            ? "Star Sports Hindi"
            : "Live TV | Streamer"}
        </title>
      </Head>
      <UserLayout>
        <div
          style={{
            width: "100%",
          }}
          className="p-5"
        >
          <div
            style={{
              fontSize: "24px",
              color: "#fefefe",
              paddingLeft: "10px",
              fontWeight: "bolder",
            }}
            className="my-2"
          >
            Star Sports Hindi Streaming
          </div>
          <iframe
        //   width={200}
          ref={channelFrame}
          onLoad={handleBlockAds}
          onLoadCapture={handleBlockAds}
          onLoadStart={handleBlockAds}
          onLoadStartCapture={handleBlockAds}
          onLoadedData={handleBlockAds}
          onLoadedDataCapture={handleBlockAds}
          onLoadedMetadata={handleBlockAds}
          onLoadedMetadataCapture={handleBlockAds}
            height="720"
            src="https://cdn.crichdplays.ru/embed2.php?id=starsp3"
            name="iframe_a"
            style={{
              width: "100%",
              borderRadius: "25px",
            }}
          ></iframe>
        </div>
      </UserLayout>
    </>
  );
}
