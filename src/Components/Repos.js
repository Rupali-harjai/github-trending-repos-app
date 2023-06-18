import React, { useState } from "react";
import { Dropdown, NavLink } from "react-bootstrap";
import { useGlobalContext } from "../context/productcontext";
import { BsFillStarFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import "../styles/Repo.css";

const Repos = () => {
  const { hits } = useGlobalContext();

  const data = { hits };
  console.log(data);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedRepoName, setSelectedRepoName] = useState("");

  const handleRepoChange = (repositoryName) => {
    setSelectedRepoName(repositoryName);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const filteredData = data.hits
    .filter((hit) =>
      selectedLanguage ? hit.language === selectedLanguage : true
    )
    .filter((hit) =>
      selectedRepoName ? hit.repositoryName === selectedRepoName : true
    );

  const languages = [...new Set(data.hits.map((hit) => hit.language))];

  const repositoryNames = [
    ...new Set(data.hits.map((hit) => hit.repositoryName)),
  ];

  return (
    <>
      <div className="header bg-light text-dark">
        <h5 className=" display-6 fw-bolder pt-4 text-center ">Trending </h5>
        <p className="lead fs-4 pb-5 text-center">
          See what the GitHub community is most excited about today.
        </p>
      </div>
      <div className="main-filter_header container-lg">
        <div className="main_filter_button">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
              RepositoryName
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguageChange("")}>
                All
              </Dropdown.Item>
              {repositoryNames.map((repositoryName, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleRepoChange(repositoryName)}
                >
                  {repositoryName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
              Languages
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleLanguageChange("")}>
                All
              </Dropdown.Item>
              {languages.map((language, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="dropdown-data">
          {filteredData.map((hit, index) => (
            <div key={index}>
              <div className="card_container ">
                <div className="card ">
                  <div className="card_info">
                    <div className="card_heading">
                      <h4>
                        {hit.username} / <span>{hit.repositoryName}</span>
                      </h4>
                    </div>
                    <div className="card_description">
                      <p>{hit.description}</p>
                    </div>
                    <div className="card_built-info">
                      <span className="repo-language-color"></span>
                      <span className="card_language">{hit.language}</span>
                      <span className="repo-star-color">
                        <BsFillStarFill />
                      </span>
                      <span className="card_totalStars">{hit.totalStars}</span>
                      <span className="repo-fork-color">
                        {" "}
                        <BiGitRepoForked></BiGitRepoForked>
                      </span>
                      <span className="card_forks">{hit.forks}</span>
                      {/* <span className="card_ builtBy">{builtBy}</span> */}
                    </div>
                  </div>
                  <div className="card_star_data">
                    <div
                      class="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn ">
                        <BsFillStarFill />
                        <a
                          href={hit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Star
                        </a>
                      </button>
                      <button
                        disabled="disabled"
                        aria-label="You must be signed in to add this repository to a list"
                        type="button"
                        data-view-component="true"
                        className="btn-sm px-2 btn "
                      >
                        {" "}
                        <svg
                          aria-hidden="true"
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          data-view-component="true"
                          class="octicon octicon-triangle-down"
                        >
                          <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="card_star_details">
                      <BsFillStarFill />
                      {hit.starsSince} stars today
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Repos;
