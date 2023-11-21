import {
  useButtonProps
} from "./chunk-ZN4YZ3CV.js";
import {
  require_classnames,
  useBootstrapPrefix
} from "./chunk-KT35346Y.js";
import {
  require_jsx_runtime
} from "./chunk-OMAWQ2RS.js";
import {
  __toESM,
  require_react
} from "./chunk-HS7GO4I2.js";

// node_modules/react-bootstrap/esm/Button.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Button = React.forwardRef(({
  as,
  bsPrefix,
  variant = "primary",
  size,
  active = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn");
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    disabled,
    ...props
  });
  const Component = tagName;
  return (0, import_jsx_runtime.jsx)(Component, {
    ...buttonProps,
    ...props,
    ref,
    disabled,
    className: (0, import_classnames.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
  });
});
Button.displayName = "Button";
var Button_default = Button;
export {
  Button_default as default
};
//# sourceMappingURL=react-bootstrap_Button.js.map
