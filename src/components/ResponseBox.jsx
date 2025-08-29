import { useEffect, useState } from "react";

const ResponseBox = ({ loading, error, data }) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState("info");

    useEffect(() => {
        if (loading) {
            setMessage("Submitting your enquiry...");
            setType("loading");
            setVisible(true);
        } else if (error) {
            setMessage(`Error: ${error}`);
            setType("error");
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        } else if (data) {
            setMessage(`Success! Your enquiry ID is ${data}`);
            setType("success");
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [loading, error, data]);

    if (!visible) return null;

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] max-w-md z-50">
            <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
                    Enquiry Response
                </h3>
                <p
                    className={`text-sm sm:text-base ${type === "error"
                            ? "text-red-600"
                            : type === "loading"
                                ? "text-blue-600"
                                : "text-green-600"
                        }`}
                >
                    {message}
                </p>
            </div>
        </div>
    );
};

export default ResponseBox;