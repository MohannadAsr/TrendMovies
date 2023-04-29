import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { motion, AnimatePresence } from "framer-motion";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ClipLoader from "react-spinners/ClipLoader";

export default function TvShows({ content }) {
  const [filteredItems, setFilteredItems] = React.useState(content);
  const [filter, setFilter] = React.useState(0);
  const [visible, setVisible] = React.useState(4);
  const popoverHoverFocus = (
    <Popover
      id="popover-trigger-hover-focus"
      title="Popover bottom"
      className="p-3 text-center"
      style={{ zIndex: "999" }}
    >
      <strong className="fs-4">Sorry</strong>{" "}
      <p>This Content isn't available right now</p>
    </Popover>
  );

  React.useEffect(() => {
    if (filter === 0) {
      setFilteredItems(content);
      return;
    }

    const filtering = content.filter((item) => {
      return item.genre_ids.includes(filter);
    });

    setFilteredItems(filtering);
  }, [filter, content]);

  function showmore() {
    if (visible === 8) {
      setVisible(filteredItems.length);
      return;
    }
    setVisible((prev) => prev + 4);
  }

  return (
    <div className="popualr-section py-4" id="popular">
      <Container className="text-center">
        <h2 className="text-center speacial-heading mb-5">Tv Shows</h2>
        <div className="d-flex justify-content-start align-items-center my-4 filter-btn py-3 flex-wrap g-3">
          <Button
            variant="outline-primary"
            className=" fs-6 m-2  fw-bold rounded-pill"
            onClick={() => {
              setFilter(0);
            }}
            isactive={filter === 0 ? "true" : "false"}
          >
            All
          </Button>
          <Button
            variant="outline-primary"
            className=" fs-6 m-2  fw-bold rounded-pill"
            onClick={() => {
              setFilter(28);
            }}
            isactive={filter === 28 ? "true" : "false"}
          >
            Action
          </Button>
          <Button
            variant="outline-primary"
            className=" fs-6 m-2  fw-bold rounded-pill"
            onClick={() => {
              setFilter(35);
            }}
            isactive={filter === 35 ? "true" : "false"}
          >
            Comedy
          </Button>
          <Button
            variant="outline-primary"
            className=" fs-6 m-2  fw-bold rounded-pill"
            onClick={() => {
              setFilter(12);
            }}
            isactive={filter === 12 ? "true" : "false"}
          >
            Adventure
          </Button>
        </div>
        {filteredItems && filteredItems.length ? (
          <>
            <Row className="g-0 py-5">
              <AnimatePresence>
                {filteredItems.slice(0, visible).map((item) => {
                  return (
                    <Col
                      lg={3}
                      className={
                        item.backdrop_path ? "movie-Card p-2" : "d-none"
                      }
                      key={item.id}
                      id={item.id}
                    >
                      {item.backdrop_path ? (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 70,
                          }}
                        >
                          <div className="img-container">
                            <span className="img-cover">
                              <OverlayTrigger
                                trigger={["hover", "focus"]}
                                placement="top"
                                overlay={popoverHoverFocus}
                              >
                                <i className="fa-solid fa-circle-plus fa-3x text-light pe-auto details" />
                              </OverlayTrigger>

                              <p className="text-light fw-bold fs-5">
                                Show Details
                              </p>
                            </span>
                            <img
                              src={
                                "https://image.tmdb.org/t/p/w500" +
                                item.backdrop_path
                              }
                              className="img-fluid"
                              alt={item.title}
                            />
                          </div>

                          <p className="fw-bold fs-5 title" title={item.name}>
                            {item.original_name}
                          </p>
                          <p className="fw-bold fs-6">
                            First Show :{" "}
                            <span className="released">
                              {" "}
                              {item.first_air_date}{" "}
                            </span>{" "}
                          </p>
                          <div className="genres">
                            {item.genre_ids.includes(28) && (
                              <span type="action"> Action </span>
                            )}
                            {item.genre_ids.includes(12) && (
                              <span type="Adventure"> Adventure </span>
                            )}
                            {item.genre_ids.includes(16) && (
                              <span type="Animation"> Animation </span>
                            )}
                            {item.genre_ids.includes(35) && (
                              <span type="Comedy"> Comedy </span>
                            )}
                            {item.genre_ids.includes(80) && (
                              <span type="Crime"> Crime </span>
                            )}
                            {item.genre_ids.includes(99) && (
                              <span type="Documentary"> Documentary </span>
                            )}
                            {item.genre_ids.includes(18) && (
                              <span type="Drama"> Drama </span>
                            )}
                            {item.genre_ids.includes(10751) && (
                              <span type="Family"> Family </span>
                            )}
                            {item.genre_ids.includes(14) && (
                              <span type="Fantasy"> Fantasy </span>
                            )}
                            {item.genre_ids.includes(36) && (
                              <span type="History"> History </span>
                            )}
                            {item.genre_ids.includes(27) && (
                              <span type="Horror"> Horror </span>
                            )}
                            {item.genre_ids.includes(10402) && (
                              <span type="Music"> Music </span>
                            )}
                            {item.genre_ids.includes(9648) && (
                              <span type="Mystery"> Mystery </span>
                            )}
                            {item.genre_ids.includes(10749) && (
                              <span type="Romance"> Romance </span>
                            )}
                            {item.genre_ids.includes(878) && (
                              <span type="ScienceFiction">
                                {" "}
                                Science Fiction{" "}
                              </span>
                            )}
                            {item.genre_ids.includes(10770) && (
                              <span type="TVMovie">TV Movie </span>
                            )}
                            {item.genre_ids.includes(53) && (
                              <span type="Thriller"> Thriller </span>
                            )}
                            {item.adult ? null : (
                              <i
                                className="fa-solid fa-shield fa-x2"
                                title="No Adult Content"
                              ></i>
                            )}
                          </div>
                        </motion.div>
                      ) : (
                        <ClipLoader color="#36d7b" />
                      )}
                    </Col>
                  );
                })}
              </AnimatePresence>{" "}
            </Row>
            {visible < filteredItems.length && (
              <Button
                variant="outline-primary"
                className=" fs-5 fw-bold my-2"
                onClick={showmore}
              >
                {visible === 8 ? "View All" : "View More"}
              </Button>
            )}{" "}
          </>
        ) : (
          <>
            {" "}
            <h1 className="text-muted fw-bold py-5 mb-5">
              Nothing To Show
            </h1>{" "}
          </>
        )}
      </Container>
    </div>
  );
}
