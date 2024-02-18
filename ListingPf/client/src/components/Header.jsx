import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ConnectButton } from "web3uikit";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  const pageStyles = {
    backgroundImage: 'url("https://orig00.deviantart.net/d76a/f/2009/341/3/0/d_green_black_gradient_by_halaxega.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', // Set to 'no-repeat' to prevent the background image from repeating
    backgroundPosition: 'center',
    color: '#fff', // white text
   
    fontFamily: 'Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  };
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header style={pageStyles}>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
       
        <ul className="flex gap-4">
          <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center space-x-2">
             
              <ConnectButton moralisAuth={false} />
            </div>
          </nav>
          <Link to="/profile" className="mt-6">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline"> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
