import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface scrollerProps {
  color?: string;
}

export const Scroller = ({ color }: scrollerProps) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const styles: any = {
    top: "calc(50% - 20px)",
    position: "absolute",
    borderRadius: "30px",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    userSelect: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    zIndex: 2,
  };

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex flex-col w-full h-full m-auto">
      <motion.div
        key={page}
        className="w-full justify-center items-center flex flex-col max-h-max text-light text-center flex-wrap p-10 space-y-4"
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      >
        <img
          alt={images[imageIndex].name}
          src={images[imageIndex].img}
          className="object-contain max-w-uum w-full h-auto"
        />
        <p className={color}>{images[imageIndex].name}</p>
        <p className={color}>{images[imageIndex].year}</p>
        <p className={color}>{images[imageIndex].marks}</p>
      </motion.div>
      <div
        className={`right-3 text-2xl ${color} `}
        style={styles}
        onClick={() => paginate(1)}
      >
        {">"}
      </div>
      <div
        className={`left-3 text-2xl ${color} `}
        style={styles}
        onClick={() => paginate(-1)}
      >
        {"<"}
      </div>
    </div>
  );
};
