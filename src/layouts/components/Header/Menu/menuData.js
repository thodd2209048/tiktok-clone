import {
  FeedbackAndHelpIcon,
  KeyboardIcon,
  LanguageIcon,
} from "~/assets/icons";

const {
  faEarthAmerica,
  faQuestionCircle,
  faKeyboard,
} = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const menuItems = [
  {
    title: "English",
    icon: <LanguageIcon />,
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
    icon: <FeedbackAndHelpIcon />,
  },
  {
    title: "Keyboard shortcuts",
    icon: <KeyboardIcon />,
  },
];

export default menuItems;
