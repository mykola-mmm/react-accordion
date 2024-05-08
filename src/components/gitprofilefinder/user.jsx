import React from "react";

export default function User({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    bio,
    location,
    created_at,
  } = user;
  const date = new Date(created_at);
  return (
    <div className="card">
      <div className="user">
        <div className="avatar-wrapper">
          <img src={avatar_url} alt="User" className="avatar" />
        </div>
        <div className="personal-info">
          <a href="">{name ? name : login}</a>
          {location ? <span>{location}</span> : null}
          {bio ? <span>{bio}</span> : null}
        </div>
      </div>

      <div className="github-info">
        <div className="created-at">
          <span>
            Created at {date.getDate()}{" "}
            {date.toLocaleString("en-us", { month: "short" })}{" "}
            {date.getFullYear()}
          </span>
        </div>
        <div className="followers-info">
          <span>Followers {followers}</span>
        </div>
        <div className="following-info">
          <span>Following {following}</span>
        </div>
        <div className="public-repos">
          <span>Public repos {public_repos}</span>
        </div>
      </div>
    </div>
  );
}
