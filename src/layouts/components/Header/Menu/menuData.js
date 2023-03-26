const {
  faEarthAmerica,
  faQuestionCircle,
  faKeyboard,
} = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const menuItems = [
  {
    title: "English",
    icon: <FontAwesomeIcon icon={faEarthAmerica} />,
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    title: "Feedback and help",
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
  },
  {
    title: "Keyboard shortcuts",
    icon: <FontAwesomeIcon icon={faKeyboard} />,
  },
];

export default menuItems;
