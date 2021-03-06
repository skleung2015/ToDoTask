import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { ButtonTypes } from "../prop-types/types"
import Icon from "./Icon"

const Button = ({
    children,
    className,
    disabled,
    small,
    kind,
    href,
    tabIndex,
    type,
    icon,
    iconDescription,
    ...other
}) => {
    const buttonClasses = classNames(className, {
        "bx--btn": true,
        "bx--btn--sm": small,
        "bx--btn--primary": kind === "primary",
        "bx--btn--danger": kind === "danger",
        "bx--btn--secondary": kind === "secondary",
        "bx--btn--ghost": kind === "ghost",
        "bx--btn--danger--primary": kind === "danger--primary",
        "bx--btn--tertiary": kind === "tertiary"
    })

    const commonProps = {
        tabIndex,
        className: buttonClasses
    }

    const buttonImage = icon ? (
        <Icon
            icon={Object(icon) === icon ? icon : undefined}
            name={Object(icon) !== icon ? icon : undefined}
            description={iconDescription}
            className="bx--btn__icon"
        />
    ) : null

    const button = (
        <button
            {...other}
            {...commonProps}
            disabled={disabled}
            type={type}
            ref={other.inputref}
        >
            {children}
            {buttonImage}
        </button>
    )

    const anchor = (
        <a
            {...other}
            {...commonProps}
            href={href}
            role="button"
            ref={other.inputref}
        >
            {children}
            {buttonImage}
        </a>
    )

    return href ? anchor : button
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    kind: ButtonTypes.buttonKind.isRequired,
    href: PropTypes.string,
    tabIndex: PropTypes.number,
    type: PropTypes.oneOf(["button", "reset", "submit"]),
    role: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.shape({
            width: PropTypes.string,
            height: PropTypes.string,
            viewBox: PropTypes.string.isRequired,
            svgData: PropTypes.object.isRequired
        }),
        PropTypes.string
    ]),
    iconDescription: props => {
        if (props.icon && !props.iconDescription) {
            return new Error(
                "icon property specified without also providing an iconDescription property."
            )
        }
        return undefined
    }
}

Button.defaultProps = {
    iconDescription: "Provide icon description if icon is used",
    tabIndex: 0,
    type: "button",
    disabled: false,
    small: false,
    kind: "danger"
}

export default Button
