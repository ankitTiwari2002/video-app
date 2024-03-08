import React from "react";
import Comments from "./Comments";
const commentsData = [
  {
    name: "Ankit Tiwari",
    text: "Mollit do consequat eiusmod est sunt ullamco.",
    replies: [
      {
        name: "Ankit Tiwari",
        text: "Mollit do consequat eiusmod est sunt ullamco.",
        replies: [
          {
            name: "Ankit Tiwari",
            text: "Mollit do consequat eiusmod est sunt ullamco.",
            replies: [
              {
                name: "Ankit Tiwari",
                text: "Mollit do consequat eiusmod est sunt ullamco.",
                replies: [
                  {
                    name: "Ankit Tiwari",
                    text: "Mollit do consequat eiusmod est sunt ullamco.",
                    replies: [],
                  },
                  {
                    name: "Ankit Tiwari",
                    text: "Mollit do consequat eiusmod est sunt ullamco.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ankit Tiwari",
    text: "Mollit do consequat eiusmod est sunt ullamco.",
    replies: [
      {
        name: "Ankit Tiwari",
        text: "Mollit do consequat eiusmod est sunt ullamco.",
        replies: [
          {
            name: "Ankit Tiwari",
            text: "Mollit do consequat eiusmod est sunt ullamco.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ankit Tiwari",
    text: "Mollit do consequat eiusmod est sunt ullamco.",
    replies: [
      {
        name: "Ankit Tiwari",
        text: "Mollit do consequat eiusmod est sunt ullamco.",
        replies: [
          {
            name: "Ankit Tiwari",
            text: "Mollit do consequat eiusmod est sunt ullamco.",
            replies: [
              {
                name: "Ankit Tiwari",
                text: "Mollit do consequat eiusmod est sunt ullamco.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ankit Tiwari",
    text: "Mollit do consequat eiusmod est sunt ullamco.",
    replies: [
      {
        name: "Ankit Tiwari",
        text: "Mollit do consequat eiusmod est sunt ullamco.",
        replies: [
          {
            name: "Ankit Tiwari",
            text: "Mollit do consequat eiusmod est sunt ullamco.",
            replies: [
              {
                name: "Ankit Tiwari",
                text: "Mollit do consequat eiusmod est sunt ullamco.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ankit Tiwari",
    text: "Mollit do consequat eiusmod est sunt ullamco.",
    replies: [
      {
        name: "Ankit Tiwari",
        text: "Mollit do consequat eiusmod est sunt ullamco.",
        replies: [
          {
            name: "Ankit Tiwari",
            text: "Mollit do consequat eiusmod est sunt ullamco.",
            replies: [
              {
                name: "Ankit Tiwari",
                text: "Mollit do consequat eiusmod est sunt ullamco.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ankit Tiwari",
    text: "Mollit do consequat eiusmod est sunt ullamco.",
    replies: [
      {
        name: "Ankit Tiwari",
        text: "Mollit do consequat eiusmod est sunt ullamco.",
        replies: [
          {
            name: "Ankit Tiwari",
            text: "Mollit do consequat eiusmod est sunt ullamco.",
            replies: [
              {
                name: "Ankit Tiwari",
                text: "Mollit do consequat eiusmod est sunt ullamco.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div>
          <Comments key={index} data={comment} />
          <div className="pl-5 border border-l-black m-2">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
