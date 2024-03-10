import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ icons }) => (
  <div>
    {icons.map((icon, index) => (
      <FontAwesomeIcon
        key={icon + index}
        icon={icon}
        className="p-3 m-2 border rounded-circle"
      />
    ))}
  </div>
);
 
export default SocialButton;