import React from "react";

const ShareButton = () => {
  const shareToInstagram = () => {
    const url = "https://www.noroutinenyc.com";
    const instagramUrl = `instagram://story-camera?text=${encodeURIComponent(
      url
    )}`;

    window.location.href = instagramUrl;
  };

  return (
    <button
      onClick={shareToInstagram}
      className="bg-purple-500 text-white hover:bg-purple-700 px-4 py-2 rounded-md w-full"
    >
      Share to Instagram
    </button>
  );
};

export default ShareButton;
