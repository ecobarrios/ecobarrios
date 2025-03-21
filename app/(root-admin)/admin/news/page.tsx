'use client'

import React from "react";

function NewsPage() {
  const deleteImage = async () => {
    const response = await fetch(`/api/images/delete?publicId=djwonmyev4okeoods2zz`, {
      method: "DELETE",
    });

    console.log('response', response);
    
  };
  return (
    <div>
      <button onClick={deleteImage}>delete</button>
    </div>
  );
}

export default NewsPage;
