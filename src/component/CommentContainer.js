import React from "react";

const commentsData = [
  {
    name: "Unknown",
    text: "lorem ispum dolar",
    replies: [
      {
        name: "Unknown",
        text: "lorem ispum dolar",
        replies: [
          {
            name: "Unknown",
            text: "lorem ispum dolar",
            replies: [],
          },
          {
            name: "Unknown",
            text: "lorem ispum dolar",
            replies: [],
          },
          {
            name: "Unknown",
            text: "lorem ispum dolar",
            replies: [],
          },
        ],
      },
      {
        name: "Unknown",
        text: "lorem ispum dolar",
        replies: [],
      },
    ],
  },
  {
    name: "Unknown",
    text: "lorem ispum dolar",
    replies: [],
  },
  {
    name: "Unknown",
    text: "lorem ispum dolar",
    replies: [],
  },
  {
    name: "Unknown",
    text: "lorem ispum dolar",
    replies: [],
  },
  {
    name: "Unknown",
    text: "lorem ispum dolar",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
      <img
        className="h-12 w-12"
        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
        alt="user-icon"
      />

      <div className="px-3">
        <h1>{name}</h1>
        <h2>{text}</h2>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="">
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5 ">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
