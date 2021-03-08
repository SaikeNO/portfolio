export const variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const imageVariants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: "100%",
    transition: { delay: 0.5, duration: 1.2, ease: "linear" },
  },
  exit: {
    y: "-100%",
    transition: { duration: 1, ease: "linear" },
  },
};

export const imageHiddenVariants = {
  hidden: {
    y: "0",
  },
  visible: {
    y: "100%",
    transition: { delay: 0.6, duration: 0.6, ease: "linear" },
  },
  exit: {
    y: "0",
    transition: { delay: 0.4, duration: 0.5, ease: "linear" },
  },
};

export const decriptionVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.2,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const listVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      when: "beforeChildren",
      delay: 1,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export const formVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
