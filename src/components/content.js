import React, { useState } from "react";

export default function Content() {
  const [comment, setComment] = useState();
  const [commentList, setCommentList] = useState({});
  const [key, setKey] = useState(0);
  const [reply, setReplay] = useState(false);

  const handleChange = (e) => {
    let value = e.target.value;
    setComment(value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    if (comment !== "") {
      setCommentList((prev) => {
        return { ...prev, [key]: comment };
      });
      setComment((prev) => (prev = ""));
      setKey(key + 1);
    }
  };
  const handleDelete = (item) => {
    setCommentList((prevNotes) => {
      return Object.values(prevNotes).filter((key) => {
        return key !== item;
      });
    });
  };
  const handleReply = () => {};

  return (
    <div className="container">
      <div className="add-comment">
        <input
          className="input"
          type="text"
          onChange={handleChange}
          onKeyPress={(e) => (e.key === "Enter" ? handleClick(e) : null)}
          placeholder="add your comment"
          value={comment}
        />
        <button className="button" onClick={handleClick}>
          Comment
        </button>
      </div>
      <div className="comment-section">
        {commentList !== ""
          ? Object.values(commentList).map((key) => (
              <p className="comments">
                {key} <br />
                <button className="delete" onClick={() => handleDelete(key)}>
                  Delete
                </button>
              </p>
            ))
          : null}
      </div>
    </div>
  );
}
