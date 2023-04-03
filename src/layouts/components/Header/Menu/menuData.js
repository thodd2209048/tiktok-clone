import {
  FeedbackAndHelpIcon,
  KeyboardIcon,
  LanguageIcon,
} from "~/assets/icons";

const menuItems = [
  {
    title: "English",
    icon: <LanguageIcon />,
    children: {
      title: "Language",
      data: [
        { code: "en", title: "English" },
        { code: "es", title: "Spanish" },
        { code: "fr", title: "French" },
        { code: "de", title: "German" },
        { code: "it", title: "Italian" },
        { code: "pt", title: "Portuguese" },
        { code: "ru", title: "Russian" },
        { code: "zh", title: "Chinese" },
        { code: "ja", title: "Japanese" },
        { code: "ko", title: "Korean" },
        { code: "ar", title: "Arabic" },
        { code: "tr", title: "Turkish" },
        { code: "hi", title: "Hindi" },
        { code: "bn", title: "Bengali" },
        { code: "ur", title: "Urdu" },
        { code: "sw", title: "Swahili" },
        { code: "th", title: "Thai" },
        { code: "id", title: "Indonesian" },
        { code: "ms", title: "Malay" },
        { code: "nl", title: "Dutch" },
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
