export default function Navbar () {
    const selectedModule = "live-tv";
    return (
        <div className="px-2 my-4">
            <div className="d-flex justify-content between">                
            {selectedModule == "live-tv" ? (
               <div className="d-flex text-light">
                <div style={{
                    fontSize:"16px",
                    cursor:"pointer"
                }} className="mx-2">
                    Sports
                </div>
                <div style={{
                    fontSize:"16px",
                    cursor:"pointer"

                }} className="mx-3">
                    Entertainment
                </div>
                <div style={{
                    fontSize:"16px",
                    cursor:"pointer"

                }} className="mx-3">
                    News
                </div>
               </div>
            ):null}
            </div>

        </div>
    )
}